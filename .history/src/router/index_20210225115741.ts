// import {
//   createRouter,
//   createWebHistory,
// } from 'vue-router';

// const routerHistory = createWebHistory()
// const router = createRouter({
//   history: ,
//   routes: [
//     //...
//   ],
// });
// routerHistory.listen((to, from, info) => {
//   console.log(`${dirLog[info.direction]} as a ${info.type}`)
// })
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
const a = new Greeter();
