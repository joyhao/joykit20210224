<template>
  <article class="home">
    <jkGallery ref="home" />
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
    const home = ref(null);
    onMounted(() => {
      console.log(home.value);
    });
    return { home };
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
