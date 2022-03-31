<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="TrainerFirstName">Trainer First Name</label>
        <input
          type="text"
          class="form-control"
          id="TrainerFirstName"
          required
          v-model="trainer.TrainerFirstName"
          name="TrainerFirstName"
        />
      </div>
      <div class="form-group">
        <label for="TrainerLastName">Trainer Last Name</label>
        <input
          class="form-control"
          id="TrainerLastName"
          required
          v-model="trainer.TrainerLastName"
          name="TrainerLastName"
        />
      </div>
            <div class="form-group">
        <label for="TrainerPhone">Trainer Phone</label>
        <input
          class="form-control"
          id="TrainerPhone"
          required
          v-model="trainer.TrainerPhone"
          name="TrainerPhone"
        />
      </div>
            <div class="form-group">
        <label for="TrainerEmail">Trainer Email</label>
        <input
          class="form-control"
          id="TrainerEmail"
          required
          v-model="trainer.TrainerEmail"
          name="TrainerEmail"
        />
      </div>
            <div class="form-group">
        <label for="TrainerAddress">Trainer Address</label>
        <input
          class="form-control"
          id="TrainerAddress"
          required
          v-model="trainer.TrainerAddress"
          name="TrainerAddress"
        />
      </div>
                  <div class="form-group">
        <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
        <input
          class="form-control"
          id="EmergencyContactFirstName"
          required
          v-model="trainer.EmergencyContactFirstName"
          name="EmergencyContactFirstName"
        />
      </div>
                  <div class="form-group">
        <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
        <input
          class="form-control"
          id="EmergencyContactLastName"
          required
          v-model="trainer.EmergencyContactLastName"
          name="EmergencyContactLastName"
        />
      </div>
                  <div class="form-group">
        <label for="EmergencyContactPhone">Emergency Contact Phone</label>
        <input
          class="form-control"
          id="EmergencyContactPhone"
          required
          v-model="trainer.EmergencyContactPhone"
          name="EmergencyContactPhone"
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
        TrainerFirstName: "",
        TrainerLastName: "",
        TrainerPhone: "",
        TrainerEmail: "",
        TrainerAddress: "",
        EmergencyContactFirstName: "",
        EmergencyContactLastName: "",
        EmergencyContactPhone: ""


      },
      submitted: false
    };
  },
  methods: {
    saveTrainer() {
      var data = {
        TrainerFirstName: this.trainer.TrainerFirstName,
        TrainerLastName: this.trainer.TrainerLastName,
        TrainerPhone: this.trainer.TrainerPhone,
        TrainerEmail: this.trainer.TrainerEmail,
        TrainerAddress: this.trainer.TrainerAddress,
        EmergencyContactFirstName: this.trainer.EmergencyContactFirstName,
        EmergencyContactLastName: this.trainer.EmergencyContactLastName,
        EmergencyContactPhone: this.trainer.EmergencyContactPhone
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