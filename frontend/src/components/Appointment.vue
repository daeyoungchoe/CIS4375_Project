<template>
  <div v-if="currentAppointment" class="edit-form">
    <h4>Appointment List</h4>
    <form>
      <div class="form-group">
        <label for="TrainerFirstName">Trainer First Name</label>
        <input type="text" class="form-control" id="TrainerFirstName" v-model="currentAppointment.TrainerFirstName" name="TrainerFirstName"/>
      </div>
      <div class="form-group">
        <label for="TrainerLastName">Trainer Last Name</label>
        <input type="text" class="form-control" id="TrainerLastName" v-model="currentAppointment.TrainerLastName" name="TrainerLastName"/>
      </div>
      <div class="form-group">
        <label for="ClientFirstName">Client First Name</label>
        <input type="text" class="form-control" id="ClientFirstName" v-model="currentAppointment.ClientFirstName" name="ClientFirstName"/>
      </div>
      <div class="form-group">
        <label for="ClientLastName">Client Last Name</label>
        <input type="text" class="form-control" id="ClientLastName" v-model="currentAppointment.ClientLastName" name="ClientLastName"/>
      </div>
      <div class="form-group">
        <label for="TrainingType">Training Type</label>
        <input type="text" class="form-control" id="TrainingType" v-model="currentAppointment.TrainingType" name="TrainingType"/>
      </div>
      <div class="form-group">
        <label for="AppointmentDate">Appointment Date</label>
        <input type="date" class="form-control" id="AppointmentDate" v-model="currentAppointment.AppointmentDate" name="AppointmentDate"/>
      </div>
      <div class="form-group">
        <label for="AppointmentDuration">Appointment Time</label>
        <input type="time" class="form-control" id="AppointmentDuration" v-model="currentAppointment.AppointmentDuration" name="AppointmentDuration"/>
      </div>
      <div class="form-group">
        <label for="AppointmentLocation">Appointment Location</label>
        <input type="text" class="form-control" id="AppointmentLocation"
          v-model="currentAppointment.AppointmentLocation" name="AppointmentLocation"/>
      </div>
      <div class="form-group">
        <label for="Notes">Notes</label>
        <input type="text" class="form-control" id="Notes" v-model="currentAppointment.Notes" name="Notes"/>
      </div>
    </form>


    <button class="badge badge-danger mr-2" @click="deleteAppointment">
      Delete
    </button>
    <button type="submit" class="badge badge-success" @click="updateAppointment">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Appointment...</p>
  </div>
</template>
<script>
  import AppointmentDataService from "../services/AppointmentDataService";
  export default {
    name: "editAppointment",
    data() {
      return {
        currentAppointment: null,
        message: ''
      };
    },
    methods: {
      getAppointment(id) {
        AppointmentDataService.get(id)
          .then(response => {
            this.currentAppointment = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      updateAppointment() {
        AppointmentDataService.update(this.currentAppointment.id, this.currentAppointment)
          .then(response => {
            console.log(response.data);
            this.message = 'The appointment was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },

      deleteAppointment() {
        AppointmentDataService.delete(this.currentAppointment.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({
              name: "appointments"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getAppointment(this.$route.params.id);
    }
  };
</script>
<style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
</style>