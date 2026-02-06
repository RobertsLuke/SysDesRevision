/**
 * Base Component class
 * All teaching and chat components extend this class
 */
export class Component {
  constructor(data = {}) {
    this.data = data;
    this.element = null;
  }

  /**
   * Create a DOM element with optional classes and attributes
   * @param {string} tag - HTML tag name
   * @param {object} options - { className, attributes, children, text }
   * @returns {HTMLElement}
   */
  createElement(tag, options = {}) {
    const el = document.createElement(tag);

    if (options.className) {
      el.className = options.className;
    }

    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => {
        el.setAttribute(key, value);
      });
    }

    if (options.text) {
      el.textContent = options.text;
    }

    if (options.html) {
      el.innerHTML = options.html;
    }

    if (options.children) {
      options.children.forEach(child => {
        if (child instanceof HTMLElement) {
          el.appendChild(child);
        } else if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        }
      });
    }

    return el;
  }

  /**
   * Render the component - must be implemented by subclasses
   * @returns {HTMLElement}
   */
  render() {
    throw new Error('render() must be implemented by subclass');
  }

  /**
   * Mount the component to a container
   * @param {HTMLElement} container
   */
  mount(container) {
    this.element = this.render();
    container.appendChild(this.element);
    return this;
  }

  /**
   * Remove the component from the DOM
   */
  unmount() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }

  /**
   * Update the component with new data
   * @param {object} newData
   */
  update(newData) {
    this.data = { ...this.data, ...newData };
    if (this.element && this.element.parentNode) {
      const parent = this.element.parentNode;
      const newElement = this.render();
      parent.replaceChild(newElement, this.element);
      this.element = newElement;
    }
  }
}
