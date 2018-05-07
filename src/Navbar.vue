<template>
  <div>
    <h1>{{ title }}</h1>
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
</style>
