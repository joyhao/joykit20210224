<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <img alt="miao" src="./assets/a1.jpg" /> -->
  <!-- <img alt="miao" src="./assets/a2.jpg" /> -->
  <header>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
  </header>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
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

export default defineComponent({
  name: "App",
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
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
