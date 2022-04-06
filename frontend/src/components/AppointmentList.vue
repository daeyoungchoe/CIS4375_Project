<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Appointment ID" v-model="AppointmentID" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchAppointmentID">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Appointment List</h4>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllAppointment">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentAppointment">
        <h4>Appointment</h4>
        <div>
          <label><strong>Trainer ID:</strong></label> {{ currentAppointment.TrainerID }}
        </div>
        <div>
          <label><strong>Client ID:</strong></label> {{ currentAppointment.ClientID }}
        </div>
        <div>
          <label><strong>Training Detail ID:</strong></label> {{ currentAppointment.TrainingDetailsID }}
        </div>
        <div>
          <label><strong>Appointment Date:</strong></label> {{ currentAppointment.Appointment }}
        </div>
                <div>
          <label><strong>Appointment Duration:</strong></label> {{ currentAppointment.AppointmentDuration }}
        </div>
        <div>
          <label><strong>Appointment Location:</strong></label> {{ currentAppointment.AppointmentLocation }}
        </div>
        <div>
          <label><strong>Notes:</strong></label> {{ currentAppointment.Notes }}
        </div>
        <router-link :to="'/appointment/' + currentAppointment.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Appointment...</p>
      </div>
    </div>
  </div>
</template>
<script>
  import AppointmentDataService from "../services/AppointmentDataService";
  export default {
    name: "appointment-list",
    data() {
      return {
        appointment: [],
        currentAppointment: null,
        currentIndex: -1,
        AppointmentID: ""
      };
    },
    methods: {
      retrieveAppointment() {
        AppointmentDataService.getAll()
          .then(response => {
            this.appointment = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      refreshList() {
        this.retrieveAppointment();
        this.currentAppointment = null;
        this.currentIndex = -1;
      },
    
      removeAllAppointment() {
        AppointmentDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },

      searchAppointment() {
        AppointmentDataService.findByAppointmentID(this.AppointmentID)
          .then(response => {
            this.appointment = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveAppointment();
    }
  };
</script>
<style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>