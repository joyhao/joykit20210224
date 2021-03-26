<template>
  <article class="home" ref="homeRef">
    <jkGallery ref="jkGalleryRef" />
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
    const homeRef = ref(null);
    onMounted(() => {
      console.log(homeRef.value);

      nextTick(() => {
        const jkGalleryRef = ref(null);

        console.log(jkGalleryRef.value?.jkGallery);
      });
    });
    return { homeRef };
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
