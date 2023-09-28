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
        }
        handleData(shadow, query) {
          if (data) {
            let elementList = shadow.querySelectorAll(query);
            this.data = data();
            elementList.forEach((element) => {
              let splitArr = element.textContent.split(" ");
              splitArr.forEach((item) => {
               if(item.match(/{{.+?}}/)) 
            });
            });
          }
        }
      }
    );
  }
}

// for (let key of Object.keys(this.data)) {
//     if (

//     ) {
//       h2.textContent = this.data[key];
//       break;
//     }
//   }

//   h2List.forEach((h2) => {
//     if (h2.textContent.match(/{{.+?}}/)) {
//       let splitArr = h2.textContent.split(" ");
//       splitArr.forEach((item, index) => {
//         if (item.match(/{{.+?}}/)) {
//           let inputData = this.dataValueReturn
//           h2.append(document.createTextNode(h2.textContent
//               .match(/{{.+?}}/)[0]
//               .replaceAll("{", "")
//               .replaceAll("}", "")
//               .trim() === key));
//         } else {
//           if (item !== "") {
//             h2;
//           }
//         }
//       });
//     }
//   });

// dataValueReturn(inputData) {
//     for (let key of Object.keys(inputData)) {
//       if (inputData === key) {
//         return this.data[key];
//       }
//     }
//     return null;
//   }
