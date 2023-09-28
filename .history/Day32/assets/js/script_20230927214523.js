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
            h2List.forEach((h2) => {
              for (let key in Object.keys(this.data))
                if (
                  h2.textContent
                    .match(/{{.+?}}/)[0]
                    .replaceAll("{", "")
                    .replaceAll("}", "")
                    .trim() === key
                ) {
                  h2.textContent = this.data[key];
                }
            });
          }
        }
      }
    );
  }
}

/*
 Object.keys(this.data).forEach((key) => {
                if (
                  h2.textContent
                    .match(/{{.+?}}/)[0]
                    .replaceAll("{", "")
                    .replaceAll("}", "") === key
                ) {
                  h2.textContent = this.data[key];
                }
              });
              */
