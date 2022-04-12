<template>
  <div class="submit-form">
    <h3 class="text-center">Client Sign Up</h3>
    <br>
    <form @submit.prevent="saveClient()">
      
      <div class="form-group">
        <label for="id"><b>User ID</b></label>
        <input type="number" class="form-control" id="id" required v-model="client.id"
          name="id" />
      </div>
      <div class="form-group">
        <label class="reqiured"  for="ClientFirstName"><b>Client First Name</b></label>
        <input type="text" class="form-control" id="ClientFirstName" required v-model="client.ClientFirstName"
          name="ClientFirstName" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="ClientLastName"><b>Client Last Name</b></label>
        <input class="form-control" id="ClientLastName" required v-model="client.ClientLastName"
          name="ClientLastName" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="ClientPhone"><b>Client Phone</b></label>
        <input type="tel" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" class="form-control" aria-describedby="phoneHelpBlock" id="ClientPhone" required v-model="client.ClientPhone" name="ClientPhone" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="ClientEmail"><b>Client Email</b></label>
        <input class="form-control" id="ClientEmail" required v-model="client.ClientEmail" name="ClientEmail" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="ClientAddress"><b>Client Address</b></label>
        <input class="form-control" id="ClientAddress" required v-model="client.ClientAddress" name="ClientAddress" />
      </div>
            <div class="form-group">
        <label class="reqiured" for="ClientZip"><b>Client ZIP Code</b></label>
        <input class="form-control" id="ClientZip" required v-model="client.ClientZip" name="ClientZip" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="EmergencyContactFirstName"><b>Emergency Contact First Name</b></label>
        <input class="form-control" id="EmergencyContactFirstName" required v-model="client.EmergencyContactFirstName"
          name="EmergencyContactFirstName" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="EmergencyContactLastName"><b>Emergency Contact Last Name</b></label>
        <input class="form-control" id="EmergencyContactLastName" required v-model="client.EmergencyContactLastName"
          name="EmergencyContactLastName" />
      </div>
      <div class="form-group">
        <label class="reqiured" for="EmergencyContactPhone"><b>Emergency Contact Phone</b></label>
        <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" aria-describedby="ephoneHelpBlock" id="EmergencyContactPhone" required v-model="client.EmergencyContactPhone"
          name="EmergencyContactPhone" />
      </div>

      <button class="btn btn-success">Submit</button>
      <br>
      <br>
    </form>
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
            this.$router.push('/home')
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
    .required:after {
    content:" *";
    color: red;
  }
</style>