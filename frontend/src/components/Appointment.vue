<template>
  <div v-if="currentAppointment" class="edit-form">
    <h4>Appointment List</h4>
    <form>


      <div class="form-group">
        <label for="TrainerID">Trainer ID</label>
        <input type="text" class="form-control" id="TrainerID" v-model="currentAppointment.TrainerID" />
      </div>
      <div class="form-group">
        <label for="ClientID">Client ID</label>
        <input type="text" class="form-control" id="ClientID" v-model="currentAppointment.ClientID" />
      </div>
      <div class="form-group">
        <label for="TrainingDetailsID">Training Detail ID</label>
        <input type="text" class="form-control" id="TrainingDetailsID" v-model="currentAppointment.TrainingDetailsID" />
      </div>
      <div class="form-group">
        <label for="AppointmentDate">Appointment Date</label>
        <input type="date" class="form-control" id="AppointmentDate" v-model="currentAppointment.AppointmentDate" />
      </div>
      <div class="form-group">
        <label for="AppointmentDuration">Appointment Time</label>
        <input type="time" class="form-control" id="AppointmentDuration" v-model="currentAppointment.AppointmentDuration" />
      </div>
      <div class="form-group">
        <label for="AppointmentLocation">Appointment Location</label>
        <input type="text" class="form-control" id="AppointmentLocation"
          v-model="currentAppointment.AppointmentLocation" />
      </div>
      <div class="form-group">
        <label for="Notes">Log</label>
        <input type="text" class="form-control" id="Notes" v-model="currentAppointment.Notes" />
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