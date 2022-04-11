<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Location" v-model="AppointmentLocation" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchAppointmentLocation">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Appointment List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }"
          v-for="(appointment, index) in appointments" :key="index" @click="setActiveAppointment(appointment, index)">
          {{ appointment.ClientFirstName }} {{ appointment.ClientLastName }} {{ appointment.AppointmentDate }}

        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllAppointments">
        Remove All
      </button>
      <button class="m-3 btn btn-sm btn-info" @click="refreshList">
        Refresh List
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentAppointment">
        <h4>Appointments</h4>
        <div>
          <label><strong>Trainer First Name:</strong></label>
          {{ currentAppointment.TrainerFirstName }}
        </div>
        <div>
          <label><strong>Trainer Last Name:</strong></label>
          {{ currentAppointment.TrainerLastName }}
        </div>
        <div>
          <label><strong>Client First Name:</strong></label>
          {{ currentAppointment.ClientFirstName }}
        </div>
        <div>
          <label><strong>Client Last Name:</strong></label>
          {{ currentAppointment.ClientLastName }}
        </div>
        <div>
          <label><strong>Training Type:</strong></label>
          {{ currentAppointment.TrainingType }}
        </div>
        <div>
          <label><strong>Appointment Date: </strong></label>
          {{ currentAppointment.AppointmentDate }}
        </div>
        <div>
          <label><strong>Appointment Time: </strong></label>
          {{ currentAppointment.AppointmentDuration }}
        </div>
        <div>
          <label><strong>Appointment Location:</strong></label>
          {{ currentAppointment.AppointmentLocation }}
        </div>
        <div>
          <label><strong>Logs:</strong></label> {{ currentAppointment.Notes }}
        </div>
        <router-link :to="'/appointments/' + currentAppointment.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Trainer...</p>
      </div>
    </div>
  </div>
</template>
<script>
  import AppointmentDataService from "../services/AppointmentDataService";
  export default {
    name: "appointments-list",
    data() {
      return {
        appointments: [],
        currentAppointment: null,
        currentIndex: -1,
        TrainerFirstName: "",
        AppointmentLocation:"",
      };
    },
    methods: {
      retrieveAppointments() {
        AppointmentDataService.getAll()
          .then((response) => {
            this.appointments = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      refreshList() {
        this.retrieveAppointments();
        this.currentAppointment = null;
        this.currentIndex = -1;
      },
      setActiveAppointment(appointment, index) {
        this.currentAppointment = appointment;
        this.currentIndex = appointment ? index : -1;
      },
      removeAllAppointments() {
        AppointmentDataService.deleteAll()
          .then((response) => {
            console.log(response.data);
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    /*  searchTrainerFirstName() {
        AppointmentDataService.findByTrainerFirstName(this.TrainerFirstName)
          .then((response) => {
            this.appointments = response.data;
            this.setActiveAppointment(null);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },      */
    searchAppointmentLocation() {
        AppointmentDataService.findByAppointmentLocation(this.AppointmentLocation)
          .then((response) => {
            this.appointments = response.data;
            this.setActiveAppointment(null);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.retrieveAppointments();
    },
  };
</script>
<style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>