<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="miao" src="./assets/a1.png" />
  <img alt="miao" src="./assets/chun.svg" />
  <chun
    style="
       {
        width: 17px;
      }
    "
  />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import chun from "./assets/chun.svg";
console.log(chun);

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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
