<template>
    <div class="list row">
         <!-- Search feedbacks By First Name -->
        <div class="col-md-8">
            <div class="input-group mb-3">               
                <input type="text" class="form-control" placeholder="Search by Trainer Name"
                    v-model="TrainerName" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTrainerName">
                        Search
                    </button>
                </div>
            </div>
        </div> 
        <div class="col-md-8">
            <div class="input-group mb-3">
                <!-- Search feedbacks By ZipCode  -->
                <input type="date" class="form-control" placeholder="Search by Date" v-model="Date" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchDate">
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="input-group mb-3">
                <!-- Search feedbacks By ZipCode  -->
                <input type="text" class="form-control" placeholder="Search by ClientName" v-model="ClientName" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchClientName">
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Feedbacks List</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="(feedback, index) in feedbacks" :key="index">
                    {{ feedback.ClientName }}
                </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllFeedbacks">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentFeedback">
                <h4>Feedback</h4>
                <div>
                    <label><strong>ClientName:</strong></label> {{ currentFeedback.ClientName }}
                </div>
                <div>
                    <label><strong>TrainerName:</strong></label> {{ currentFeedback.TrainerName }}
                </div>
                <div>
                    <label><strong>Date:</strong></label> {{ currentFeedback.Date }}
                </div>
                <div>
                    <label><strong>RateSession:</strong></label> {{ currentFeedback.RateSession }}
                </div>
                <div>
                    <label><strong>RateTrainer:</strong></label> {{ currentFeedback.RateTrainer }}
                </div>
                <div>
                    <label><strong>Comment:</strong></label> {{ currentFeedback.Comment }}
                </div>
                <router-link :to="'/feedbacks/' + currentFeedback.id" class="badge badge-warning">Edit</router-link>
            </div>
            <div v-else>
                <br />
                <p>Please click on a feedback...</p>
            </div>
        </div>
    </div>
</template>
<script>
    import FeedbackDataService from "../services/FeedbackDataService";
    export default {
        name: "feedbacks-list",
        data() {
            return {
                feedbacks: [],
                currentFeedback: null,
                currentIndex: -1,
                TrainerName: "",
                ClientName: "",
                Date: ""
            };
        },
        methods: {
            retrieveFeedbacks() {
                FeedbackDataService.getAll()
                    .then(response => {
                        this.feedbacks = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            refreshList() {
                this.retrieveFeedbacks();
                this.currentFeedback = null;
                this.currentIndex = -1;
            },
            removeAllFeedbacks() {
                FeedbackDataService.deleteAll()
                    .then(response => {
                        console.log(response.data);
                        this.refreshList();
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            searchTrainerName() {
                FeedbackDataService.findByTrainerName(this.TrainerName)
                    .then(response => {
                        this.feedbacks = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            searchDate() {
                FeedbackDataService.findByDate(this.Date)
                    .then(response => {
                        this.feedbacks = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            searchClientName() {
                FeedbackDataService.findByClientName(this.ClientName)
                    .then(response => {
                        this.feedbacks = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.retrieveFeedbacks();
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