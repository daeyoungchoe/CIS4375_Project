<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand float-left " href="/">Home</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
          <router-link to="/trainerlist" class="nav-link">Trainer List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addtrainer" class="nav-link">Add Trainer</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registerUser" class="nav-link">Register</router-link>
        </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>
