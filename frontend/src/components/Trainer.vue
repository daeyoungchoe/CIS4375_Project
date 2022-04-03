<template>
  <div v-if="currentTrainer" class="edit-form">
    <h4>Trainer List</h4>
    <form>
      <div class="form-group">
        <label for="TrainerFirstName">Trainer First Name</label>
        <input type="text" class="form-control" id="TrainerFirstName"
          v-model="currentTrainer.TrainerFirstName"
        />
      </div>
      <div class="form-group">
        <label for="TrainerLastName">Trainer Last Name</label>
        <input type="text" class="form-control" id="TrainerLastName"
          v-model="currentTrainer.TrainerLastName"
        />
      </div>
      <div class="form-group">
        <label for="TrainerEmail">Trainer Email</label>
        <input type="text" class="form-control" id="TrainerEmail"
          v-model="currentTrainer.TrainerEmail"
        />
        </div>
              <div class="form-group">
        <label for="TrainerPhone">Trainer Phone</label>
        <input type="text" class="form-control" id="TrainerPhone"
          v-model="currentTrainer.TrainerPhone"
        />
        </div>
              <div class="form-group">
        <label for="trainerAddress">Trainer Address</label>
        <input type="text" class="form-control" id="TrainerAddress"
          v-model="currentTrainer.trainerAddress"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
        <input type="text" class="form-control" id="EmergencyContactFirstName"
          v-model="currentTrainer.EmergencyContactFirstName"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
        <input type="text" class="form-control" id="EmergencyContactLastName"
          v-model="currentTrainer.EmergencyContactLastName"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactPhone">Emergency Contact Phone</label>
        <input type="text" class="form-control" id="EmergencyContactPhone"
          v-model="currentTrainer.EmergencyContactPhone"
        />
        </div>
    </form>

   <button class="badge badge-primary mr-2"
      v-if="currentTrainer.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>
    <button class="badge badge-danger mr-2"
      @click="deleteTrainer()"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateTrainer"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>You fail...</p>
  </div>
</template>
<script>
import TrainerDataService from "../services/TrainerDataService";
export default {
  name: "editTrainer",
  data() {
    return {
      currentTrainer: 0,
      message: ''
    };
  },
  methods: {
    getTrainer(TrainerID) {
      TrainerDataService.get(TrainerID)
        .then(response => {
          this.currentTrainer = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTrainer() {
      TrainerDataService.update(this.currentTrainer.TrainerID, this.currentTrainer)
        .then(response => {
          console.log(response.data);
          this.message = 'The trainer was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTrainer() {
      TrainerDataService.delete(this.currentTrainer.TrainerID)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "trainers" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTrainer(this.$route.params.TrainerID);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>