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
export default {
  name: "Upload",
  data: () => ({
    file: undefined,
  }),
  methods: {
    uploadPhoto(photo) {
      saveObject(photo).then(() => {
        this.$emit("load-photos");
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
