<template>
  <div id="app">
    <navbar :title="title"/>
    <allPhotos v-if="currentView === 'AllPhotos'" :photos="photos" v-on:show-single-photo="showSinglePhoto"/>
    <singlePhoto v-if="currentView === 'SinglePhoto'" :photo="selectedPhoto" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject } from "../utils/index";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allPhotos: AllPhotos,
    singlePhoto: SinglePhoto,
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
  methods: {
    showSinglePhoto: function(photo) {
      // console.log("It worked");
      this.currentView = "SinglePhoto";
      this.selectedPhoto = photo;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
