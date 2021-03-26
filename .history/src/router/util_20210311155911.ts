import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';

import {
  permission,
  pKey,
} from '@src/entity/permission';

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
  name: string;
  title: string;
  path: string;
  children?: pageRoute[];
}

function transData(data: permission): pageRoute[] {
  let obj = {};
  for (let key in data) {
    let list = key.split("/");
    list.reduce((parent: any, current: string) => {
      return (parent[current] = parent[current] || {});
    }, obj);
  }
  return loop(obj, "/", data);
}
function loop(obj: any, path: string, data: permission): pageRoute[] {
  return Object.keys(obj).map((key) => {
    let p = path + key;
    let cc = loop(obj[key], p + "/", data);
    const k: pKey = p.slice(1) as pKey;
    return {
      name: key,
      title: data[k],
      path: p,
      children: cc.length ? cc : undefined,
    };
  });
}

console.log(transData(permission));
