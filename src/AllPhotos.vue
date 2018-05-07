<template>
  <div>
    <div v-for="photo in photos" v-bind:key="photo">
      <img :src="`data:image/jpeg;base64, ${photo}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: ["photos"],
};
</script>

<style>
</style>
