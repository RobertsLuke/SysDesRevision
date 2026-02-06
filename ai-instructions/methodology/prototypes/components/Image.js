import { Component } from './Component.js';

/**
 * Image Component
 * Displays images with optional caption
 * Used for visual aids in teaching
 */
export class Image extends Component {
  /**
   * @param {object} data
   * @param {string} data.src - Image source path
   * @param {string} [data.alt] - Alt text for accessibility
   * @param {string} [data.caption] - Optional caption below image
   * @param {string} [data.size='medium'] - Size: 'small', 'medium', 'large', 'full'
   */
  constructor(data) {
    super(data);
    this.src = data.src || '';
    this.alt = data.alt || '';
    this.caption = data.caption || null;
    this.size = data.size || 'medium';
  }

  /**
   * Render the image component
   * @returns {HTMLElement}
   */
  render() {
    const container = this.createElement('div', {
      className: `component image-component image-${this.size}`
    });

    // Image element
    const img = this.createElement('img', {
      className: 'image-element',
      attributes: {
        src: this.src,
        alt: this.alt,
        loading: 'lazy'
      }
    });

    // Handle load error
    img.onerror = () => {
      img.style.display = 'none';
      const errorMsg = this.createElement('div', {
        className: 'image-error',
        text: `Image not found: ${this.src}`
      });
      container.appendChild(errorMsg);
    };

    container.appendChild(img);

    // Optional caption
    if (this.caption) {
      const captionEl = this.createElement('div', {
        className: 'image-caption',
        text: this.caption
      });
      container.appendChild(captionEl);
    }

    this.element = container;
    return container;
  }

  /**
   * Static factory method
   * @param {string} src
   * @param {string} [alt]
   * @param {string} [caption]
   * @returns {Image}
   */
  static create(src, alt = '', caption = null) {
    return new Image({ src, alt, caption });
  }

  /**
   * Parse image from text format (from AI response)
   * Expected format: src="path" alt="text" caption="text"
   * @param {string} text
   * @returns {Image}
   */
  static fromText(text) {
    const srcMatch = text.match(/src="([^"]+)"/);
    const altMatch = text.match(/alt="([^"]+)"/);
    const captionMatch = text.match(/caption="([^"]+)"/);
    const sizeMatch = text.match(/size="([^"]+)"/);

    return new Image({
      src: srcMatch ? srcMatch[1] : text.trim(),
      alt: altMatch ? altMatch[1] : '',
      caption: captionMatch ? captionMatch[1] : null,
      size: sizeMatch ? sizeMatch[1] : 'medium'
    });
  }
}
