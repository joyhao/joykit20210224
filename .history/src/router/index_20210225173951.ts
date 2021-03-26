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
    props: true,
    component: () => import("@views/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: () => import("@views/About/About.vue"),
  },
  {
    path: "/about2",
    name: "About2",
    props: true,
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
  console.log(to);

  const toDepth = to.fullPath.split("/").length;
  const fromDepth = from.fullPath.split("/").length;
  console.log(to.path, from.path);
  console.log(to.path.split("/"), from.path.split("/"));

  to.meta.transition = toDepth < fromDepth ? "slide-right" : "slide-left";
  console.log(to.meta.transition);
});
