class F8 {
  constructor() {}
  component(componentName, { templateE }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          let template = document.createElement("template");
          template.innerHTML = templateE;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = template.content.cloneNode(true);
        }
      }
    );
  }
}
