class F8 {
  constructor() {}
  component(componentName, template) {
    class componentName extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: "true" });
      }
    }
  }
}
