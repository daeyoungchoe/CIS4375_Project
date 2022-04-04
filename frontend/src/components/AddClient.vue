<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="ClientFirstName">Client First Name</label>
        <input type="text" class="form-control" id="ClientFirstName" required v-model="client.ClientFirstName"
          name="ClientFirstName" />
      </div>
      <div class="form-group">
        <label for="ClientLastName">Client Last Name</label>
        <input class="form-control" id="ClientLastName" required v-model="client.ClientLastName"
          name="ClientLastName" />
      </div>
      <div class="form-group">
        <label for="ClientrPhone">Client Phone</label>
        <input class="form-control" id="ClientPhone" required v-model="client.ClientPhone" name="ClientPhone" />
      </div>
      <div class="form-group">
        <label for="ClientEmail">Client Email</label>
        <input class="form-control" id="ClientEmail" required v-model="client.ClientEmail" name="ClientEmail" />
      </div>
      <div class="form-group">
        <label for="ClientAddress">Client Address</label>
        <input class="form-control" id="ClientAddress" required v-model="client.ClientAddress" name="ClientAddress" />
      </div>
      <div class="form-group">
        <label for="Height">Zip Code</label>
        <input class="form-control" id="ClientZip" required v-model="client.ClientZip" name="Height" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
        <input class="form-control" id="EmergencyContactFirstName" required v-model="client.EmergencyContactFirstName"
          name="EmergencyContactFirstName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
        <input class="form-control" id="EmergencyContactLastName" required v-model="client.EmergencyContactLastName"
          name="EmergencyContactLastName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactPhone">Emergency Contact Phone</label>
        <input class="form-control" id="EmergencyContactPhone" required v-model="client.EmergencyContactPhone"
          name="EmergencyContactPhone" />
      </div>
      <div class="form-group">
        <label for="Weight">Weight</label>
        <input class="form-control" id="Weight" required v-model="client.Weight" name="Weight" />
      </div>
      <div class="form-group">
        <label for="Height">Height</label>
        <input class="form-control" id="Height" required v-model="client.Height" name="Height" />
      </div>

      <button @click="saveClient" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newClient">Add</button>
    </div>
  </div>
</template>
<script>
  import ClientDataService from "../services/ClientDataService";
  export default {
    name: "add-client",
    data() {
      return {
        client: {
          id: null,
          ClientFirstName: "",
          ClientLastName: "",
          ClientPhone: "",
          ClientEmail: "",
          ClientAddress: "",
          ClientZip:"",
          EmergencyContactFirstName: "",
          EmergencyContactLastName: "",
          EmergencyContactPhone: "",
          Weight: "",
          Height: "",
          active: false
        },
        submitted: false
      };
    },
    methods: {
      saveClient() {
        var data = {
          ClientFirstName: this.client.ClientFirstName,
          ClientLastName: this.client.ClientLastName,
          ClientPhone: this.client.ClientPhone,
          ClientEmail: this.client.ClientEmail,
          ClientAddress: this.client.ClientAddress,
          ClientZip: this.client.ClientZip,
          EmergencyContactFirstName: this.client.EmergencyContactFirstName,
          EmergencyContactLastName: this.client.EmergencyContactLastName,
          EmergencyContactPhone: this.client.EmergencyContactPhone,
          Weight: this.client.Weight,
          Height: this.client.Height
        };
        ClientDataService.create(data)
          .then(response => {
            this.client.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      newClient() {
        this.submitted = false;
        this.client = {};
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