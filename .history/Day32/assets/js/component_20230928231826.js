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
          console.log(this.counterNode);
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
          const btnList = shadow.querySelectorAll("button");
          console.log(btnList);
          if (btnList) {
            Array.from(btnList).forEach((btn) => {
              console.log(btn.outerHTML.match(/v-on:(+.?<event>)/g));

              // if (btn.getAttribute("v-on:click") === "count++") {
              //   btn.addEventListener("click", () => {
              //     let counter = Number(this.counterNode.textContent);
              //     counter++;
              //     this.counterNode.textContent = counter;
              //   });
              // }
              // if (btn.getAttribute("v-on:click") === "count--") {
              //   btn.addEventListener("click", () => {
              //     let counter = Number(this.counterNode.textContent);
              //     counter--;
              //     this.counterNode.textContent = counter;
              //   });
              // }
            });
          }
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
