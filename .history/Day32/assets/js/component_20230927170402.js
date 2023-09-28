customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `<h1>Hi everyone</h1> `;
    }
  }
);
customElements.define(
  "counter-app",
  class extends HTMLElement {
    constructor() {
      super();
      //   const shadowRoot = Reflect.construct(HTMLElement, [], this.constructor);
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.innerHTML = `<h2>This is a Counter app</h2>
        <p>Đã đếm: 0 lần</p>
        <button>+</button>
        <button>-</button>`;
      this.append(this.shadowRoot);
    }
  }
);
