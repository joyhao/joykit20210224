<template>
  <header>
    <router-link to="/home">home</router-link>
    <router-link to="/about/1/a/3?id=1">about</router-link>
    <router-link to="/about2/1/a/3">about2</router-link>
  </header>
  <jk-router></jk-router>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { scrollWaiter } from "@router/scrollWaiter";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld: defineAsyncComponent(
      () => import("./components/HelloWorld.vue")
    ),
    jkRouter: defineAsyncComponent(() => import("@com/jkRouter/jkRouter.vue")),
    Chun: defineAsyncComponent(() => import("@assets/chun.svg")),
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
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
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #2c3e50;
  width: 100%;
  padding: 20px;
  a {
    color: #fff;
    padding: 0 20px;
  }
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
