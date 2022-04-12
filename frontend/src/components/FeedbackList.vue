<template>
    <div class="list row">
         <!-- Search feedbacks By First Name -->
        <div class="col-md-8">
            <div class="input-group mb-3">               
                <input type="text" class="form-control" placeholder="Search by Trainer First Name"
                    v-model="TrainerFirstName" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTrainerFirstName">
                        Search
                    </button>
                </div>
            </div>
        </div> 


     <!--   <div class="col-md-8">
            <div class="input-group mb-3">
                
                <input type="text" class="form-control" placeholder="Search by Client First Name" v-model="ClientFirstName" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchClientFirstName">
                        Search
                    </button>
                </div>
            </div>
        </div> 
    -->

        <div class="col-md-6">
            <h4>Feedbacks List</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="(feedback, index) in feedbacks" :key="index" @click="setActiveFeedback(feedback, index)">
                     {{ "Trainer: "}} {{feedback.trainers.TrainerFirstName}} {{ feedback.trainers.TrainerLastName}}
                     
                     


                </li>
            </ul>
      <button class="m-3 btn btn-sm btn-info" @click="refreshList">
        Refresh List
      </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentFeedback">
                <h4>Feedback</h4>
                <div>
                    <label><strong>Client Name:</strong></label> {{ currentFeedback.clients.ClientFirstName +" "+ currentFeedback.clients.ClientLastName  }}
                </div>
                <div>
                    <label><strong>Trainer Name:</strong></label> {{ currentFeedback.trainers.TrainerFirstName +" "+ currentFeedback.trainers.TrainerLastName }}
                </div>
                <div>
                    <label><strong>Date:</strong></label> {{ currentFeedback.Date }}
                </div>
                <div>
                    <label><strong>Session Rating:</strong></label> {{ currentFeedback.RateSession+"/5" }}
                </div>
                <div>
                    <label><strong>Trainer Rating:</strong></label> {{ currentFeedback.RateTrainer+"/5" }}
                </div>
                <div>
                    <label><strong>Comment:</strong></label> {{ currentFeedback.Comment }}
                </div>
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
                TrainerFirstName: "",
                ClientFirstName: ""
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
            setActiveFeedback(feedback, index) {
                this.currentFeedback = feedback;
                this.currentIndex = feedback ? index : -1;
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
            searchTrainerFirstName() {
                FeedbackDataService.findByTrainerFirstName(this.TrainerFirstName)
                    .then(response => {
                        this.feedbacks = response.data;
                        this.setActiveFeedbacks(null);
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            searchClientFirstName() {
                FeedbackDataService.findByClientFirstName(this.ClientFirstName)
                    .then(response => {
                        this.feedbacks = response.data;
                        this.setActiveFeedbacks(null);
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