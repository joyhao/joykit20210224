import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

import {
  saveScrollPosition,
  scrollBehavior,
  transition,
} from './util';
import { scrollPositions } from './var';

export const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home/Home.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About/About.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/about2",
    name: "About2",
    component: () => import("@views/About2/About.vue"),
    meta: {
      keepAlive: true,
    },
  },
];
export const delay = (t: number) =>
  new Promise((resolve) => setTimeout(resolve, t));

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes,
  scrollBehavior: scrollBehavior,
});

// router.beforeEach(async (to, from, next) => {
//   next();
// });

router.afterEach((to, from) => {
  if (from.name) {
    scrollPositions[from.name] = saveScrollPosition(from.name as string);
  }
  to.meta.transition = transition(to, from);
});
