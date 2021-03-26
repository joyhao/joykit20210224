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
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped></style>
