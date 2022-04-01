<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Phyzeke</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/trainers" class="nav-link">Trainers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addTrainer" class="nav-link">Add Trainer</router-link>
        </li>
          <li class="nav-item">
          <router-link to="/addClient" class="nav-link">Add Client</router-link>
        </li>
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
