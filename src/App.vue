<template>
  <div id="app">
    <navbar 
      :title="title" 
      @showAllPhotos="showAllPhotos"
      @load-photos="loadPhotos"/>
    <allPhotos 
      v-if="currentView === 'AllPhotos'" 
      :photos="photos" 
      @show-single-photo="showSinglePhoto"/>
    <singlePhoto 
      v-if="currentView === 'SinglePhoto'" 
      :photo="selectedPhoto" />
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
    photos: [],
    currentView: "AllPhotos",
    selectedPhoto: undefined,
  }),
  created() {
    this.loadPhotos();
  },
  methods: {
    showSinglePhoto(photo) {
      this.currentView = "SinglePhoto";
      this.selectedPhoto = photo;
    },
    showAllPhotos() {
      this.currentView = "AllPhotos";
    },
    loadPhotos() {
      listObjects().then((data) => {
        const loadedPhotos = Array(data.length).fill("");
        this.photos = loadedPhotos.slice();
        data.forEach((item, index) => {
          getSingleObject(item.Key).then((photo) => {
            loadedPhotos[index] = photo;
            this.photos = loadedPhotos.slice();
          });
        });
      });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
