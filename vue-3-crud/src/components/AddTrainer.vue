<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="trainerFirstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="trainerFirstName"
          required
          v-model="trainer.trainerFirstName"
          name="trainerFirstName"
        />
      </div>
      <div class="form-group">
        <label for="trainerLastName">Last Name</label>
        <input
          class="form-control"
          id="trainerLastName"
          required
          v-model="trainer.trainerLastName"
          name="trainerLastName"
        />
      </div>

            <div class="form-group">
        <label for="trainerEmail">Last Name</label>
        <input
          class="form-control"
          id="trainerEmail"
          required
          v-model="trainer.trainerEmail"
          name="trainerEmail"
        />
      </div>

            <div class="form-group">
        <label for="trainerPhone">Last Name</label>
        <input
          class="form-control"
          id="trainerPhone"
          required
          v-model="trainer.trainerPhone"
          name="trainerPhone"
        />
      </div>

            <div class="form-group">
        <label for="trainerAddress">Last Name</label>
        <input
          class="form-control"
          id="trainerAddress"
          required
          v-model="trainer.trainerAddress"
          name="trainerAddress"
        />
      </div>
      
      <button @click="saveTrainer" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTrainer">Add</button>
    </div>
  </div>
</template>
<script>
import TrainerDataService from "../services/TrainerDataService";
export default {
  name: "add-trainer",
  data() {
    return {
      trainer: {
        id: null,
        trainerFirstName: "",
        trainerLastName: "",
        trainerEmail: "",
        trainerPhone: "",
        trainerAddress: ""
      }
    };
  },
  methods: {
    saveTrainer() {
      var data = {
        trainerFirstName: this.trainer.trainerFIrstName,
        trainerLastName: this.trainer.trainerLastName,
        trainerEmail: this.trainer.trainerEmail,
        trainerPhone: this.trainer.trainerPhone,
        trainerAddress: this.trainer.trainerAddress
      };
      TrainerDataService.create(data)
        .then(response => {
          this.trainer.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTrainer() {
      this.submitted = false;
      this.trainer = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>