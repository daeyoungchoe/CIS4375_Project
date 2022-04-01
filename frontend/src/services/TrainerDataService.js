import http from "../http-common";
class TrainerDataService {
  getAll() {
    return http.get("/trainers");
  }
  get(TrainerID) {
    return http.get(`/trainers/${TrainerID}`);
  }
  create(data) {
    return http.post("/trainers", data);
  }
  update(TrainerID, data) {
    return http.put(`/trainers/${TrainerID}`, data);
  }
  delete(TrainerID) {
    return http.delete(`/trainers/${TrainerID}`);
  }
  deleteAll() {
    return http.delete(`/trainers`);
  }
  findByTrainerFirstName(TrainerFirstName) {
    return http.get(`/trainers?TrainerFirstName=${TrainerFirstName}`);
  }
}
export default new TrainerDataService();