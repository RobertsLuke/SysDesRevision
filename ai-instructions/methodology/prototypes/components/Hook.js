import { Component } from './Component.js';

/**
 * Hook Component
 * Memory anchor for helping students remember key facts
 * Types: 'mnemonic', 'analogy', 'visual', 'phrase'
 */
export class Hook extends Component {
  /**
   * @param {object} data
   * @param {string} data.text - The hook/mnemonic content
   * @param {string} [data.type='phrase'] - Type: 'mnemonic', 'analogy', 'visual', 'phrase'
   * @param {string} [data.label] - What this hook helps remember
   */
  constructor(data) {
    super(data);
    this.text = data.text || '';
    this.type = data.type || 'phrase';
    this.label = data.label || null;
  }

  /**
   * Get icon based on hook type
   * @returns {string}
   */
  getIcon() {
    const icons = {
      mnemonic: '🧠',
      analogy: '🔗',
      visual: '👁️',
      phrase: '💬'
    };
    return icons[this.type] || '🪝';
  }

  /**
   * Render the hook component
   * @returns {HTMLElement}
   */
  render() {
    const container = this.createElement('div', {
      className: `component hook hook-${this.type}`
    });

    // Icon
    const icon = this.createElement('span', {
      className: 'hook-icon',
      text: this.getIcon()
    });
    container.appendChild(icon);

    // Content wrapper
    const content = this.createElement('div', {
      className: 'hook-content'
    });

    // Optional label (what this helps remember)
    if (this.label) {
      const labelEl = this.createElement('div', {
        className: 'hook-label',
        text: this.label
      });
      content.appendChild(labelEl);
    }

    // The hook text itself
    const textEl = this.createElement('div', {
      className: 'hook-text',
      text: this.text
    });
    content.appendChild(textEl);

    container.appendChild(content);

    this.element = container;
    return container;
  }

  /**
   * Static factory for mnemonic hook
   * @param {string} text
   * @param {string} [label]
   * @returns {Hook}
   */
  static mnemonic(text, label = null) {
    return new Hook({ text, type: 'mnemonic', label });
  }

  /**
   * Static factory for analogy hook
   * @param {string} text
   * @param {string} [label]
   * @returns {Hook}
   */
  static analogy(text, label = null) {
    return new Hook({ text, type: 'analogy', label });
  }

  /**
   * Static factory for visual hook
   * @param {string} text
   * @param {string} [label]
   * @returns {Hook}
   */
  static visual(text, label = null) {
    return new Hook({ text, type: 'visual', label });
  }

  /**
   * Static factory for phrase hook ("the clue is in the name")
   * @param {string} text
   * @param {string} [label]
   * @returns {Hook}
   */
  static phrase(text, label = null) {
    return new Hook({ text, type: 'phrase', label });
  }

  /**
   * Parse hook from text format (from AI response)
   * @param {string} text
   * @returns {Hook}
   */
  static fromText(text) {
    return new Hook({ text: text.trim(), type: 'phrase' });
  }
}
