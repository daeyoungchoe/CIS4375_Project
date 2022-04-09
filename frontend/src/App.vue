<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        <font-awesome-icon icon="home" /> Home</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/service" class="nav-link">Services</router-link>
        </li>

        <!--Trainer Nav-->
        <li class="nav-item">
          <router-link v-if="showAdminBoard" to="/trainers" class="nav-link">List Trainers</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="showAdminBoard" to="/addTrainer" class="nav-link">Add Trainer</router-link>
        </li>
        <!--Client Nav-->
        <li class="nav-item">
          <router-link v-if="showAdminBoard" to="/clients" class="nav-link">Client Reports</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/addClient" class="nav-link">Add Client</router-link>
        </li>
        <!--Appt Nav-->
        <li class="nav-item">
          <router-link v-if="showAdminBoard" to="/appointments" class="nav-link">View Appointments</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/addAppointment" class="nav-link">Book Appointment</router-link>
        </li>
        <!--Feedback Form-->
        <li class="nav-item">
          <router-link v-if="currentUser" to="/addFeedback" class="nav-link">Feedback</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="showAdminBoard + showModeratorBoard" to="/feedbacks" class="nav-link">Client Satisfaction Report</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/appointments" class="nav-link">Trainer Performance</router-link>
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

    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
  import EventBus from "./common/EventBus";

  export default {
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_ADMIN');
        }
        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_MODERATOR');
        }
        return false;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    },
    mounted() {
      EventBus.on("logout", () => {
        this.logOut();
      });
    },
    beforeUnmount() {
      EventBus.remove("logout");
    }
  };
</script>