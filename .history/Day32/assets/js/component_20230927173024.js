const template = document.createElement("template");
template.innerHTML = "<h1>Hi Everyone</h1>";

class headerComponet extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: open });
  }
  attributeChangeCallback() {}
}
