import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

import { scrollWaiter } from './scrollWaiter';

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About/About.vue"),
  },
];

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes,
  async scrollBehavior(to, from, savedPosition) {
    await scrollWaiter.wait();
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.matched.every((record, i) => from.matched[i] !== record))
        return { left: 0, top: 0 };
    }

    return false;
  },
});

const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
