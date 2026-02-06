/**
 * Component Index
 * Exports all components and provides utilities for component management
 */

// Base
import { Component } from './Component.js';

// Chat Components
import { MessageBubble } from './MessageBubble.js';

// Teaching Components
import { Comparison } from './Comparison.js';
import { Callout } from './Callout.js';
import { Hook } from './Hook.js';
import { Table } from './Table.js';
import { Image } from './Image.js';

// Re-export all components
export { Component };
export { MessageBubble };
export { Comparison };
export { Callout };
export { Hook };
export { Table };
export { Image };

/**
 * Component Registry
 * Maps component names to their classes for dynamic instantiation
 */
export const ComponentRegistry = {
  comparison: Comparison,
  callout: Callout,
  hook: Hook,
  table: Table,
  image: Image,
  messageBubble: MessageBubble,
};

/**
 * ComponentParser
 * Parses AI response text and extracts component markers
 * Returns structured data for rendering
 */
export class ComponentParser {
  /**
   * Component marker patterns
   * Format: **[COMPONENT_TYPE]**content**[/COMPONENT_TYPE]**
   */
  static patterns = {
    // Patterns accept both **[TAG]** and [TAG] formats (model sometimes drops the asterisks)
    comparison: /(?:\*\*)?\[COMPARISON\](?:\*\*)?([\s\S]*?)(?:\*\*)?\[\/COMPARISON\](?:\*\*)?/g,
    callout: /(?:\*\*)?\[CALLOUT(?:\s+type="([^"]+)")?\](?:\*\*)?([\s\S]*?)(?:\*\*)?\[\/CALLOUT\](?:\*\*)?/g,
    hook: /(?:\*\*)?\[HOOK\](?:\*\*)?([\s\S]*?)(?:\*\*)?\[\/HOOK\](?:\*\*)?/g,
    table: /(?:\*\*)?\[TABLE\](?:\*\*)?([\s\S]*?)(?:\*\*)?\[\/TABLE\](?:\*\*)?/g,
    image: /(?:\*\*)?\[IMAGE\](?:\*\*)?([\s\S]*?)(?:\*\*)?\[\/IMAGE\](?:\*\*)?/g,
  };

  /**
   * Parse a message and extract all components
   * @param {string} text - Raw message text from AI
   * @returns {{text: string, components: Array<{type: string, data: object, position: number}>}}
   */
  static parse(text) {
    const components = [];
    let processedText = text;
    let positionCounter = 0;

    // Reset regex patterns (they have global flag)
    Object.values(this.patterns).forEach(p => p.lastIndex = 0);

    // Extract comparisons
    processedText = processedText.replace(this.patterns.comparison, (match, content) => {
      const placeholder = `{{COMPONENT_${positionCounter}}}`;
      components.push({
        type: 'comparison',
        data: this.parseComparisonContent(content),
        position: positionCounter,
        placeholder
      });
      positionCounter++;
      return placeholder;
    });

    // Extract callouts
    processedText = processedText.replace(this.patterns.callout, (match, type, content) => {
      const placeholder = `{{COMPONENT_${positionCounter}}}`;
      components.push({
        type: 'callout',
        data: { text: content.trim(), type: type || 'key' },
        position: positionCounter,
        placeholder
      });
      positionCounter++;
      return placeholder;
    });

    // Extract hooks
    processedText = processedText.replace(this.patterns.hook, (match, content) => {
      const placeholder = `{{COMPONENT_${positionCounter}}}`;
      components.push({
        type: 'hook',
        data: { text: content.trim() },
        position: positionCounter,
        placeholder
      });
      positionCounter++;
      return placeholder;
    });

    // Extract tables
    processedText = processedText.replace(this.patterns.table, (match, content) => {
      const placeholder = `{{COMPONENT_${positionCounter}}}`;
      components.push({
        type: 'table',
        data: this.parseTableContent(content),
        position: positionCounter,
        placeholder
      });
      positionCounter++;
      return placeholder;
    });

    // Extract images
    processedText = processedText.replace(this.patterns.image, (match, content) => {
      const placeholder = `{{COMPONENT_${positionCounter}}}`;
      components.push({
        type: 'image',
        data: this.parseImageContent(content),
        position: positionCounter,
        placeholder
      });
      positionCounter++;
      return placeholder;
    });

    return {
      text: processedText,
      components
    };
  }

  /**
   * Parse comparison content into structured data
   * @param {string} content
   * @returns {{items: Array<{label: string, points: string[]}>}}
   */
  static parseComparisonContent(content) {
    const items = [];
    const itemBlocks = content.split(/Item:\s*/i).filter(s => s.trim());

    itemBlocks.forEach(block => {
      const lines = block.trim().split('\n');
      const label = lines[0].trim();
      const points = lines
        .slice(1)
        .filter(l => l.trim().startsWith('-'))
        .map(l => l.trim().substring(1).trim());

      if (label) {
        items.push({ label, points });
      }
    });

    return { items };
  }

  /**
   * Parse table content into structured data
   * @param {string} content
   * @returns {{headers: string[], rows: Array<string[]>}}
   */
  static parseTableContent(content) {
    const lines = content.trim().split('\n').filter(l => l.trim());
    const headers = [];
    const rows = [];

    lines.forEach((line, index) => {
      // Skip separator lines
      if (line.match(/^[\s\-|]+$/)) return;

      const cells = line
        .split('|')
        .map(c => c.trim())
        .filter(c => c);

      if (index === 0) {
        headers.push(...cells);
      } else if (cells.length > 0) {
        rows.push(cells);
      }
    });

    return { headers, rows };
  }

  /**
   * Parse image content into structured data
   * Expected format: src="path" alt="text" caption="text" size="medium"
   * @param {string} content
   * @returns {{src: string, alt: string, caption: string|null, size: string}}
   */
  static parseImageContent(content) {
    const srcMatch = content.match(/src="([^"]+)"/);
    const altMatch = content.match(/alt="([^"]+)"/);
    const captionMatch = content.match(/caption="([^"]+)"/);
    const sizeMatch = content.match(/size="([^"]+)"/);

    return {
      src: srcMatch ? srcMatch[1] : content.trim(),
      alt: altMatch ? altMatch[1] : '',
      caption: captionMatch ? captionMatch[1] : null,
      size: sizeMatch ? sizeMatch[1] : 'medium'
    };
  }

  /**
   * Check if text contains any component markers
   * @param {string} text
   * @returns {boolean}
   */
  static hasComponents(text) {
    return Object.values(this.patterns).some(pattern => {
      pattern.lastIndex = 0; // Reset regex state
      return pattern.test(text);
    });
  }
}

/**
 * ComponentFactory
 * Creates component instances from parsed data
 */
export class ComponentFactory {
  /**
   * Create a component instance from parsed data
   * @param {string} type - Component type name
   * @param {object} data - Component data
   * @returns {Component|null}
   */
  static create(type, data) {
    const ComponentClass = ComponentRegistry[type];
    if (ComponentClass) {
      return new ComponentClass(data);
    }
    console.warn(`Unknown component type: ${type}`);
    return null;
  }

  /**
   * Create all components from parsed message
   * @param {Array<{type: string, data: object}>} componentData
   * @returns {Map<number, Component>}
   */
  static createAll(componentData) {
    const components = new Map();

    componentData.forEach(({ type, data, position }) => {
      const component = this.create(type, data);
      if (component) {
        components.set(position, component);
      }
    });

    return components;
  }
}
