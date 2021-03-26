export {};

declare module "vue-router" {
  interface RouteMeta {
    keepAlive: boolean;
    auth: boolean;
    title: string;
    isNav: boolean;
  }
}
