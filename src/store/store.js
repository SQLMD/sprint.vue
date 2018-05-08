const Vue = require("vue");
const Vuex = require("vuex");
import { listObjects, getSingleObject } from "../../utils/index";

Vue.default.use(Vuex);

const state = {
  title: "Photo Upload App",
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

const mutations = {
  loadPhotos(state) {
    listObjects().then((data) => {
      const loadedPhotos = Array(data.length).fill("");
      state.photos = loadedPhotos.slice();
      data.forEach((item, index) => {
        getSingleObject(item.Key).then((photo) => {
          loadedPhotos[index] = photo;
          state.photos = loadedPhotos.slice();
        });
      });
    });
  },
  showSinglePhoto(state, payload) {
    state.currentView = "SinglePhoto";
    state.selectedPhoto = payload.photo;
  },
  showAllPhotos(state) {
    state.currentView = "AllPhotos";
  },
};

const actions = {
  loadPhotos(context) {
    context.commit("loadPhotos");
  },
  showSinglePhoto(context, payload) {
    context.commit("showSinglePhoto", payload);
  },
  showAllPhotos(context) {
    context.commit("showAllPhotos");
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
