const template = document.createElement("template");
template.innerHTML = `<h1>Hi! It me</h1>`;

class headerComponent extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      console.log(template);
      shadow.append(template.content.cloneNode(true));
    }
  }
);
