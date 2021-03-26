import { RouteRecordRaw } from 'vue-router';

/**
 * 保存最外层的(document)滚动条滚动位置
 */
export const scrollPositions = Object.create(null);

// joykit 路由
export const jk = [
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

/**
 * 页面级路由声明
 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  ...jk,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound/NotFound.vue"),
  },
];
