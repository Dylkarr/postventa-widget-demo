class PostventaWidget extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    const container = document.createElement('div');
    container.innerHTML = `
      <style>
        :host {
          all: initial;
          font-family: Arial, sans-serif;
        }
        .box {
          padding: 1rem;
          border: 2px dashed #04346B;
          background: #f2f6fc;
          color: #04346B;
          border-radius: 8px;
          display: inline-block;
        }
      </style>
      <div class="box">👋 Hola desde el widget de Post‑Venta</div>
    `;
    shadow.appendChild(container);
  }
}
if (!customElements.get('postventa-widget')) {
  customElements.define('postventa-widget', PostventaWidget);
}