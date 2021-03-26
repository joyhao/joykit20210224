<template>
  <section class="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const jkGallery = ref(null);

    onMounted(() => {
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
