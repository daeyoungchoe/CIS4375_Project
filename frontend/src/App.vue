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
      <li class="nav-item dropdown">
        <a v-if="showAdminBoard" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        
          <font-awesome-icon icon="clipboard-user" />
        Trainer </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a v-if="showAdminBoard" class="dropdown-item" href="/trainers">Trainer Information</a>
          <a v-if="showAdminBoard" class="dropdown-item" href="/addTrainer">Add Trainer</a>
        </div>
      </li>
        <!--Client Nav-->
      <li class="nav-item dropdown">
        <a v-if="showAdminBoard" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        
          <font-awesome-icon icon="user" />
          Client </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a v-if="showAdminBoard+ showModeratorBoard" class="dropdown-item" href="/clients">Client Reports</a>
          <a v-if="showAdminBoard" class="dropdown-item" href="/addClient">Add Client</a>

        </div>
      </li>
        <!--Appt Nav-->
        <li class="nav-item dropdown">
        <a v-if="currentUser" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        
          <font-awesome-icon icon="calendar" />
        Appointment </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a v-if="showAdminBoard + showModeratorBoard" class="dropdown-item" href="/appointments">Training Schedule</a>
          <a v-if="currentUser + showModeratorBoard" class="dropdown-item" href="/addAppointment">Book Appointment</a>
        </div>
      </li>
        <!--Feedback Form-->
        <li class="nav-item dropdown">
        <a v-if="currentUser" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        
          <font-awesome-icon icon="comment-dots" />
        Feedback </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a v-if="showAdminBoard+ showModeratorBoard" class="dropdown-item" href="/feedbacks">Client Feedback Reports</a>
          <a v-if="currentUser" class="dropdown-item" href="/addFeedback">Create Feedback</a>
        </div>
      </li>
        <!--User authentication -->

        
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
            <font-awesome-icon icon="circle-user" />
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