<template>
  <section class="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const gallery = new Gallery(".jkGallery");
    console.log(gallery);
    console.log(gallery);
  },
});
</script>

<style lang="scss" scoped>
.jkGallery {
  height: 100%;
}
</style>
