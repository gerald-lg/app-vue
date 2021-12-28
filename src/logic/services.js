import axios from "axios";

const ENDPOINT_PATH_LOGIN = "https://crm.redcapital.cl/api/login";
const ENDPOINT_PATH_POSTS = "https://jsonplaceholder.typicode.com/posts/";

export default {
    login(rut, password) {
      const user = { rut, password };
      return axios.post(ENDPOINT_PATH_LOGIN, user);
    },
    getPosts(){
        return axios.get(ENDPOINT_PATH_POSTS);
    },
    getPost(id){
      return axios.get(ENDPOINT_PATH_POSTS + id, id);
    }
};
