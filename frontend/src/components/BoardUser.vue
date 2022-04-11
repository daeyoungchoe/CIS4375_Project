<template>
  <div class="container">
    <header class="jumbotron">
      <h3> Welcome to PhyZeke Fitness!</h3>
    </header>

    <body>
      <div class="content">
        <br>

        <p>To book an appointment, click on the button below</p>
        <a class="btn btn-light btn-xl" href="/AddAppointment">Booking Appointment</a>
        <br><br><br>

        <p>To view/change an appointment, click on the button below</p>
        <a class="btn btn-light btn-xl" href="/AppointmentList">View Appointment</a>
        <br><br><br>

        <p>Please give us a feedback about the session provided, click on the button below</p>
        <a class="btn btn-light btn-xl" href="/AddFeedback">Add Feedback</a>
      </div>
    </body>
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