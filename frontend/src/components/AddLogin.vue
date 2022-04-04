<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="Username">User Name</label>
        <input type="text" class="form-control" id="Username" required v-model="login.Username" name="Username" />
      </div>
      <div class="form-group">
        <label for="Password">Password</label>
        <input type="text" class="form-control" id="Password" required v-model="login.Password" name="Password" />
      </div>

      <button @click="saveLogin" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newLogin">Add</button>
    </div>
  </div>
</template>
<script>
  import LoginDataService from "../services/LoginDataService";
  export default {
    name: "add-login",
    data() {
      return {
        login: {
          LoginID: null,
          Username: "",
          Password: ""


        },
        submitted: false
      };
    },
    methods: {
      saveLogin() {
        var data = {
          Username: this.login.Username,
          Password: this.login.Password
        };
        LoginDataService.create(data)
          .then(response => {
            this.login.LoginID = response.data.LoginID;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      newLogin() {
        this.submitted = false;
        this.Login = {};
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