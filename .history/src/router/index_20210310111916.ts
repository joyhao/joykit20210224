import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import {
  saveScrollPosition,
  scrollBehavior,
  transition,
} from './util';
import {
  routes,
  scrollPositions,
} from './var';

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
  console.log(to);
  scrollPositions[from.name ?? ""] = saveScrollPosition(from.name as string);
  to.meta.transition = transition(to, from);
});
