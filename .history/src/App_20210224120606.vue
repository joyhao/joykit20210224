<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="miao" src="./assets/a1.jpg?size=100x100" />
  <img alt="miao" src="./assets/chun.svg" />
  <Chun />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld: defineAsyncComponent(
      () => import("./components/HelloWorld.vue")
    ),
    Chun: defineAsyncComponent(() => import("./assets/chun.svg")),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
