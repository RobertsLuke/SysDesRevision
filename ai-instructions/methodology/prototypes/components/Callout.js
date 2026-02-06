import { Component } from './Component.js';

/**
 * Callout Component
 * Highlights key facts, warnings, or tips
 * Types: 'key' (blue), 'warning' (orange), 'tip' (green), 'info' (gray)
 */
export class Callout extends Component {
  /**
   * @param {object} data
   * @param {string} data.text - The callout content
   * @param {string} [data.type='key'] - Type: 'key', 'warning', 'tip', 'info'
   * @param {string} [data.title] - Optional title/header
   * @param {string} [data.icon] - Optional custom icon emoji
   */
  constructor(data) {
    super(data);
    this.text = data.text || '';
    this.type = data.type || 'key';
    this.title = data.title || null;
    this.icon = data.icon || this.getDefaultIcon();
  }

  /**
   * Get default icon based on type
   * @returns {string}
   */
  getDefaultIcon() {
    const icons = {
      key: '💡',
      warning: '⚠️',
      tip: '✨',
      info: 'ℹ️'
    };
    return icons[this.type] || icons.info;
  }

  /**
   * Render the callout component
   * @returns {HTMLElement}
   */
  render() {
    const container = this.createElement('div', {
      className: `component callout callout-${this.type}`
    });

    // Header with icon and optional title
    if (this.title || this.icon) {
      const header = this.createElement('div', {
        className: 'callout-header'
      });

      if (this.icon) {
        const iconEl = this.createElement('span', {
          className: 'callout-icon',
          text: this.icon
        });
        header.appendChild(iconEl);
      }

      if (this.title) {
        const titleEl = this.createElement('span', {
          className: 'callout-title',
          text: this.title
        });
        header.appendChild(titleEl);
      }

      container.appendChild(header);
    }

    // Content
    const content = this.createElement('div', {
      className: 'callout-content'
    });

    // Handle line breaks in text
    const formattedText = this.text.replace(/\n/g, '<br>');
    content.innerHTML = formattedText;

    container.appendChild(content);

    this.element = container;
    return container;
  }

  /**
   * Static factory for key fact callout
   * @param {string} text
   * @param {string} [title]
   * @returns {Callout}
   */
  static key(text, title = null) {
    return new Callout({ text, type: 'key', title });
  }

  /**
   * Static factory for warning callout
   * @param {string} text
   * @param {string} [title]
   * @returns {Callout}
   */
  static warning(text, title = null) {
    return new Callout({ text, type: 'warning', title });
  }

  /**
   * Static factory for tip callout
   * @param {string} text
   * @param {string} [title]
   * @returns {Callout}
   */
  static tip(text, title = null) {
    return new Callout({ text, type: 'tip', title });
  }

  /**
   * Static factory for info callout
   * @param {string} text
   * @param {string} [title]
   * @returns {Callout}
   */
  static info(text, title = null) {
    return new Callout({ text, type: 'info', title });
  }

  /**
   * Parse callout from text format (from AI response)
   * @param {string} text
   * @param {string} [type='key']
   * @returns {Callout}
   */
  static fromText(text, type = 'key') {
    return new Callout({ text: text.trim(), type });
  }
}
