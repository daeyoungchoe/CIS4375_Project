<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Phyzeke</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/service" class="nav-link">Service</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/trainers" class="nav-link">Trainers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addTrainer" class="nav-link">Add Trainer</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Clients" class="nav-link">Clients</router-link>
        </li>
          <li class="nav-item">
          <router-link to="/addClient" class="nav-link">Add Client</router-link>
        </li>
                    <li class="nav-item">
          <router-link to="/addAppointment" class="nav-link">Appointment</router-link>
      </li>

      <!--User authentication -->
      <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>
       <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
      <div class="navbar-nav mr-right">


      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
