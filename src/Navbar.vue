<template>
  <div id="navbar">
    <h1 
      id="navbar-header" 
      @click="showAllPhotos">{{ title }}</h1>
    <upload />
  </div>
</template>

<script>
import Upload from "./Upload";
import Store from "./store/store";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    upload: Upload,
  },
  methods: {
    showAllPhotos(photo) {
      Store.dispatch({
        type: "showAllPhotos",
      });
    },
  },
  computed: mapState({
    title: function(state) {
      return state.title;
    },
  }),
};
</script>

<style>
#navbar-header {
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 10px auto 10px 20px;
}

#navbar {
  display: flex;
  background-color: #4992ca;
  justify-content: flex-end;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}
</style>
