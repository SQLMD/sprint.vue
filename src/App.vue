<template>
  <div id="app">
    <navbar :title="title"/>
    <allPhotos :photos="photos"/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject } from "../utils/index";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allPhotos: AllPhotos,
  },
  data: () => ({
    title: "Photo Upload App",
    photos: [1, 2, 3, 4],
    currentView: "AllPhotos",
    selectedPhoto: undefined,
  }),
  created: function() {
    listObjects()
      .then((data) =>
        Promise.all(data.map((item) => getSingleObject(item.Key)))
      )
      .then((photos) => {
        this.photos = photos;
      });
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
