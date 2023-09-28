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
            this.data = data();
            console.log(typeof this.data);
            console.log(Object.keys[this.data]);
            let h2List = shadow.querySelectorAll("h2");
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
