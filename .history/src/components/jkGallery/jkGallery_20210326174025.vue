<template>
  <section class="jkGallery" ref="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    onMounted(() => {
      const jkGalleryRef = ref(null);
      console.log(jkGalleryRef);
      const gallery = new Gallery(jkGalleryRef.value);
    });
  },
});
</script>

<style lang="scss" scoped>
.jkGallery {
  height: 100%;
}
</style>
