import axios from "axios";

export default {

  addUser: function(userData) {
    return axios.post("/api/signup", userData);
  }
};

// export default {

//   getThreads: function(threadData) {
//     return axios.get("/api/search", threadData);
//   }
// };