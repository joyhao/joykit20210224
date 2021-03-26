import { RouteRecordRaw } from 'vue-router';

import { authRouter } from './util';

/**
 * 保存最外层的(document)滚动条滚动位置
 */
export const scrollPositions = Object.create(null);

/**
 * 页面级路由声明
 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/",
  },
  ...authRouter(),
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound/NotFound.vue"),
  },
];
