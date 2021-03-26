declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean;
    // 每个路由都必须声明
    requiresAuth: boolean;
  }
}
