import { Component } from './Component.js';
import { Image } from './Image.js';

/**
 * MessageBubble Component
 * Represents a chat message from user or assistant
 *
 * IMPORTANT: Components are rendered as their own self-contained cards,
 * NOT wrapped inside the message bubble. Each Image is its own card.
 * Text goes in the bubble. Components sit alongside as siblings.
 */
export class MessageBubble extends Component {
  /**
   * @param {object} data
   * @param {string} data.role - 'user' or 'assistant'
   * @param {string} data.content - Text content (may contain component placeholders)
   * @param {Component[]} [data.components] - Components to render (each as its own card)
   * @param {string} [data.avatar] - Custom avatar emoji (default: based on role)
   */
  constructor(data) {
    super(data);
    this.role = data.role || 'assistant';
    this.content = data.content || '';
    this.components = data.components || [];
    this.avatar = data.avatar || (this.role === 'user' ? '👤' : '🔬');
  }

  /**
   * Format text content - handle bold, line breaks
   * @param {string} text
   * @returns {string}
   */
  formatText(text) {
    // Bold text
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Line breaks
    text = text.replace(/\n/g, '<br>');
    return text;
  }

  /**
   * Render the message
   * Structure: avatar on left, content parts flow next to it
   * Each part (text bubble or component card) is independent
   * @returns {HTMLElement}
   */
  render() {
    // Main container - uses flex to lay out avatar + parts
    const message = this.createElement('div', {
      className: `message ${this.role}`
    });

    // Avatar
    const avatar = this.createElement('div', {
      className: 'avatar',
      text: this.avatar
    });

    // Body contains all the parts (text bubbles + component cards)
    const body = this.createElement('div', {
      className: 'message-body'
    });

    // Render content with components as separate elements
    this.renderParts(body);

    message.appendChild(avatar);
    message.appendChild(body);

    this.element = message;
    return message;
  }

  /**
   * Render all parts - text in bubbles, components as their own cards
   * @param {HTMLElement} body
   */
  renderParts(body) {
    if (this.components.length === 0) {
      // No components - just text in a bubble
      if (this.content.trim()) {
        const textBubble = this.createElement('div', {
          className: 'message-content',
          html: this.formatText(this.content)
        });
        body.appendChild(textBubble);
      }
      return;
    }

    // Split content by component placeholders
    const parts = this.content.split(/(\{\{COMPONENT_\d+\}\})/g);

    parts.forEach(part => {
      const match = part.match(/\{\{COMPONENT_(\d+)\}\}/);

      if (match) {
        // Component - render as its own card (NOT inside a bubble)
        const index = parseInt(match[1], 10);
        const component = this.components[index];

        if (component instanceof Component) {
          body.appendChild(component.render());
        }
      } else if (part.trim()) {
        // Text - render in its own bubble
        const textBubble = this.createElement('div', {
          className: 'message-content',
          html: this.formatText(part)
        });
        body.appendChild(textBubble);
      }
    });
  }

  /**
   * Add a component to this message
   * @param {Component} component
   */
  addComponent(component) {
    this.components.push(component);
    return this;
  }

  /**
   * Static factory method for creating user messages
   * @param {string} content
   * @returns {MessageBubble}
   */
  static user(content) {
    return new MessageBubble({ role: 'user', content });
  }

  /**
   * Static factory method for creating assistant messages
   * @param {string} content
   * @param {Component[]} components
   * @returns {MessageBubble}
   */
  static assistant(content, components = []) {
    return new MessageBubble({ role: 'assistant', content, components });
  }
}
