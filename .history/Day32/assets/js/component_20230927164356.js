customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `<h1>Hi everyone</h1> <h2>This is a Counter app</h2>`;
    }
  }
);
customElements.define(
  "counter-app",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `<p>Đã đếm: 0 lần</p>`;
      this.innerHTML = `<p>Đã đếm: 0 lần</p>`;
    }
  }
);
