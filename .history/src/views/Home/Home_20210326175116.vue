<template>
  <article class="home" ref="home">
    <jkGallery />
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
    const home1 = ref(null);
    onMounted(() => {
      nextTick(() => {
        console.log(home1.value);
      });
    });
    return { home1 };
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
