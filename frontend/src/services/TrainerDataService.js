import http from "../http-common";
class TrainerDataService {
  getAll() {
    return http.get("/trainers");
  }
  get(id) {
    return http.get(`/trainers/${id}`);
  }
  create(data) {
    return http.post("/trainers", data);
  }
  update(id, data) {
    return http.put(`/trainers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/trainers/${id}`);
  }
  deleteAll() {
    return http.delete(`/trainers`);
  }
  findByTrainerFIrstName(TrainerFirstName) {
    return http.get(`/tutorials?TrainerFirstName=${TrainerFirstName}`);
  }
}
export default new TrainerDataService();