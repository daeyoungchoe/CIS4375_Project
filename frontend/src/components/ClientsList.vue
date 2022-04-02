<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Client First Name"
          v-model="ClientFirstName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchClientFirstName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Clients List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(client, index) in clients"
          :key="index"
          @click="setActiveClient(client, index)"
        >
          {{ Client.ClientFirstName }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllClients">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentClient">
        <h4>Client</h4>
        <div>
          <label><strong>Client First Name:</strong></label> {{ currentClient.ClientFirstName }}
        </div>
        <div>
          <label><strong>Client Last Name:</strong></label> {{ currentClient.ClientLastName }}
        </div>
        <div>
          <label><strong>CLient Phone:</strong></label> {{ currentClient.ClientPhone }}
        </div>
                <div>
          <label><strong>Client Email:</strong></label> {{ currentClient.ClientEmail }}
        </div>
                <div>
          <label><strong>Client Address:</strong></label> {{ currentClient.ClientAddress }}
        </div>
        <div>
          <label><strong>Emergency Contact First Name:</strong></label> {{ currentClient.EmergencyContactFirstName }}
        </div>
        <div>
          <label><strong>Emergency Contact Last Name:</strong></label> {{ currentClient.EmergencyContactLastName }}
        </div>
        <div>
          <label><strong>Emergenc Contact Phone:</strong></label> {{ currentClient.EmergencyContactPhone }}
        </div>
   
        <router-link :to="'/clients/' + currentClient.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Client...</p>
      </div>
    </div>
  </div>
</template>
<script>
import ClientDataService from "../services/ClientDataService";
export default {
  name: "clients-list",
  data() {
    return {
      clients: [],
      currentClient: null,
      currentIndex: -1,
      ClientFIrstName: ""
    };
  },
  methods: {
    retrieveClients() {
      ClientDataService.getAll()
        .then(response => {
          this.clients = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveClients();
      this.currentClient = null;
      this.currentIndex = -1;
    },
    setActiveClient(client, index) {
      this.currentClient = client;
      this.currentIndex = client ? index : -1;
    },
    removeAllClients() {
      ClientDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchClientFIrstName() {
      ClientDataService.findByClientFirstName(this.ClientFirstName)
        .then(response => {
          this.clients = response.data;
          this.setActiveClient(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveClients();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>