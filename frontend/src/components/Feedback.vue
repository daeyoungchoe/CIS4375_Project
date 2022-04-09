<template>
    <div v-if="currentFeedback" class="edit-form">
        <h4>Edit Feedback</h4>
        <form>
            <div class="form-group">
                <label for="ClientName">Client First Name</label>
                <input type="text" class="form-control" id="ClientFirstName" required v-model="currentFeedback.ClientFirstName"
                    name="ClientFirstName" />
            </div>
            <div class="form-group">
                <label for="ClientLastName">Client Last Name</label>
                <input type="text" class="form-control" id="ClientLastName" required v-model="currentFeedback.ClientLastName"
                    name="ClientLastName" />
            </div>            
            <div class="form-group">
                <label for="TrainerFirstName">Trainer First Name</label>
                <input class="form-control" id="TrainerFirstName" required v-model="currentFeedback.TrainerFirstName"
                    name="TrainerFirstName" />
            </div>
            <div class="form-group">
                <label for="TrainerLastName">Trainer Last Name</label>
                <input class="form-control" id="TrainerLastName" required v-model="currentFeedback.TrainerLastName"
                    name="TrainerLastName" />
            </div>            
            <div class="form-group">
                <label for="Date"> Date</label>
                <input class="form-control" id="Date" required v-model="currentFeedback.Date" name="Date" />
            </div>
            <div class="form-group">
                <label for="RateSession">Rate Session</label>
                <input class="form-control" id="RateSession" required v-model="currentFeedback.RateSession"
                    name="RateSession" />
            </div>
            <div class="form-group">
                <label for="RateTrainer">Rate Trainer</label>
                <input class="form-control" id="RateTrainer" required v-model="currentFeedback.RateTrainer"
                    name="RateTrainer" />
            </div>
            <div class="form-group">
                <label for="Comment">Comment</label>
                <input class="form-control" id="Comment" required v-model="currentFeedback.Comment" name="Comment" />
            </div>
        </form>

        <button class="badge badge-danger mr-2" @click="deleteFeedback">
            Delete
        </button>
        <button type="submit" class="badge badge-success" @click="updateFeedback">
            Update
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p>Please click on a Feedback...</p>
    </div>
</template>
<script>
    import FeedbackDataService from "../services/FeedbackDataService";
    export default {
        name: "editFeedback",
        data() {
            return {
                currentFeedback: null,
                message: ''
            };
        },
        methods: {
            getFeedback(id) {
                FeedbackDataService.get(id)
                    .then(response => {
                        this.currentFeedback = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            updateFeedback() {
                FeedbackDataService.update(this.currentFeedback.id, this.currentFeedback)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'The Feedback was updated successfully!';
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            //Update Feedback status
            deleteFeedback() {
                FeedbackDataService.delete(this.currentFeedback.id)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push({
                            name: "feedbacks"
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        mounted() {
            this.message = '';
            this.getFeedback(this.$route.params.id);
        }
    };
</script>
<style>
    .edit-form {
        max-width: 300px;
        margin: auto;
    }
</style>