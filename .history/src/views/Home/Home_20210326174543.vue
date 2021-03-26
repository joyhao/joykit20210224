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
} from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const homeRef = ref(null);
    watchEffect(() => {
      console.log(homeRef.value);
    });
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
