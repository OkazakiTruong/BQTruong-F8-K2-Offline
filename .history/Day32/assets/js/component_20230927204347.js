F8.component("header-component", {
  template: `<h1>Hi! Dit i sờ my</h1>`,
});

F8.component("counter-app", {
  data: function () {
    return {
      title: "Counter App",
      counter: 0,
    };
  },
  template: `<h2>{{title}}</h2>
             <h2>Đã đếm {{counter}}</h2>
             <button v-on:click="count++">-</button><button v-on:click="count++">+</button>
     `,
});
