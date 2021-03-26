import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteMeta,
} from 'vue-router';

import { permission } from '@src/entity/permission';

import { scrollWaiter } from './scrollWaiter';
import { scrollPositions } from './var';

/**
 *
 * @param t 延迟时间  ms
 * @return 返回Promise对象
 */
export const delay = (t: number) =>
  new Promise((resolve) => setTimeout(resolve, t));

/**
 * 保存离开页面的滚动距离 ===> 注：保存最外层的(document)滚动条滚动位置
 * @param name 当前路由名称
 * @return 返回滚动条滚动位置
 */
export function saveScrollPosition(name: string) {
  name = name.toLocaleLowerCase();
  return document.documentElement.scrollTop;
}

/**
 * 路由过渡动画添加
 * @param to 当前路由 进入的路由
 * @param from 前路由 离开的路由
 * @return 返回动画的名称
 */
export function transition(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): string {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  return toDepth > fromDepth ? "fold-left" : "fold-right";
}

/**
 *
 * @param to 当前路由  进入的路由
 * @param from 前路由 离开的路由
 * @param savedPosition 保存最外层的(document)滚动条滚动位置
 */
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
    const name = to.name as string;

    return {
      left: 0,
      top: scrollPositions[name] || 0,
      // behavior: "smooth",
    };
  }
  // 不要返回任何东西，保持滚动的原样
  return false;
};

interface pageRoute {
  path: string;
  name: string;
  children?: pageRoute[];
  meta: RouteMeta;
}

/**
 * 根据权限对象生成权限路由列表
 * @returns 生成的权限路由
 */
export function authRouter(child: [string, string][], key = ""): pageRoute[] {
  let list: pageRoute[] = [];
  child.map(([k, v], index) => {
    const path = !index ? "/" : `/${k}`;
    const symbol = k.split("/") ?? k;
    const os = {
      path: `/${k}`,
      name: symbol[1],
      children: [],
      meta: {
        keepAlive: true,
        auth: true,
        isNav: true,
        title: v,
      },
    };
    if (symbol[0] === key && symbol.length > 1) {
      os.children.push(os as never);
    }
    if (symbol.length <= 1) {
      list.push(os);
    }
  });

  console.log(list);
  return list;
}
const arr = Object.entries(permission);

authRouter(arr);

type childRoute = pageRoute[] | null;
function getChildren(child: [string, string][], key: string): childRoute {
  let list: pageRoute[] = [];
  child.map(([k, v], index) => {
    const symbol = k.split("/");
    if (symbol[0] === key && symbol.length > 1) {
      const os = {
        path: `/${k}`,
        name: symbol[1],
        children: [],
        meta: {
          keepAlive: true,
          auth: true,
          isNav: true,
          title: v,
        },
      };
      list.push(os);
    }
  });
  return list;
}
