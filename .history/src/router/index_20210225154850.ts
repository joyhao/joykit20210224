import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
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
];

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes,
});


async scrollBehavior(to, from, savedPosition) {
  await scrollWaiter.wait()
  if (savedPosition) {
    return savedPosition
  } else {
    // TODO: check if parent in common that works with alias
    if (to.matched.every((record, i) => from.matched[i] !== record))
      return { left: 0, top: 0 }
  }
  // leave scroll as it is by not returning anything
  // https://github.com/Microsoft/TypeScript/issues/18319
  return false
},
})


const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
