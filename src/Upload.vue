<template>
  <div>
    <input 
      type="file" 
      ref="myFile"
      @change="(e)=>{uploadPhoto(e.target.files[0])}"
    >
    <button @click="(e)=>{selectFile()}">Upload Photo</button>
  </div>
</template>

<script>
import { saveObject } from "../utils/index";
import Store from "./store/store";
export default {
  name: "Upload",
  methods: {
    uploadPhoto(photo) {
      saveObject(photo).then(() => {
        this.loadPhotos();
      });
    },
    loadPhotos() {
      Store.dispatch({
        type: "loadPhotos",
      });
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
