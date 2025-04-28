class PostventaLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const html = `
      <style>
        :host {
          all: initial;
          font-family: Arial, sans-serif;
        }
        .card {
          width: 280px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,.05);
        }
        h3 {
          margin-top: 0;
          color: #04346B;
        }
        label {
          display:block;
          margin-bottom: .25rem;
          font-size: .85rem;
          color:#444;
        }
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: .5rem .6rem;
          border: 1px solid #bbb;
          border-radius: 4px;
          margin-bottom: .75rem;
          font-size: .9rem;
        }
        input:invalid {
          border-color: #e66;
        }
        button {
          width:100%;
          padding:.6rem;
          border:none;
          border-radius:4px;
          background:#04346B;
          color:#fff;
          font-weight:600;
          cursor:pointer;
        }
        button[disabled] { opacity:.6; cursor:not-allowed; }
        .msg { margin-top:.75rem; font-size:.85rem; color:#e66; min-height:1.1rem; }
      </style>
      <div class="card">
        <h3>Acceso Post‑Venta</h3>
        <form novalidate>
          <label>Email</label>
          <input type="email" name="email" required placeholder="usuario@ejemplo.com" />
          <label>Contraseña</label>
          <input type="password" name="password" required minlength="4" placeholder="••••" />
          <button type="submit">Entrar</button>
          <div class="msg"></div>
        </form>
      </div>
    `;
    this.shadowRoot.innerHTML = html;
    this.shadowRoot.querySelector('form').addEventListener('submit', this.handleSubmit.bind(this));
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const pwd = form.password.value.trim();
    const msgEl = form.querySelector('.msg');
    if (!email || !pwd) {
      msgEl.textContent = 'Completa ambos campos.';
      return;
    }
    if (!/^[\w-.]+@[\w-.]+\.[a-z]{2,}$/i.test(email)) {
      msgEl.textContent = 'Email no válido.';
      return;
    }
    msgEl.textContent = '';
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Entrando…';
    // Simular llamada async
    setTimeout(() => {
      btn.textContent = 'Entrar';
      btn.disabled = false;
      // emitir evento onLogin con un usuario ficticio
      this.dispatchEvent(new CustomEvent('onLogin', {
        detail: { userId: 1, email },
        bubbles: true,
        composed: true
      }));
      msgEl.style.color = '#28a745';
      msgEl.textContent = '¡Acceso concedido!';
    }, 1500);
  }
}
if (!customElements.get('postventa-login')) {
  customElements.define('postventa-login', PostventaLogin);
}
