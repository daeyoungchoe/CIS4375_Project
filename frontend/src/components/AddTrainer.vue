<template>
  <div class="submit-form" >
    <h3 class="text-center">Add New Trainer</h3>
    <br>
    <form @submit.prevent="saveTrainer()">
      <div class="form-group">
        <label class="required" for="TrainerFirstName"><b>Trainer First Name</b></label>
        <input type="text" class="form-control" id="TrainerFirstName" v-model="trainer.TrainerFirstName" name="TrainerFirstName" required>
      </div>
      <div class="form-group">
        <label class="required" for="TrainerLastName"><b>Trainer Last Name</b></label>
        <input type="text" class="form-control" id="TrainerLastName" v-model="trainer.TrainerLastName" name="TrainerLastName" required>
      </div>
      <div class="form-group">
        <label class="required" for="TrainerPhone"><b>Trainer Phone</b></label>
        <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" id="TrainerPhone" aria-describedby="phoneHelpBlock" v-model="trainer.TrainerPhone" name="TrainerPhone" required>
        <!-- Help text-->
        <small id="phoneHelpBlock" class="form-text text-muted">
          10 digit phone number should be entered with dashes
        </small>
      </div>
      <div class="form-group">
        <label class="required" for="TrainerEmail"><b>Trainer Email</b></label>
        <input class="form-control" id="TrainerEmail" type="email" v-model="trainer.TrainerEmail" name="TrainerEmail" required>
      </div>
      <div class="form-group">
        <label class="required" for="TrainerAddress"><b>Trainer Address</b></label>
        <input class="form-control" id="TrainerAddress" required v-model="trainer.TrainerAddress"
          name="TrainerAddress" />
      </div>
      <div class="form-group">
        <label class="required" for="EmergencyContactFirstName"><b>Emergency Contact First Name</b></label>
        <input class="form-control" id="EmergencyContactFirstName" required v-model="trainer.EmergencyContactFirstName"
          name="EmergencyContactFirstName" />
      </div>
      <div class="form-group">
        <label class="required" for="EmergencyContactLastName"><b>Emergency Contact Last Name</b></label>
        <input class="form-control" id="EmergencyContactLastName" required v-model="trainer.EmergencyContactLastName"
          name="EmergencyContactLastName" />
      </div>
      <div class="form-group">
        <label class="required" for="EmergencyContactPhone"><b>Emergency Contact Phone</b></label>
        
        <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" id="EmergencyContactPhone" aria-describedby="emergencyphoneHelpBlock" v-model="trainer.EmergencyContactPhone" name="EmergencyContactPhone" required>
        <!-- Help text-->
        <small id="emergencyphoneHelpBlock" class="form-text text-muted">
          10 digit phone number should be entered with dashes
        </small>
      </div>
      <br>
      <!-- Error validation-->
      <p v-if="errors.length">
          <!-- Error message-->
          <b>Please correct the following error(s):</b>
          <ul>
              <!-- For error listed-->
              <li class="required" v-for="error in errors" :key="error">{{ error }} </li>
          </ul>
      </p>
      <button class="btn btn-success">Submit</button>
    </form>
    
    <br>
  </div>
  
</template>
<script>
  import TrainerDataService from "../services/TrainerDataService";
  export default {
    name: "add-trainer",
    data() {
      return {
        errors: [],
        trainer: {
          id: null,
          TrainerFirstName: null,
          TrainerLastName: null,
          TrainerPhone: null,
          TrainerEmail: "",
          TrainerAddress: "",
          EmergencyContactFirstName: "",
          EmergencyContactLastName: "",
          EmergencyContactPhone: "",
          active: false
        },
        submitted: false
      };
    },
    methods: {
      saveTrainer() {
        this.errors = [];
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
            this.$router.push('/trainers')
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
      },
      checkForm: function (e) {
      if (this.TrainerPhone) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Phone Number required!');
      }

      e.preventDefault();
    }
    }
  };
</script>
<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  .required:after {
    content:" *";
    color: red;
  }
</style>