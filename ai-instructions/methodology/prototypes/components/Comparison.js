import { Component } from './Component.js';

/**
 * Comparison Component
 * Side-by-side comparison of two or more items
 * Used for teaching contrasts (e.g., light vs electron microscope)
 */
export class Comparison extends Component {
  /**
   * @param {object} data
   * @param {Array<{label: string, points: string[]}>} data.items - Items to compare
   * @param {string} [data.title] - Optional title for the comparison
   */
  constructor(data) {
    super(data);
    this.items = data.items || [];
    this.title = data.title || null;
  }

  /**
   * Render the comparison component
   * @returns {HTMLElement}
   */
  render() {
    const container = this.createElement('div', {
      className: 'component comparison'
    });

    // Optional title
    if (this.title) {
      const titleEl = this.createElement('div', {
        className: 'comparison-title',
        text: this.title
      });
      container.appendChild(titleEl);
    }

    // Grid container for items
    const grid = this.createElement('div', {
      className: 'comparison-grid'
    });

    // Render each item
    this.items.forEach(item => {
      const itemEl = this.renderItem(item);
      grid.appendChild(itemEl);
    });

    container.appendChild(grid);
    this.element = container;
    return container;
  }

  /**
   * Render a single comparison item
   * @param {{label: string, points: string[]}} item
   * @returns {HTMLElement}
   */
  renderItem(item) {
    const itemEl = this.createElement('div', {
      className: 'comparison-item'
    });

    // Label
    const label = this.createElement('div', {
      className: 'comparison-label',
      text: item.label
    });
    itemEl.appendChild(label);

    // Points list
    if (item.points && item.points.length > 0) {
      const list = this.createElement('ul', {
        className: 'comparison-points'
      });

      item.points.forEach(point => {
        const li = this.createElement('li', {
          text: point
        });
        list.appendChild(li);
      });

      itemEl.appendChild(list);
    }

    return itemEl;
  }

  /**
   * Static factory method
   * @param {Array<{label: string, points: string[]}>} items
   * @param {string} [title]
   * @returns {Comparison}
   */
  static create(items, title = null) {
    return new Comparison({ items, title });
  }

  /**
   * Parse comparison from text format (from AI response)
   * Expected format:
   * Item: Label1
   * - point1
   * - point2
   * Item: Label2
   * - point1
   * - point2
   *
   * @param {string} text
   * @returns {Comparison}
   */
  static fromText(text) {
    const items = [];
    const itemBlocks = text.split(/Item:\s*/i).filter(s => s.trim());

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

    return new Comparison({ items });
  }
}
