<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Trainer ID"
          v-model="TrainerID"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTrainerID"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Appointment List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(appointment, index) in appointments"
          :key="index"
          @click="setActiveAppointment(appointment, index)"
        >
          {{ appointment.ClientFirstName }}  {{ appointment.ClientLastName }}

        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllAppointments">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentAppointment">
        <h4>Appointments</h4>
        <div>
          <label><strong>Trainer ID:</strong></label> 
          {{ currentAppointment.TrainerID }}
        </div>
        <div>
          <label><strong>Client ID:</strong></label> 
          {{ currentAppointment.ClientID }}
        </div>
        <div>
          <label><strong>Training Detail ID:</strong></label> 
          {{ currentAppointment.TrainingDetailsID }}
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
          <label><strong>Notes:</strong></label> {{ currentAppointment.Notes }}
        </div>
        <router-link
          :to="'/appointments/' + currentAppointment.id"
          class="badge badge-warning"
          >Edit</router-link
        >
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
      TrainerID: "",
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
    searchTrainerID() {
      AppointmentDataService.findByTrainerID(this.TrainerID)
        .then((response) => {
          this.trainers = response.data;
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
