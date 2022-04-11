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
  findByTrainerFirstName(TrainerFirstName) {
    return http.get(`/trainers?TrainerFirstName=${TrainerFirstName}`);
  }
  findByTrainerActive(){
    return http.get(`/trainers/active`);
  }
  findByTrainerInactive(){
    return http.get('/trainers/inactive')
  }
}
export default new TrainerDataService();