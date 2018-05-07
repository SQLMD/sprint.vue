<template>
  <div>
    <h1 v-on:click="$emit('showAllPhotos')">{{ title }}</h1>
    <upload />
  </div>
</template>

<script>
import Upload from "./Upload";

export default {
  name: "Navbar",
  components: {
    upload: Upload,
  },
  props: ["title"],
};
</script>

<style>
h1 {
  cursor: pointer;
}
</style>
