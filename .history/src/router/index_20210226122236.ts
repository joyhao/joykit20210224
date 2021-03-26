import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from 'vue-router';

import { scrollWaiter } from './scrollWaiter';

const scrollPositions = Object.create(null);
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
  from.name && saveScrollPosition(from.name as string);
  transition(to, from);
});

/**
 * 保存离开页面的滚动距离
 * @param name 当前路由名称
 */
function saveScrollPosition(name: string) {
  name = name.toLocaleLowerCase();
  scrollPositions[name] = document.documentElement.scrollTop;
}

/**
 *
 * @param to 当前路由 进入的路由
 * @param from 前路由 离开的路由
 */
function transition(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth > fromDepth ? "fold-left" : "fold-right";
}

/**
 *
 * @param to 当前路由  进入的路由
 * @param from 前路由 离开的路由
 * @param savedPosition 保存最外层的(document)滚动条滚动位置
 */
const scrollBehavior = async (
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
    const name = (to.name as string).toLocaleLowerCase();
    return {
      left: 0,
      top: scrollPositions[name] || 0,
      // behavior: "smooth",
    };
  }
  // 不要返回任何东西，保持滚动的原样
  return false;
};
