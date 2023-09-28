class F8 {
  constructor() {}
  static component(componentName, { data, template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          const templateEle = document.createElement("template");
          templateEle.innerHTML = template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.append(templateEle.content.cloneNode(true));
        }
      }
    );
    let dataGet = data();
    console.log(dataGet);
  }
}
