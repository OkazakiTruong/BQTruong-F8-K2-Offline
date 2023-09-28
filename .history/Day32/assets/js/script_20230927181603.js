class F8 {
  constructor() {}
  component(componentName, { template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          let templateEle = document.createElement("template");
          templateEle.innerHTML = template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = templateEle.content.cloneNode(true);
        }
      }
    );
  }
}
