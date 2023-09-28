class F8 {
  constructor() {}
  static component(componentName, myObj) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          const templateEle = document.createElement("template");
          templateEle.innerHTML = myObj.template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.append(templateEle.content.cloneNode(true));
          console.log(myObj.data());
        }
      }
    );
  }
}
