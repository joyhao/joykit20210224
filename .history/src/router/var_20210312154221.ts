import { RouteRecordRaw } from 'vue-router';

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
  ...jkRoute(),
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound/NotFound.vue"),
  },
];

// 路由配置
export function jkRoute(): RouteRecordRaw[] {
  return [
    {
      path: "/",
      name: "Home",
      component: () => import("@views/Home/Home.vue"),
      meta: {
        keepAlive: true,
        title: "首页",
        auth: true,
        isNav: true,
      },
    },
    {
      path: "/about/:id([^/])*",
      name: "About",
      component: () => import("@views/About/About.vue"),
      meta: {
        keepAlive: true,
        title: "关于",
        auth: true,
        isNav: true,
      },
    },
    {
      path: "/about2/:id([^/])*",
      name: "About2",
      component: () => import("@views/About2/About2.vue"),
      meta: {
        keepAlive: true,
        title: "关于2",
        auth: true,
        isNav: true,
      },
    },
  ];
}
