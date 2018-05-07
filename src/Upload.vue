<template>
  <div>
    <input type="file" ref="myFile"
    v-on:change="(e)=>{uploadPhoto(e.target.files[0])}"
    />
    <button v-on:click="(e)=>{selectFile()}">Upload Photo</button>
  </div>
</template>

<script>
import { saveObject } from "../utils/index";
export default {
  name: "Upload",
  data: () => ({
    file: undefined,
  }),
  methods: {
    uploadPhoto: function(photo) {
      // saveObject(photo);
      console.log(photo);
    },
    selectFile() {
      this.file = this.$refs.myFile.click();
    },
  },
};
</script>

<style>
button {
  cursor: pointer;
  margin: 10px;
  padding: 8px;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  background-color: transparent;
  color: white;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

input {
  display: none;
}
</style>
