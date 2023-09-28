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
          // let text = `<button v-on:mouseover="title = 'Hmmm! You are mousing over this btn !!' v-on:mouseout="title = 'You mouse out ' ">`;
          // console.log(text.match(/(v-on:.+?'.+?')/));
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
                  if (item.match(/{{title}}/)) {
                    this.titleNode = nodeChange;
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
          if (btnList) {
            Array.from(btnList).forEach((btn) => {
              let numberEvent = btn.outerHTML.match(/(v-on:.+?'.+?')/);
              // console.log(numberEvent);
              let regex = btn.outerHTML.match(
                /v-on:(?<event>.+?)="(?<eventDoing>.+?)"/
              );
              if (regex) {
                btn.addEventListener(regex.groups.event, () => {
                  this.handleEvent(regex.groups.eventDoing);
                });
              }
            });
          }
        }
        handleEvent(eventDoing) {
          if (eventDoing) {
            if (eventDoing === "count++") {
              let counter = this.counterNode.textContent;
              counter++;
              this.counterNode.textContent = counter;
            }
            if (eventDoing === "count--") {
              let counter = this.counterNode.textContent;
              counter--;
              this.counterNode.textContent = counter;
            }
            if (eventDoing.match(/[\s]*(title)[\s]*=/)) {
              this.titleNode.textContent = eventDoing.match(
                /[\s]*(title)[\s]*=[\s]*'(?<title>.+?)'[\s]*/
              ).groups.title;
            }
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
