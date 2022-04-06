<template>
  <div class="submit-form">
    <div v-if="!submitted">
      
      <div class="form-group">
        <label for="TrainerID">Trainer ID</label>
        <input

          class="form-control"
          id="TrainerID"
          required
          v-model="appointment.TrainerID"
          name="TrainerID"
        />
      </div>
      <div class="form-group">
        <label for="ClientID">Client ID</label>
        <input

          class="form-control"
          id="ClientID"
          required
          v-model="appointment.ClientID"
          name="ClientID"
        />
      </div>
            <div class="form-group">
        <label for="TrainingDetail">TrainingDetail ID</label>
        <input

          class="form-control"
          id="ClientID"
          required
          v-model="appointment.TrainingDetailsID"
          name="TrainingDetail"
        />
      </div>
      <div class="form-group">
        <label for="AppointmentDate">Appointment Date (YYYY-MM-DD)</label>
        <input

          class="form-control"
          id="AppointmentDate"
          required
          v-model="appointment.AppointmentDate"
          name="AppointmentDate"
        />
      </div>
      <div class="form-group">
        <label for="AppointmentDuation">Appointment Duration (minutes)</label>
        <input

          class="form-control"
          id="AppointmentDuation"
          required
          v-model="appointment.AppointmentDuation"
          name="AppointmentDuation"
        />
      </div>
            <div class="form-group">
        <label for="AppointmentLocation">Appointment Location</label>
        <input

          class="form-control"
          id="AppointmentLocation"
          required
          v-model="appointment.AppointmentLocation"
          name="AppointmentLocation"
        />
      </div>
            <div class="form-group">
        <label for="Notes">Notes</label>
        <input

          class="form-control"
          id="Notes"
          required
          v-model="appointment.Notes"
          name="Notes"
        />
      </div>

    
      
      <button @click="saveAppointment" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newAppointment">Add</button>
    </div>
  </div>
</template>
<script>
import AppointmentDataService from "../services/AppointmentDataService";
export default {
  name: "add-appointment",
  data() {
    return {
      appointment: {
        AppointmentID: null,
        ClientID: "",
        TrainerID: "",
        TrainingDetailsID: "",
        AppointmentDate: "",
        AppointmentDuartion: "",
        AppointmentLocation: "",
        Notes: ""
      },
      submitted: false
    };
  },
  methods: {
    saveAppointment() {
      var data = {
        ClientID: this.appointment.ClientID,
        TrainerID: this.appointment.TrainerID,
        TrainingDetailsID: this.appointment.TrainingDetailsID,
        AppointmentDate: this.appointment.AppointmentDate,
        AppointmentDuration: this.appointment.AppointmentDuration,
        AppointmentLocation: this.appointment.AppointmentLocation,
        Notes: this.appointment.Notes
      };
      AppointmentDataService.create(data)
        .then(response => {
          this.appointment.AppointmentID = response.data.AppointmentID;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newAppointment() {
      this.submitted = false;
      this.Appointment = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>