class F8 {
  constructor() {}
  component(componentName, template) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = template;
        }
      }
    );
  }
}
