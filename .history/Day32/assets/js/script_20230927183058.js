class F8 {
  constructor() {}
  static component(componentName, { template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          let templateEle = document.createElement("template");
          if (template) {
            templateEle.innerHTML = template;
          }
          const shadow = this.attachShadow({ mode: "open" });
          shadow.append(templateEle.content.cloneNode(true));
        }
      }
    );
  }
}
