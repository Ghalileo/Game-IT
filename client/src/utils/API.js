import axios from "axios";

export default {

  addUser: function(userData) {
    return axios.post("/api/signup", userData);
  }
};
