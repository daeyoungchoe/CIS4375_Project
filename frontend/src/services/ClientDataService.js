import http from "../http-common";
class ClientDataService {
  getAll() {
    return http.get("/clients");
  }
  get(id) {
    return http.get(`/clients/${id}`);
  }
  create(data) {
    return http.post("/clients", data);
  }
  update(id, data) {
    return http.put(`/clients/${id}`, data);
  }
  delete(id) {
    return http.delete(`/clients/${id}`);
  }
  deleteAll() {
    return http.delete(`/clients`);
  }
  findByClientFirstName(ClientFirstName) {
    return http.get(`/clients?ClientFirstName=${ClientFirstName}`);
  }
  findByClientZip(ClientZip) {
    return http.get(`/clients/ClientZip?ClientZip=${ClientZip}`);
  }
  findByClientActive(){
    return http.get(`/clients/active`);
  }
  findByClientInactive(){
    return http.get('/clients/inactive')
  }
}
export default new ClientDataService();