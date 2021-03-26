<template>
  <section class="jkGallery" ref="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const jkGallery = ref(null);
    const acceptValue = (value: string) => console.log(123);
    onMounted(() => {
      console.log(jkGallery.value);
      const jkGalleryRef = document.querySelector(".jkGallery");
      if (!jkGalleryRef) return;
      const gallery = new Gallery(jkGalleryRef);
    });
    return {
      jkGallery,
    };
  },
});
</script>

<style lang="scss" scoped>
.jkGallery {
  height: 100%;
}
</style>
