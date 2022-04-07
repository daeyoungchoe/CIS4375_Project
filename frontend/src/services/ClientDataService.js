import http from "../http-common";
class ClientDataService {
  getAll() {
    return http.get("/clients");
  }
  get(ClientID) {
    return http.get(`/clients/${ClientID}`);
  }
  create(data) {
    return http.post("/clients", data);
  }
  update(ClientID, data) {
    return http.put(`/clients/${ClientID}`, data);
  }
  delete(ClientID) {
    return http.delete(`/clients/${ClientID}`);
  }
  deleteAll() {
    return http.delete(`/clients`);
  }
  findByTrainerFirstName(ClientFirstName) {
    return http.get(`/clients?ClientFirstName=${ClientFirstName}`);
  }
}
export default new ClientDataService();