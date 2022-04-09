<template>
  <div class="submit-form">
    <h3 class="text-center">Client Sign Up</h3>
    <br>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="id">User ID</label>
        <input type="number" class="form-control" id="id" required v-model="client.id"
          name="id" />
      </div>
      <div class="form-group">
        <label for="ClientFirstName"><b>Client First Name</b></label>
        <input type="text" class="form-control" id="ClientFirstName" required v-model="client.ClientFirstName"
          name="ClientFirstName" />
      </div>
      <div class="form-group">
        <label for="ClientLastName"><b>Client Last Name</b></label>
        <input class="form-control" id="ClientLastName" required v-model="client.ClientLastName"
          name="ClientLastName" />
      </div>
      <div class="form-group">
        <label for="ClientrPhone"><b>Client Phone</b></label>
        <input class="form-control" id="ClientPhone" required v-model="client.ClientPhone" name="ClientPhone" />
      </div>
      <div class="form-group">
        <label for="ClientEmail"><b>Client Email</b></label>
        <input class="form-control" id="ClientEmail" required v-model="client.ClientEmail" name="ClientEmail" />
      </div>
      <div class="form-group">
        <label for="ClientAddress"><b>Client Address</b></label>
        <input class="form-control" id="ClientAddress" required v-model="client.ClientAddress" name="ClientAddress" />
      </div>
            <div class="form-group">
        <label for="ClientZip"><b>Client ZIP Code</b></label>
        <input class="form-control" id="ClientZip" required v-model="client.ClientZip" name="ClientZip" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactFirstName"><b>Emergency Contact First Name</b></label>
        <input class="form-control" id="EmergencyContactFirstName" required v-model="client.EmergencyContactFirstName"
          name="EmergencyContactFirstName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactLastName"><b>Emergency Contact Last Name</b></label>
        <input class="form-control" id="EmergencyContactLastName" required v-model="client.EmergencyContactLastName"
          name="EmergencyContactLastName" />
      </div>
      <div class="form-group">
        <label for="EmergencyContactPhone"><b>Emergency Contact Phone</b></label>
        <input class="form-control" id="EmergencyContactPhone" required v-model="client.EmergencyContactPhone"
          name="EmergencyContactPhone" />
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
          ClientID: null,
          id: "",
          ClientFirstName: "",
          ClientLastName: "",
          ClientPhone: "",
          ClientEmail: "",
          ClientAddress: "",
          ClientZip:"",
          EmergencyContactFirstName: "",
          EmergencyContactLastName: "",
          EmergencyContactPhone: "",
          active: false
        },
        submitted: false
      };
    },
    methods: {
      saveClient() {
        var data = {
          id: this.client.id,
          ClientFirstName: this.client.ClientFirstName,
          ClientLastName: this.client.ClientLastName,
          ClientPhone: this.client.ClientPhone,
          ClientEmail: this.client.ClientEmail,
          ClientAddress: this.client.ClientAddress,
          ClientZip: this.client.ClientZip,
          EmergencyContactFirstName: this.client.EmergencyContactFirstName,
          EmergencyContactLastName: this.client.EmergencyContactLastName,
          EmergencyContactPhone: this.client.EmergencyContactPhone
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