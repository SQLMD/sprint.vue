<template>
  <div id="single-photo">
    <img 
      class = "single-image" 
      :src="`data:image/jpeg;base64, ${photo}`" 
      alt="Photo">
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["photo"],
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
