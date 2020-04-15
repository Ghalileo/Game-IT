import axios from "axios";

export default {

  addUser: function (userData) {
    return axios.post("/api/signup", userData);
  },

  getThreads: function () {
    return axios.get("/api/search");
  },

  getThread: function(id) {
    return axios.get("/api/search/" + id);
  },

  addThread: function (ThreadData) {
    return axios.post("/api/search", ThreadData);
  },
};
