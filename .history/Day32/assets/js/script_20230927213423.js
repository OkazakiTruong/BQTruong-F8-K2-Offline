class F8 {
  constructor() {}
  static component(componentName, { data, template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          this.template = document.createElement("template");
          this.template.innerHTML = template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.append(this.template.content.cloneNode(true));
          if (data) {
            let h2List = shadow.querySelectorAll("h2");

            this.data = data();
            Object.keys(this.data).forEach((key) => {});
            h2List.forEach((h2) => {
              h2.textContent
                .match(/{{.+?}}/)[0]
                .replaceAll("{", "")
                .replaceAll("}", "");
            });
          }
        }
      }
    );
  }
}
