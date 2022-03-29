<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Phyzeke</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/trainers" class="nav-link">Trainer List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/trainer" class="nav-link">Add Trainer</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
