const template = document.createElement("template");
template.innerHTML = `<h1><slot></slot></h1>`;

class headerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: open });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("header-component", headerComponent);
