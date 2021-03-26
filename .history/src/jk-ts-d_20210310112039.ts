export {};

declare module "vue-router" {
  interface RouteMeta {
    keepAlive: boolean;
  }
}
