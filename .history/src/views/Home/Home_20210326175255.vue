<template>
  <article class="home">
    <jkGallery ref="jkGallery" />
  </article>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  ref,
  onMounted,
  watchEffect,
  nextTick,
} from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const jkGallery = ref(null);
    onMounted,
      () => {
        nextTick(() => {
          console.log(jkGallery.value);
        });
      };
    return { jkGallery };
  },
  components: {
    jkGallery: defineAsyncComponent(
      () => import("@com/jkGallery/jkGallery.vue")
    ),
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 60px);
  overflow: hidden;
}
h1 {
}
</style>
