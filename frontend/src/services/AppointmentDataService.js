import http from "../http-common";
class AppointmentDataService {
  getAll() {
    return http.get("/appointments");
  }
  get(AppointmentID) {
    return http.get(`/appointments/${AppointmentID}`);
  }
  create(data) {
    return http.post("/appointments", data);
  }
  update(AppointmentID, data) {
    return http.put(`/appointments/${AppointmentID}`, data);
  }
  delete(AppointmentID) {
    return http.delete(`/appointments/${AppointmentID}`);
  }
  deleteAll() {
    return http.delete(`/appointments`);
  }
  findByTrainerFirstName(TrainerFirstName) {
    return http.get(`/appointments?TrainerFirstName=${TrainerFirstName}`);
  }
}
export default new AppointmentDataService();