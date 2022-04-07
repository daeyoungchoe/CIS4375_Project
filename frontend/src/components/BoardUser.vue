<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>

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
                <!--Close/Cross Button--> <button type="button" class="close" data-dismiss="modal" style="color: white;">&times;</button>
            </div> <!-- Modal Body-->
            <div class="modal-body text-center"> <i class="font-awesome-icon fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
                <h3>Your opinion matters</h3>
            <div class="mb-3">
              <h6 for="exampleFormControlInput1" class="form-label">Your Name</h6>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Type your name ">
            </div>
            <div class="mb-3">
              <h6 for="exampleFormControlInput1" class="form-label">Trainer name</h6>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Type your trainer name">
            </div>
            <div class="mb-3">
              <h6 for="exampleFormControlInput1" class="form-label">Date</h6>
              <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="rate  ">
              <h6 class="mb-0">Rank your levels of satisfaction </h6>
              <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input
                  type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating"
                  value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label
                  for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label> </div>

              <h6 class="mb-0">How would you rate your trainer</h6>
              <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input
                  type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating"
                  value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label
                  for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label> </div>
              <div class="mb-3">
                <h6 for="exampleFormControlInput1" class="form-label">Comment</h6>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="buttons"> <button class="btn btn-success rating-submit">Submit</button> </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import UserService from "../services/user.service";
  import EventBus from "../common/EventBus";

  export default {
    name: "User",
    data() {
      return {
        content: "",
      };
    },
    mounted() {
      UserService.getUserBoard().then(
        (response) => {
          this.content = response.data;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          if (error.response && error.response.status === 403) {
            EventBus.dispatch("logout");
          }
        }
      );
    },
  };
</script>