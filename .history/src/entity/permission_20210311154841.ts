export const permission = {
  Home: "首页",
  "Home/Music": "音乐",
  "Home/Video": "视频",
  "Home/Picture": "图片",
  About: "关于",
  About2: "关于2",
  "Home/Setting": "设置",
  "About/Contact": "联系我们",
  "Home/Setting/System": "系统设置",
  "Home/Setting/User": "用户设置",
};
type p = typeof permission;
export type permission = p;
export type pKey = keyof p;
