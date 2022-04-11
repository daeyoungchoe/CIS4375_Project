<template>
    <div v-if="currentClient" class="edit-form">
        <h4>Edit Client</h4>
        <form>
            <div class="form-group">
                <label for="ClientFirstName">Client First Name</label>
                <input type="text" class="form-control" id="ClientFirstName" required
                    v-model="currentClient.ClientFirstName" name="ClientFirstName" />
            </div>
            <div class="form-group">
                <label for="ClientLastName">Client Last Name</label>
                <input class="form-control" id="ClientLastName" required v-model="currentClient.ClientLastName"
                    name="ClientLastName" />
            </div>
            <div class="form-group">
                <label for="ClientrPhone">Client Phone</label>
                <input class="form-control" id="ClientPhone" required v-model="currentClient.ClientPhone"
                    name="ClientPhone" />
            </div>
            <div class="form-group">
                <label for="ClientEmail">Client Email</label>
                <input class="form-control" id="ClientEmail" required v-model="currentClient.ClientEmail"
                    name="ClientEmail" />
            </div>
            <div class="form-group">
                <label for="ClientAddress">Client Address</label>
                <input class="form-control" id="ClientAddress" required v-model="currentClient.ClientAddress"
                    name="ClientAddress" />
            </div>
            <div class="form-group">
                <label for="ClientZip">Zip Code</label>
                <input class="form-control" id="ClientZip" required v-model="currentClient.ClientZip" name="Height" />
            </div>
            <div class="form-group">
                <label for="EmergencyContactFirstName">Emergency Contact First Name</label>
                <input class="form-control" id="EmergencyContactFirstName" required
                    v-model="currentClient.EmergencyContactFirstName" name="EmergencyContactFirstName" />
            </div>
            <div class="form-group">
                <label for="EmergencyContactLastName">Emergency Contact Last Name</label>
                <input class="form-control" id="EmergencyContactLastName" required
                    v-model="currentClient.EmergencyContactLastName" name="EmergencyContactLastName" />
            </div>
            <div class="form-group">
                <label for="EmergencyContactPhone">Emergency Contact Phone</label>
                <input class="form-control" id="EmergencyContactPhone" required
                    v-model="currentClient.EmergencyContactPhone" name="EmergencyContactPhone" />
            </div>
            <div class="form-group">
                <label for="Weight">Weight</label>
                <input class="form-control" id="Weight" required v-model="currentClient.Weight" name="Weight" />
            </div>
            <div class="form-group">
                <label for="Height">Height</label>
                <input class="form-control" id="Height" required v-model="currentClient.Height" name="Height" />
            </div>

            <div class="form-group">
                <label><strong>Status:</strong></label>
                {{ currentClient.active ? "Active" : "Inactive" }}
            </div>
        </form>

        <button class="badge badge-primary mr-2" v-if="currentClient.active" @click="updateActive(false)">
            Inactive
        </button>
        <button v-else class="badge badge-primary mr-2" @click="updateActive(true)">
            Active
        </button>
        <button class="badge badge-danger mr-2" @click="deleteClient">
            Delete
        </button>
        <button type="submit" class="badge badge-success" @click="updateClient">
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
            getClient(id) {
                ClientDataService.get(id)
                    .then(response => {
                        this.currentClient = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            updateClient() {
                ClientDataService.update(this.currentClient.id, this.currentClient)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'The Client was updated successfully!';
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            //Update Client status
            updateActive(status) {
                var data = {
                    id: this.currentClient.id,
                    ClientFirstName: this.currentClient.ClientFirstName,
                    ClientLastName: this.currentClient.ClientLastName,
                    ClientPhone: this.currentClient.ClientPhone,
                    ClientEmail: this.currentClient.ClientEmail,
                    ClientAddress: this.currentClient.ClientAddress,
                    ClientZip: this.currentClient.ClientZip,
                    EmergencyContactFirstName: this.currentClient.EmergencyContactFirstName,
                    EmergencyContactLastName: this.currentClient.EmergencyContactLastName,
                    EmergencyContactPhone: this.currentClient.EmergencyContactPhone,
                    Weight: this.currentClient.Weight,
                    Height: this.currentClient.Height,
                    active: status
                };
                ClientDataService.update(this.currentClient.id, data)
                    .then(response => {
                        console.log(response.data);
                        this.currentClient.active = status;
                        this.message = 'The status was updated successfully!';
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteClient() {
                ClientDataService.delete(this.currentClient.id)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push({
                            name: "clients"
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        mounted() {
            this.message = '';
            this.getClient(this.$route.params.id);
        }
    };
</script>
<style>
    .edit-form {
        max-width: 300px;
        margin: auto;
    }
</style>