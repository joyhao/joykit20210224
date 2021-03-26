<template>
  <section class="jkGallery" ref="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const jkGalleryRef = ref(null);
    const gallery = new Gallery(".jkGallery");
    console.log(gallery);
  },
});
</script>

<style lang="scss" scoped>
.jkGallery {
  height: 100%;
}
</style>
