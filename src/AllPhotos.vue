<template>
  <div id="all-photos">
    <div 
      v-for="(photo,index) in photos" 
      :key="index" 
      class="image-cell" 
      @click="()=>showSinglePhoto(photo)" >
      <img 
        class="image" 
        :src="`data:image/jpeg;base64, ${photo}`" >
    </div>
  </div>
</template>

<script>
import Store from "./store/store";
import { mapState } from "vuex";

export default {
  name: "AllPhotos",
  store: Store,
  methods: {
    showSinglePhoto(photo) {
      Store.dispatch({
        type: "showSinglePhoto",
        photo,
      });
    },
  },
  computed: mapState({
    photos: function(state) {
      return state.photos;
    },
  }),
};
</script>

<style>
#all-photos {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px 0;
}

.image-cell {
  align-self: center;
  margin: 10px 2px;
  position: relative;
  display: inline-block;
  line-height: 0;
  overflow: hidden;
}

.image-cell:hover::after {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  bottom: 0;
  left: -10px;
  box-shadow: inset 0 20px 30px rgba(0, 0, 0, 0.2);
}

.image {
  cursor: pointer;
  height: 120px;
}
</style>
