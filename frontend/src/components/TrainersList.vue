<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Trainer First Name" v-model="TrainerFirstName" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTrainerFirstName">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-8">
            <label>Trainer Status:</label>
        </div>
        <div class="col-md-8">
            <div class="input-group mb-3">
                <!-- Search Trainer by status -->
                <select v-model="active">
                    <option disabled value="">Please select one</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTrainerStatus">
                        Search
                    </button>
                </div>
            </div>
        </div>
    <div class="col-md-6">
      <h4>Trainers List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(trainer, index) in trainers"
          :key="index" @click="setActiveTrainer(trainer, index)">
          {{ trainer.TrainerFirstName }}  {{ trainer.TrainerLastName }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-info" @click="refreshList">
        Refresh List
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTrainer">
        <h4>Trainer</h4>
        <div>
          <label><strong>Trainer First Name:</strong></label> {{ currentTrainer.TrainerFirstName }}
        </div>
        <div>
          <label><strong>Trainer Last Name:</strong></label> {{ currentTrainer.TrainerLastName }}
        </div>
        <div>
          <label><strong>Trainer Phone:</strong></label> {{ currentTrainer.TrainerPhone }}
        </div>
        <div>
          <label><strong>Trainer Email:</strong></label> {{ currentTrainer.TrainerEmail }}
        </div>
        <div>
          <label><strong>Trainer Address:</strong></label> {{ currentTrainer.TrainerAddress }}
        </div>
        <div>
          <label><strong>Emergenc Contact First Name:</strong></label> {{ currentTrainer.EmergencyContactFirstName }}
        </div>
        <div>
          <label><strong>Emergency Contact Last Name:</strong></label> {{ currentTrainer.EmergencyContactLastName }}
        </div>
        <div>
          <label><strong>Emergency Contact Phone:</strong></label> {{ currentTrainer.EmergencyContactPhone }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentTrainer.active ? "Active" : "Inactive" }}
        </div>
        <router-link :to="'/trainers/' + currentTrainer.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Trainer...</p>
      </div>
    </div>
  </div>
</template>
<script>
  import TrainerDataService from "../services/TrainerDataService";
  export default {
    name: "trainers-list",
    data() {
      return {
        trainers: [],
        currentTrainer: null,
        currentIndex: -1,
        TrainerFirstName: "",
        active: ""
      };
    },
    methods: {
      retrieveTrainers() {
        TrainerDataService.getAll()
          .then(response => {
            this.trainers = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      refreshList() {
        this.retrieveTrainers();
        this.currentTrainer = null;
        this.currentIndex = -1;
      },
      setActiveTrainer(trainer, index) {
        this.currentTrainer = trainer;
        this.currentIndex = trainer ? index : -1;
      },
      removeAllTrainers() {
        TrainerDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      searchTrainerFirstName() {
        TrainerDataService.findByTrainerFirstName(this.TrainerFirstName)
          .then(response => {
            this.trainers = response.data;
            this.setActiveTrainer(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      searchTrainerStatus() {
                if (this.active == "Active") {
                    TrainerDataService.findByTrainerActive()
                        .then(response => {
                            this.trainers = response.data;
                            this.setActiveTrainer(null);
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                    }
                else {
                    TrainerDataService.findByTrainerInactive()
                        .then(response => {
                            this.trainers = response.data;
                            this.setActiveTrainer(null);
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }    
            }
    },
    mounted() {
      this.retrieveTrainers();
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