import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: {
      default: () => import("@views/Home/Home.vue"),
    },
  },
];

export const routerHistory = createWebHistory();
export const router = createRouter({
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
