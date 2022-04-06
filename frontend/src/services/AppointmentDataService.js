import http from "../http-common";
class AppointmentDataService {
  getAll() {
    return http.get("/appointment");
  }
  get(AppointmentID) {
    return http.get(`/appointment/${AppointmentID}`);
  }
  create(data) {
    return http.post("/appointment", data);
  }
  update(AppointmentID, data) {
    return http.put(`/appointment/${AppointmentID}`, data);
  }
  delete(AppointmentID) {
    return http.delete(`/appointment/${AppointmentID}`);
  }
  deleteAll() {
    return http.delete(`/appointment`);
  }
  findById(id) {
    return http.get(`/appointment?id=${id}`);
  }
}
export default new AppointmentDataService();