class F8 {
  constructor() {}
  component(componentName, { template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          let template = document.createElement("template");
          template.innerHTML = template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = template.content;
        }
      }
    );
  }
}
