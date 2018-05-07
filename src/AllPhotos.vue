<template>
  <div id="all-photos">
    <div v-for="(photo,index) in photos" v-bind:key="index" class="image-cell" v-on:click="$emit('show-single-photo',photo)" >
      <img class="image" :src="`data:image/jpeg;base64, ${photo}`"  />
      
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
