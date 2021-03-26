<template>
  <router-view v-slot="{ Component, route }">
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
</template>

<script lang="ts">
import { scrollWaiter } from "@router/scrollWaiter";
import { defineComponent } from "vue";
export default defineComponent({
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
});
</script>

<style lang="scss" scoped>
@import "./jkRouter.module";
</style>
