import { RouteRecordRaw } from 'vue-router';

export const scrollPositions = Object.create(null);

/**
 * 页面级路由声明
 */
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
