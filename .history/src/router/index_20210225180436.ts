import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from 'vue-router';

import { scrollWaiter } from './scrollWaiter';

export const routes: RouteRecordRaw[] = [
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
  {
    path: "/about2",
    name: "About2",
    component: () => import("@views/About2/About.vue"),
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

// router.beforeEach(async (to, from, next) => {
//   console.log(to);

//   next();
// });

router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth < fromDepth ? "fold-left" : "fold-right";
});
