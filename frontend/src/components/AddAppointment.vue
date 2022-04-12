<template>
  <div class="submit-form">
    <h3 class="text-center">Book Your Session!</h3>
    <br>
    <form @submit.prevent="saveAppointment()">


      <div class="form-group">
        <label class="required" for="TrainerID"><b>Trainer ID</b></label>
        <input
          type = "number"
          class="form-control"
          id="TrainerID"
          required
          v-model="appointment.TrainerID"
          name="TrainerID"
        />
      </div>
      <div class="form-group">
        <label class="required" for="ClientID"><b>Client ID</b></label>
        <input
        type = "number"

          class="form-control"
          id="ClientID"
          required
          v-model="appointment.ClientID"
          name="ClientID"
        />
      </div>
      <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col"><b>Training Detail ID</b></th>
                      <th scope="col"><b>Training Detail Description</b></th>


                    </tr>
                  </thead>

                  <tbody>
                    <!-- Iterates through trainers table and gets respective values from these keys-->
                   <tr>
                        <td scope="row">1</td>
                        <td scope="row">Fitness</td>
                   </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td scope="row">Boxing</td>
                   </tr>
                   <tr>
                        <td scope="row">1</td>
                        <td scope="row">Football</td>
                   </tr>
                  </tbody>
</table>
            <div class="form-group">
        <label class="required" for="TrainingDetailsID"><b>Training Detail ID</b></label>
        <input
        type = "number"

          class="form-control"
          id="TrainingDetailsID"
          required
          v-model="appointment.TrainingDetailsID"
          name="TrainingDetailsID"
        />
      </div>

      <div class="form-group">
        <label class="required" for="AppointmentDate"><b>Appointment Date</b></label>
        <input
          type="date"
          :min="currentDateTime()"
          class="form-control"
          id="AppointmentDate"
          required
          v-model="appointment.AppointmentDate"
          name="AppointmentDate"
        />
      </div>
      <div class="form-group">
        <label class="required" for="AppointmentDuration"><b>Appointment Time (1 Hour)</b></label>
        <input
        type="time"
          class="form-control"
          id="AppointmentDuration"
          required
          v-model="appointment.AppointmentDuration"
          name="AppointmentDuration"
        />
      </div>
            <div class="form-group">
        <label class="required" for="AppointmentLocation"><b>Appointment Location</b></label>
        <input
          class="form-control"
          id="AppointmentLocation"
          required
          v-model="appointment.AppointmentLocation"
          name="AppointmentLocation"
        />
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
        AppointmentID: null,
        ClientID: "",
        TrainerID: "",
        TrainingDetailsID: "",
        AppointmentDate: "",
        AppointmentDuration: "",
        AppointmentLocation: "",
        Notes: null
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
        ClientID: this.appointment.ClientID,
        TrainerID: this.appointment.TrainerID,
        TrainingDetailsID: this.appointment.TrainingDetailsID,
        AppointmentDate: this.appointment.AppointmentDate,
        AppointmentDuration: this.appointment.AppointmentDuration,
        AppointmentLocation: this.appointment.AppointmentLocation
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