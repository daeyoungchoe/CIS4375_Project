import http from "../http-common";
class TrainingDetailDataService {
  getAll() {
    return http.get("/trainingdetails");
  }
}
export default new TrainingDetailDataService();