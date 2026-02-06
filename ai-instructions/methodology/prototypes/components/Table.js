import { Component } from './Component.js';

/**
 * Table Component
 * Displays structured data in a table format
 * Used for specs, properties, comparisons with multiple attributes
 */
export class Table extends Component {
  /**
   * @param {object} data
   * @param {string[]} data.headers - Column headers
   * @param {Array<string[]>} data.rows - Table rows (array of arrays)
   * @param {string} [data.title] - Optional table title/caption
   * @param {boolean} [data.striped=true] - Alternate row colors
   * @param {boolean} [data.compact=false] - Reduced padding
   */
  constructor(data) {
    super(data);
    this.headers = data.headers || [];
    this.rows = data.rows || [];
    this.title = data.title || null;
    this.striped = data.striped !== false;
    this.compact = data.compact || false;
  }

  /**
   * Render the table component
   * @returns {HTMLElement}
   */
  render() {
    const container = this.createElement('div', {
      className: 'component table-container'
    });

    // Optional title
    if (this.title) {
      const titleEl = this.createElement('div', {
        className: 'table-title',
        text: this.title
      });
      container.appendChild(titleEl);
    }

    // Table element
    const tableClasses = ['data-table'];
    if (this.striped) tableClasses.push('striped');
    if (this.compact) tableClasses.push('compact');

    const table = this.createElement('table', {
      className: tableClasses.join(' ')
    });

    // Header row
    if (this.headers.length > 0) {
      const thead = this.createElement('thead');
      const headerRow = this.createElement('tr');

      this.headers.forEach(header => {
        const th = this.createElement('th', {
          text: header
        });
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);
    }

    // Body rows
    if (this.rows.length > 0) {
      const tbody = this.createElement('tbody');

      this.rows.forEach((row, index) => {
        const tr = this.createElement('tr');
        if (this.striped && index % 2 === 1) {
          tr.className = 'striped-row';
        }

        row.forEach(cell => {
          const td = this.createElement('td', {
            text: cell
          });
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
    }

    container.appendChild(table);

    this.element = container;
    return container;
  }

  /**
   * Add a row to the table
   * @param {string[]} row
   */
  addRow(row) {
    this.rows.push(row);
    return this;
  }

  /**
   * Static factory method
   * @param {string[]} headers
   * @param {Array<string[]>} rows
   * @param {string} [title]
   * @returns {Table}
   */
  static create(headers, rows, title = null) {
    return new Table({ headers, rows, title });
  }

  /**
   * Create a simple key-value table (2 columns)
   * @param {Array<{key: string, value: string}>} items
   * @param {string} [title]
   * @returns {Table}
   */
  static keyValue(items, title = null) {
    const headers = ['Property', 'Value'];
    const rows = items.map(item => [item.key, item.value]);
    return new Table({ headers, rows, title, compact: true });
  }

  /**
   * Parse table from markdown-like format
   * @param {string} text
   * @returns {Table}
   */
  static fromText(text) {
    const lines = text.trim().split('\n').filter(l => l.trim());
    const headers = [];
    const rows = [];

    lines.forEach((line, index) => {
      // Skip separator lines (---)
      if (line.match(/^[\s\-|]+$/)) return;

      const cells = line
        .split('|')
        .map(c => c.trim())
        .filter(c => c);

      if (index === 0) {
        headers.push(...cells);
      } else {
        rows.push(cells);
      }
    });

    return new Table({ headers, rows });
  }
}
