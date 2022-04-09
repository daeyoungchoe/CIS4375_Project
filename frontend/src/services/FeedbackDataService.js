import http from "../http-common";
class FeedbackDataService {
  getAll() {
    return http.get("/feedbacks");
  }
  get(id) {
    return http.get(`/feedbacks/${id}`);
  }
  create(data) {
    return http.post("/feedbacks", data);
  }
  update(id, data) {
    return http.put(`/feedbacks/${id}`, data);
  }
  delete(id) {
    return http.delete(`/feedbacks/${id}`);
  }
  deleteAll() {
    return http.delete(`/feedbacks`);
  }
  findByTrainerID(TrainerID) {
    return http.get(`/feedbacks?TrainerID=${TrainerID}`);
  }
  findByClientID(ClientID) {
    return http.get(`/feedbacks?ClientID=${ClientID}`);
  }
  findByDate(Date) {
    return http.get(`/feedbacks?Date=${Date}`);
  }
}
export default new FeedbackDataService();
