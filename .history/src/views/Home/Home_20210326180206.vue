<template>
  <article class="home" ref="homeRef">
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
    const homeRef = ref(null);
    const jkGallery = ref(null);
    onMounted(() => {
      console.log(homeRef.value);
      console.log(jkGallery.value);
    });
    return { homeRef, jkGallery };
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
