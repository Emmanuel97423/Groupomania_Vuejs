import http from "../http-common";

class PostDataService {
  sendingPost(data) {
    return http.post("/post", data);
  }
  getAllPost(data) {
    return http.get("/post", data);
  }
  getOnePost(id) {
    return http.get(`post/${id}`);
  }

  delete(id) {
    return http.delete(`post/${id}`);
  }
}

export default new PostDataService();
