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

export const scrollBehavior = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  savedPosition: any
) => {
  // 浏览器前进后退按钮保存滚动条位置
  await scrollWaiter.wait();
  console.log(savedPosition);

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
  // scrollBehavior: scrollBehavior,
});

// router.beforeEach(async (to, from, next) => {
//   console.log(to);

//   next();
// });

router.afterEach((to, from) => {
  if (from.name) {
    const name = (from.name as string).toLocaleLowerCase();
    let element = document.querySelector(`.${name}`);
    console.log(element);

    if (element) {
      scrollPositions[name] = element.scrollTop;
    }
  }
  console.log(scrollPositions);

  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth > fromDepth ? "fold-left" : "fold-right";
});
