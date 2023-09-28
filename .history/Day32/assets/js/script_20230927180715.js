class F8 {
  constructor() {}
  component(componentName, template) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
        }
      }
    );
  }
}
