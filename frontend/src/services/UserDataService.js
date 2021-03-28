import http from "../http-common";

class UserDataService {
  login(data) {
    return http.post("user/login/", data);
  }

  signup(data) {
    return http.post("/user/signup", data);
  }

  delete(id) {
    return http.delete(`user/${id}`);
  }
}

export default new UserDataService();
