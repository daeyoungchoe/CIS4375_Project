<template>
  <div v-if="currentClient" class="edit-form">
    <h4>Client List</h4>
    <form>
      <div class="form-group">
        <label for="ClientFirstName">Client First Name</label>
        <input type="text" class="form-control" id="ClientFirstName"
          v-model="currentClient.ClientFirstName"
        />
      </div>
      <div class="form-group">
        <label for="ClientLastName">Client Last Name</label>
        <input type="text" class="form-control" id="ClientLastName"
          v-model="currentClient.ClientLastName"
        />
      </div>
      <div class="form-group">
        <label for="ClientEmail">Client Email</label>
        <input type="text" class="form-control" id="ClientEmail"
          v-model="currentClient.ClientEmail"
        />
        </div>
              <div class="form-group">
        <label for="ClientPhone">Client Phone</label>
        <input type="text" class="form-control" id="ClientPhone"
          v-model="currentClient.ClientPhone"
        />
        </div>
              <div class="form-group">
        <label for="ClientAddress">Client Address</label>
        <input type="text" class="form-control" id="ClientAddress"
          v-model="currentClient.ClientAddress"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
        <input type="text" class="form-control" id="EmergencyContactFirstName"
          v-model="currentClient.EmergencyContactFirstName"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
        <input type="text" class="form-control" id="EmergencyContactLastName"
          v-model="currentClient.EmergencyContactLastName"
        />
        </div>
        <div class="form-group">
        <label for="EmergencyContactPhone">Emergency Contact Phone</label>
        <input type="text" class="form-control" id="EmergencyContactPhone"
          v-model="currentClient.EmergencyContactPhone"
        />
        </div>
    </form>
    <button class="badge badge-danger mr-2"
      @click="deleteClient"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateClient"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Client...</p>
  </div>
</template>
<script>
import ClientDataService from "../services/ClientDataService";
export default {
  name: "editClient",
  data() {
    return {
      currentClient: null,
      message: ''
    };
  },
  methods: {
    getClient(ClientID) {
      ClientDataService.get(ClientID)
        .then(response => {
          this.currentClient = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateClient() {
      ClientDataService.update(this.currentClient.ClientID, this.currentClient)
        .then(response => {
          console.log(response.data);
          this.message = 'The Client was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteClient() {
      ClientDataService.delete(this.currentClient.ClientID)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "clients" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getClient(this.$route.params.ClientID);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>