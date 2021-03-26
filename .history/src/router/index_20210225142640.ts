import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routerHistory = createWebHistory();
const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    components: {
      components: () => import("@views/index.vue"),
    },
  },
];

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
