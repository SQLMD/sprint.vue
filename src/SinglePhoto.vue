<template>
  <div id="single-photo">
    <img 
      class = "single-image" 
      :src="`data:image/jpeg;base64, ${selectedPhoto}`" 
      alt="Photo">
  </div>
</template>

<script>
import Store from "./store/store";
import { mapState } from "vuex";

export default {
  name: "SinglePhoto",
  computed: mapState({
    selectedPhoto: function(state) {
      return state.selectedPhoto;
    },
  }),
};
</script>

<style>
.single-image {
  padding: 50px 0;
  margin: auto;
  width: 100%;
}

#single-photo {
  display: flex;
  align-items: center;
  padding: 30px;
}
</style>
