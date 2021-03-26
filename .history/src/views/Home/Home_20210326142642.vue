<template>
  <article class="home"></article>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {},
  jkGallery: defineAsyncComponent(() => import("@com/jkGallery/jkGallery.vue")),
});
</script>

<style lang="scss" scoped>
.home {
  // height: 60vh;
  // overflow: scroll;
  // scroll-behavior: smooth;
}
h1 {
}
</style>
