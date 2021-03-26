import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routerHistory = createWebHistory();
const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes,
});

const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
