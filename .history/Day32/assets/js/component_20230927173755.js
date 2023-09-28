const template = document.createElement("template");
template.innerHTML = `<h1>Hi Everyone</h1>`;

class headerComponent extends HTMLElement {
    const shadow = this.attachShadow({ mode: open });

  constructor() {
    super();
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("header-component", headerComponent);
