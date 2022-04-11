<template>
  <div class="submit-form">
    <h3 class="text-center">Book Your Session!</h3>
    <br>
    <form @submit.prevent="saveAppointment()">
      <div class="form-group">
        <label class="required" for="TrainerFirstName"><b>Trainer First Name</b></label>
        <input type="text" class="form-control" id="TrainerFirstName" required v-model="appointment.TrainerFirstName"
          name="TrainerFirstName" />
      </div>
      <div class="form-group">
        <label class="required" for="AppointmentDate"><b>Trainer Last Name</b></label>
        <input type="text" class="form-control" id="TrainerLastName" required v-model="appointment.TrainerLastName"
          name="TrainerLastName" />
      </div>
      <div class="form-group">
        <label class="required" for="ClientFirstName"><b>Client First Name</b></label>
        <input type="text" class="form-control" id="ClientFirstName" required v-model="appointment.ClientFirstName"
          name="ClientFirstName" />
      </div>
      <div class="form-group">
        <label class="required" for="ClientLastName"><b>Client Last Name</b></label>
        <input type="text" class="form-control" id="ClientLastName" required v-model="appointment.ClientLastName"
          name="ClientLastName" />
      </div>

      <div class="form-group">
        <label class="required" for="TrainingType"><b>Training Type</b></label>
        <input type="text" class="form-control" id="TrainingType" required v-model="appointment.TrainingType"
          name="TrainingType" />
      </div>
      <div class="form-group">
        <label class="required" for="AppointmentDate"><b>Appointment Date</b></label>
        <input type="date" :min="currentDateTime()" class="form-control" id="AppointmentDate" required v-model="appointment.AppointmentDate"
          name="AppointmentDate" />
      </div>
      <div class="form-group">
        <label class="required" for="AppointmentDuration"><b>Appointment Time (1 Hour)</b></label>
        <input type="time" class="form-control" id="AppointmentDuation" required
          v-model="appointment.AppointmentDuration" name="AppointmentDuration" />
      </div>
      <div class="form-group">
        <label class="required" for="AppointmentLocation"><b>Appointment Location</b></label>
        <input type="text" class="form-control" id="AppointmentLocation" required
          v-model="appointment.AppointmentLocation" name="AppointmentLocation" />
      </div>
      <div class="form-group">
        <label class="required" for="Notes"><b>Notes</b></label>
        <input type="text" class="form-control" id="Notes" required v-model="appointment.Notes" name="Notes" />
      </div>

      <button class="btn btn-success">Submit</button>
      
    </form>
    <br>
  </div>
</template>
<script>
  import AppointmentDataService from "../services/AppointmentDataService";
  export default {
    name: "add-appointment",
    data() {
      return {
        date1: new Date().toISOString().substr(0, 10) ,
        appointment: {
          id: null,
          TrainerFirstName: "",
          TrainerLastName: "",
          ClientFirstName: "",
          ClientLastName: "",
          TrainingType: "",
          AppointmentDate: "",
          AppointmentDuration: "",
          AppointmentLocation: "",
          Notes: ""
        },
        submitted: false
      };
    },
    methods: {
    currentDateTime() {
      const current = new Date();
      const dateTime = current.getFullYear()+'-'+('0' + (current.getMonth()+1)).slice(-2)+'-'+('0' + (current.getDate()+1)).slice(-2);
      return dateTime;
    },
      saveAppointment() {
        var data = {
          TrainerFirstName: this.appointment.TrainerFirstName,
          TrainerLastName: this.appointment.TrainerLastName,
          ClientFirstName: this.appointment.ClientFirstName,
          ClientLastName: this.appointment.ClientLastName,
          TrainingType: this.appointment.TrainingType,
          AppointmentDate: this.appointment.AppointmentDate,
          AppointmentDuration: this.appointment.AppointmentDuration,
          AppointmentLocation: this.appointment.AppointmentLocation,
          Notes: this.appointment.Notes
        };
        AppointmentDataService.create(data)
          .then(response => {
            this.$router.push('/home')
            this.appointment.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      newAppointment() {
        this.submitted = false;
        this.appointment = {};
      }
    }
  };
</script>
<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  .required:after {
    content:" *";
    color: red;
  }
</style>