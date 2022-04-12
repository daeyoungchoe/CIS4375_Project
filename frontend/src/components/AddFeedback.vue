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
                <h6 for="ClientID" class="form-label">Client ID</h6>
                <input type="text" class="form-control" id="ClientID" placeholder="Type your Client ID "
                  v-model="feedback.ClientID" required>
              </div>
              
        <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Trainer ID</th>
                      <th scope="col">Trainer First Name</th>
                      <th scope="col">Trainer Last Name</th>

                    </tr>
                  </thead>

                  <tbody>
                    <!-- Iterates through trainers table and gets respective values from these keys-->
                   <tr v-for="(trainer, index) in trainers"  :key="index">
                        <td scope="row">{{ trainer.TrainerID}}</td>
                        <td scope="row">{{ trainer.TrainerFirstName}}</td>
                        <td scope="row">{{ trainer.TrainerLastName}}</td>

                   </tr>
                  </tbody>
      </table>
              <div class="mb-3">
                <h6 for="TrainerID" class="form-label">Trainer ID</h6>
                <input type="text" class="form-control" id="TrainerName" placeholder="Type your Trainer ID"
                  v-model="feedback.TrainerID" required>
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
              <button class="btn btn-success" @click="newFeedback">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FeedbackDataService from '../services/FeedbackDataService';
  import TrainerDataService from "../services/TrainerDataService";
  export default {
    name: "add-feedback",
    data() {
      return {
        trainers: [],
        currentTrainer: null,
        active: "",
        index: -1,
        feedback: {
          id: null,
          ClientID: "",
          TrainerID: "",
          Date: "",
          RateSession: "",
          RateTrainer: "",

          Comment: "",
        },
        submitted: false
      };
    },
    methods: {
              retrieveTrainers() {
        TrainerDataService.getAll()
          .then(response => {
            this.trainers = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      saveFeedback() {
        var data = {
          ClientID: this.feedback.ClientID,
          TrainerID: this.feedback.TrainerID,
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
          mounted() {
      this.retrieveTrainers();
      }

  };
</script>