const template = document.createElement("template");
template.innerHTML = "<h1>Hi Everyone</h1>";

class headerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: open });
  }
  attributeChangeCallback() {
    shadow.append(template.content.cloneNode(true));
    this.append(shadow);
  }
}

customElements.define("header-component", headerComponent);
