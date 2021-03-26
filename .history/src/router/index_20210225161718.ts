import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
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
    props: true,
    component: () => import("@views/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: () => import("@views/About/About.vue"),
  },
];
export const delay = (t: number) =>
  new Promise((resolve) => setTimeout(resolve, t));
export const scrollBehavior = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  savedPosition: any
) => {
  // 浏览器前进后退按钮保存滚动条位置
  await scrollWaiter.wait();
  if (savedPosition) {
    return {
      ...savedPosition,
      //   behavior: "smooth",
    };
  } else {
    // 检查父类是否与别名一起工作
    console.log(to, from);

    if (to.matched.every((record, i) => from.matched[i] !== record))
      return {
        left: 0,
        top: 0,
        // behavior: "smooth"
      };
  }
  // 不要返回任何东西，保持滚动的原样
  return false;
};
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes,
  scrollBehavior: scrollBehavior,
});

const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
