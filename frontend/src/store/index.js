// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

//to handle state
const state = {
  posts: [],
  OnePost: [],
};

//to handle state
const getters = {
  posts: (state) => {
    return state.posts;
  },
  post: (state) => {
    return state.post;
  },
};

//to handle actions
const actions = {
  //Liste des posts
  getPosts({ commit }) {
    axios
      .get("http://localhost:3000/api/post")
      .then((response) => commit("SET_POSTS", response.data));
  },
  //Un post by id

  //Supprimer un post
  deletePost({ commit }) {
    axios
      .delete("http://localhost:3000/api/post/")
      .then((response) => commit("DELETE_POST", response.data));
  },
};

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_ONEPOST(state, Onepost) {
    state.post = Onepost;
  },
  DELETE_POST(state, post) {
    state.post = post;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
