<template>
  <div class="list row">

    <div class="col-md-6">
      <h4>Trainer List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(trainer, index) in trainers"
          :key="index"
          @click="setActiveTrainer(trainer, index)"
        >
          {{ trainer.trainerFirstName }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentTrainer">
        <h4>Trainer</h4>
        <div>
          <label><strong>First Name:</strong></label> {{ currentTrainer.trainerFirstName }}
        </div>
        <div>
          <label><strong>Last Name:</strong></label> {{ currentTrainer.trainerLastNAME }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentTrainer.trainerEmail }}
        </div>
        <div>
          <label><strong>Phone:</strong></label> {{ currentTrainer.trainerPhone }}
        </div>
        <div>
          <label><strong>Address:</strong></label> {{ currentTrainer.trainerAddress }}
        </div>
        <router-link :to="'/edittrainers/' + currentTrainer.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Trainer...</p>
      </div>
    </div>
  </div>
</template>
<script>
import TrainerDataService from "../services/TrainerDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      trainers: [],
      currentTrainer: null,
      currentIndex: -1,
    };
  },
  methods: {
    retrieveTrainers() {
      TrainerDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTrainers();
      this.currentTutorial = null;
      this.currentIndex = -1;
    }
  },
  mounted() {
    this.retrieveTutorials();
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