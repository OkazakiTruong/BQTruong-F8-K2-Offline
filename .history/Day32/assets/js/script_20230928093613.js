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
          this.handleData(shadow, "h2");
          this.handleBtn(shadow);
        }
        handleData(shadow, query) {
          if (data) {
            let elementList = shadow.querySelectorAll(query);
            this.data = data();
            elementList.forEach((element) => {
              let splitArr = element.textContent.split(" ");
              element.innerHTML = "";
              splitArr.forEach((item) => {
                if (item.match(/{{.+?}}/)) {
                  let inputData = item
                    .match(/{{.+?}}/)[0]
                    .replaceAll("{", "")
                    .replaceAll("}", "")
                    .trim();
                  let dataValue = this.dataValueReturn(inputData);
                  let nodeChange = document.createTextNode(dataValue);
                  if (item.match(/{{counter}}/)) {
                    this.counterNode = nodeChange;
                  }
                  element.appendChild(nodeChange);
                } else {
                  element.appendChild(
                    document.createTextNode(" " + item + " ")
                  );
                }
              });
            });
          }
        }
        handleBtn(shadow) {
          const btnList = document.querySelector("button");
          // console.log(btnList);
          btnList.forEach((btn) => {
            console.log(btn);
          });
        }

        dataValueReturn(inputData) {
          for (let key of Object.keys(this.data)) {
            if (inputData === key) {
              return this.data[key];
            }
          }
          return null;
        }
      }
    );
  }
}
