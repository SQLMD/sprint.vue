<template>
  <div id="app">
    <navbar />
    <allPhotos 
      v-if="currentView === 'AllPhotos'" />
    <singlePhoto 
      v-if="currentView === 'SinglePhoto'" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import Store from "./store/store";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allPhotos: AllPhotos,
    singlePhoto: SinglePhoto,
  },
  created() {
    this.loadPhotos();
  },
  store: Store,
  methods: {
    loadPhotos() {
      Store.dispatch({
        type: "loadPhotos",
      });
    },
  },
  computed: mapState({
    currentView: function(state) {
      return state.currentView;
    },
  }),
};
</script>

<style>
#app {
  text-align: center;
}
</style>
