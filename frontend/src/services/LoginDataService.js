import http from "../http-common";
class LoginDataService {
  getAll() {
    return http.get("/logins");
  }
  get(LoginID) {
    return http.get(`/logins/${LoginID}`);
  }
  create(data) {
    return http.post("/logins", data);
  }
  update(LoginID, data) {
    return http.put(`/logins/${LoginID}`, data);
  }
  delete(LoginID) {
    return http.delete(`/logins/${LoginID}`);
  }
  deleteAll() {
    return http.delete(`/logins`);
  }
}
export default new LoginDataService();
