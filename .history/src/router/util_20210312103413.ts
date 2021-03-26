import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
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

/**
  父节点id
 
  pId: string;
    当前节点id
  
  id: string;
   节点名称
  
  title: string;
   节点路径
  
  path: string;
 */
interface PMap {
  /**
   * 父节点id
   */
  pId: string;
  /**
   * 当前节点id
   */
  id: string;
  /**
   * 节点名称
   */
  title: string;
  /**
   * 节点路径
   */
  path: string;
}

function mapToList(permission: permission): PMap[] {
  const list = Object.keys(permission).map((key) => {
    const pathArr = key.split("/");
    const pId = pathArr[pathArr.length - 2] ?? "root";
    const id = pathArr[pathArr.length - 1];

    return {
      pId,
      id,
      title: permission[key],
      path: key,
    };
  });
  return list;
}

let map = list.reduce((acc, current) => {
  let key = "name";
  let _key = `key_${[current[key]]}`;
  acc[_key] = current;
  return acc;
}, {});

let result = [];
list.forEach((item) => {
  let _key = `key_${item.pId}`;
  let parent = map[_key];

  if (!parent) {
    result.push(item);
  } else {
    parent.children = parent.children || [];
    parent.children.push(item);
  }
});
