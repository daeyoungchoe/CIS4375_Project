import http from "../https-common";
class TrainerDataService {
  getAll() {
    return http.get("/trainers");
  }
  get(id) {
    return http.get(`/trainers/${id}`);
  }
  create(data) {
    return http.post("/trainer", data);
  }
  update(id, data) {
    return http.put(`/trainers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/trainers/${id}`);
  }
}
export default new TrainerDataService();