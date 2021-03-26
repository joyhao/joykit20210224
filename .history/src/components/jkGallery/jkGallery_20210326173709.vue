<template>
  <section class="jkGallery" ref="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const jkGalleryRef = ref(null);

    const gallery = new Gallery(".jkGallery");
    watchEffect(() => {
      // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
      console.log(jkGalleryRef.value); // => null
    });

    console.log(gallery);

    return {
      jkGalleryRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.jkGallery {
  height: 100%;
}
</style>
