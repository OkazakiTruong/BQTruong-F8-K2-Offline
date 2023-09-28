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
          this.handleData(shadow);
        }
        handleData(shadow) {
          if (data) {
            let h2List = shadow.querySelectorAll("h2");
            this.data = data();
            h2List.forEach((h2) => {
              if (h2.textContent.match(/{{.+?}}/)) {
                let splitArr = h2.textContent.split(" ");
                splitArr.forEach((item, index) => {
                  if (item.match(/{{.+?}}/)) {
                    h1.append(document.createTextNode());
                  } else {
                    if (item !== "") {
                      h1;
                    }
                  }
                });
              }
            });
          }
        }
        dataValueReturn(data) {
          for (let key of Object.keys(this.data)) {
            if (data === key) {
              return (h2.textContent = this.data[key]);
              break;
            }
          }
        }
      }
    );
  }
}
