import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routerHistory = createWebHistory()
const router = createRouter({
  history: ,
  routes: [
    //...
  ],
});
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`)
})

class aa {
    readonly a =1;
    constructor(parameters) {
        
    }
}