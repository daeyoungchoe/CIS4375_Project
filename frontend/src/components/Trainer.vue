<template>
  <div v-if="currentTrainer" class="edit-form">
    <h4>Trainer List</h4>
    <form>
      <div class="form-group">
        <label for="TrainerFirstName">Trainer First Name</label>
        <input type="text" class="form-control" id="TrainerFirstName" v-model="currentTrainer.TrainerFirstName" />
      </div>
      <div class="form-group">
        <label for="TrainerLastName">Trainer Last Name</label>
        <input type="text" class="form-control" id="TrainerLastName" v-model="currentTrainer.TrainerLastName" />
      </div>
      <div class="form-group">
        <label for="TrainerPhone">Trainer Phone</label>
        <input type="text" class="form-control" id="TrainerPhone" v-model="currentTrainer.TrainerPhone" />
      </div>
      <div class="form-group">
        <label for="TrainerEmail">Trainer Email</label>
        <input type="text" class="form-control" id="TrainerEmail" v-model="currentTrainer.TrainerEmail" />
      </div>
      <div class="form-group">
        <label for="trainerAddress">Trainer Address</label>
        <input type="text" class="form-control" id="TrainerAddress" v-model="currentTrainer.TrainerAddress" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
        <input type="text" class="form-control" id="EmergencyContactFirstName"
          v-model="currentTrainer.EmergencyContactFirstName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
        <input type="text" class="form-control" id="EmergencyContactLastName"
          v-model="currentTrainer.EmergencyContactLastName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactPhone">Emergency Contact Phone</label>
        <input type="text" class="form-control" id="EmergencyContactPhone"
          v-model="currentTrainer.EmergencyContactPhone" />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTrainer.active ? "Active" : "Inactive" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2" v-if="currentTrainer.active" @click="updateActive(false)">
      Inactive
    </button>
    <button v-else class="badge badge-primary mr-2" @click="updateActive(true)">
      Active
    </button>
    <button class="badge badge-danger mr-2" @click="deleteTrainer">
      Delete
    </button>
    <button type="submit" class="badge badge-success" @click="updateTrainer">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Trainer...</p>
  </div>
</template>
<script>
  import TrainerDataService from "../services/TrainerDataService";
  export default {
    name: "editTrainer",
    data() {
      return {
        currentTrainer: null,
        message: ''
      };
    },
    methods: {
      getTrainer(id) {
        TrainerDataService.get(id)
          .then(response => {
            this.currentTrainer = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      updateTrainer() {
        TrainerDataService.update(this.currentTrainer.id, this.currentTrainer)
          .then(response => {
            console.log(response.data);
            this.message = 'The trainer was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
      //Update Trainer status
      updateActive(status) {
        var data = {
          id: this.currentTrainer.id,
          TrainerFirstName: this.currentTrainer.TrainerFirstName,
          TrainerLastName: this.currentTrainer.TrainerLastName,
          TrainerPhone: this.currentTrainer.TrainerPhone,
          TrainerEmail: this.currentTrainer.TrainerTrainerEmail,
          TrainerAddress: this.currentTrainer.TrainerAddress,
          EmergencyContactFirstName: this.currentTrainer.EmergencyContactFirstName,
          EmergencyContactLastName: this.currentTrainer.EmergencyContactLastName,
          EmergencyContactPhone: this.currentTrainer.EmergencyContactPhone,
          active: status
        };
        TrainerDataService.update(this.currentTrainer.id, data)
          .then(response => {
            console.log(response.data);
            this.currentTrainer.active = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
      deleteTrainer() {
        TrainerDataService.delete(this.currentTrainer.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({
              name: "trainers"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getTrainer(this.$route.params.id);
    }
  };
</script>
<style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
</style>