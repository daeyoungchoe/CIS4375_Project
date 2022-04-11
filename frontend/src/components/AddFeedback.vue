<template>
  <div class="container">

    <button type="button" class="btn btn-info btn-lg openmodal" data-toggle="modal" data-target="#myModal">Click to open
      Feedback</button>
    <!--Division for Modal-->
    <div id="myModal" class="modal fade" role="dialog">
      <!--Modal-->
      <div class="modal-dialog">
        <!--Modal Content-->
        <div class="modal-content">
          <!-- Modal Header-->
          <div class="modal-header">
            <h3>Feedback Request</h3>
            <!--Close/Cross Button--> <button type="button" class="close" data-dismiss="modal"
              style="color: white;">&times;</button>
          </div> <!-- Modal Body-->
          <div class="modal-body text-center">
            <h3>Your opinion matters</h3>
            <div v-if="!submitted">
              <div class="mb-3">
                <h6 for="ClientFirstName" class="form-label">First Name</h6>
                <input type="text" class="form-control" id="ClientFirstName" placeholder="Type your first name "
                  v-model="feedback.ClientFirstName" required>
              </div>
              <div class="mb-3">
                <h6 for="ClientLastName" class="form-label">Last Name</h6>
                <input type="text" class="form-control" id="ClientLastName" placeholder="Type your last name "
                  v-model="feedback.ClientLastName" required>
              </div>
              <div class="mb-3">
                <h6 for="TrainerFirstName" class="form-label">Trainer First Name</h6>
                <input type="text" class="form-control" id="TrainerFirstName" placeholder="Type your trainer's first name"
                  v-model="feedback.TrainerFirstName" required>
              </div>
              <div class="mb-3">
                <h6 for="TrainerLastName" class="form-label">Trainer Last Name</h6>
                <input type="text" class="form-control" id="TrainerLastName" placeholder="Type your trainer's last name"
                  v-model="feedback.TrainerLastName" required>
              </div>
              <div class="mb-3">
                <h6 for="Date" class="form-label">Date</h6>
                <input type="date" class="form-control" id="Date" placeholder="" v-model="feedback.Date" required>
              </div>
              <div class="rate">
                <h6 class="mb-0">Rank your levels of satisfaction </h6>
                <div class="rating" for="RateSession">
                  <input type="radio" name="rating" value="5" id="5" v-model="feedback.RateSession">
                  <label for="5">☆</label>
                  <input type="radio" name="rating" value="4" id="4" v-model="feedback.RateSession">
                  <label for="4">☆</label>
                  <input type="radio" name="rating" value="3" id="3" v-model="feedback.RateSession"><label
                    for="3">☆</label>
                  <input type="radio" name="rating" value="2" id="2" v-model="feedback.RateSession"><label
                    for="2">☆</label>
                  <input type="radio" name="rating" value="1" id="1" v-model="feedback.RateSession"><label
                    for="1">☆</label> </div>
              </div>
              <div class="rate">
                <h6 class="mb-3">How would you rate your trainer</h6>
                <div class="rating" for="RateTrainer">
                  <input type="radio" name="RateTrainer" value="5" id="50" v-model="feedback.RateTrainer"><label
                    for="50">☆</label>
                  <input type="radio" name="RateTrainer" value="4" id="40" v-model="feedback.RateTrainer"><label
                    for="40">☆</label>
                  <input type="radio" name="RateTrainer" value="3" id="30" v-model="feedback.RateTrainer"><label
                    for="30">☆</label>
                  <input type="radio" name="RateTrainer" value="2" id="20" v-model="feedback.RateTrainer"><label
                    for="20">☆</label>
                  <input type="radio" name="RateTrainer" value="1" id="10" v-model="feedback.RateTrainer"><label
                    for="10">☆</label> </div>
              </div>
              <div class="mb-3">
                <h6 for="Comment" class="form-label">Comment</h6>
                <input type="text" class="form-control" id="Comment" placeholder="Type your comment"
                  v-model="feedback.Comment" required>
              </div>
              <button @click="saveFeedback" class="btn btn-success">Submit</button>
            </div>
            <div v-else>
              <h4>You submitted successfully!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FeedbackDataService from '../services/FeedbackDataService';
  export default {
    name: "add-feedback",
    data() {
      return {
        feedback: {
          id: null,
          ClientFirstName: "",
          ClientLastName: "",
          TrainerFirstName: "",
          TrainerLastName: "",
          Date: "",
          RateSession: "",
          RateTrainer: "",

          Comment: "",
        },
        submitted: false
      };
    },
    methods: {
      saveFeedback() {
        var data = {
          ClientFirstName: this.feedback.ClientFirstName,
          ClientLastName: this.feedback.ClientLastName,
          TrainerFirstName: this.feedback.TrainerFirstName,
          TrainerLastName: this.feedback.TrainerLastName,
          Date: this.feedback.Date,
          RateSession: this.feedback.RateSession,
          RateTrainer: this.feedback.RateTrainer,
          Comment: this.feedback.Comment,

        };
        FeedbackDataService.create(data)
          .then(response => {
            this.feedback.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      newFeedback() {
        this.submitted = false;
        this.feedback = {};
      }
    },

  };
</script>