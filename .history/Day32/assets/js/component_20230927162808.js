customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      console.log("hello word");
    }
  }
);
