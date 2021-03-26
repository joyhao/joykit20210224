<template>
  <section class="jkGallery" ref="jkGallery"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Gallery } from "./ts/gallery";
export default defineComponent({
  name: "jkGallery",
  setup() {
    const jkGalleryRef = ref(null);

    const gallery = new Gallery(".jkGallery");
    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(jkGalleryRef.value); // <div>这是根元素</div>
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
