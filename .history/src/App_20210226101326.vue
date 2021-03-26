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
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
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
  overflow-x: hidden;
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
  z-index: 20;
}
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: hidden; */
  }
}
.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: hidden; */
  }
}
</style>
