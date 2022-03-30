<template>
  <div v-if="currentTrainer" class="edit-form">
    <h4>Trainer</h4>
    <form>
      <div class="form-group">
        <label for="trainerFirstName">First Name</label>
        <input type="text" class="form-control" id="trainerFirstName"
          v-model="currentTrainer.trainerFirstName"
        />
      </div>
      <div class="form-group">
        <label for="trainerLastName">Last Name</label>
        <input type="text" class="form-control" id="trainerLastName"
          v-model="currentTrainer.TrainerLastName"
        />
      </div>
      <div class="form-group">
        <label for="trainerEmail">Email</label>
        <input type="text" class="form-control" id="Email"
          v-model="currentTrainer.trainerEmail"
        />
        </div>
              <div class="form-group">
        <label for="trainerEmail">Phone</label>
        <input type="text" class="form-control" id="Phone"
          v-model="currentTrainer.trainerPhone"
        />
        </div>
              <div class="form-group">
        <label for="trainerAddress">Address</label>
        <input type="text" class="form-control" id="Address"
          v-model="currentTrainer.trainerAddress"
        />
        </div>
    </form>

    <button type="submit" class="badge badge-success"
      @click="updateTrainer"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a button...</p>
  </div>
</template>
<script>
import TrainerDataService from "../services/TrainerDataService";
export default {
  name: "trainerList",
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