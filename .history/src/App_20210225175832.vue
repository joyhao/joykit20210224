<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <img alt="miao" src="./assets/a1.jpg" /> -->
  <!-- <img alt="miao" src="./assets/a2.jpg" /> -->
  <header>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/about2">about2</router-link>
  </header>
  <router-view v-slot="{ Component, route }">
    {{ route.meta.transition }}
    <transition
      :name="route.meta.transition || 'fade'"
      mode="out-in"
      @before-enter="flushWaiter"
      @before-leave="setupWaiter"
    >
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
  <!-- <img alt="miao" src="./assets/chun.svg" /> -->
  <!-- <Chun /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { scrollWaiter } from "@router/scrollWaiter";

export default defineComponent({
  name: "App",
  setup() {
    function flushWaiter() {
      scrollWaiter.flush();
    }
    function setupWaiter() {
      scrollWaiter.add();
    }
    return {
      flushWaiter,
      setupWaiter,
    };
  },
  components: {
    HelloWorld: defineAsyncComponent(
      () => import("./components/HelloWorld.vue")
    ),
    Chun: defineAsyncComponent(() => import("@assets/chun.svg")),
  },
});
</script>

<style lang="scss">
html,
body,
#app {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  position: sticky;
  top: 0;
  z-index: 2;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
