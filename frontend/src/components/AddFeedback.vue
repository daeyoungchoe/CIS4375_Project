<template>
<!--Modal Launch Button-->
<button type="button" class="btn btn-info btn-lg openmodal" data-toggle="modal" data-target="#myModal">Open Modal</button>
<!--Division for Modal-->
<div id="myModal" class="modal fade" role="dialog">
    <!--Modal-->
    <div class="modal-dialog">
        <!--Modal Content-->
        <div class="modal-content">
            <!-- Modal Header-->
            <div class="modal-header">

      <h2> Feedback Form </h2>
      <div class="mb-3">
        <h6 for="exampleFormControlInput1" class="form-label">Your Name</h6>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <h6 for="exampleFormControlInput1" class="form-label">Trainer name</h6>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <h6 for="exampleFormControlInput1" class="form-label">Date</h6>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="rate  ">
        <h6 class="mb-0">Rank your levels of satisfaction related our session</h6>
        <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input
            type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating"
            value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label
            for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label> </div>

        <h6 class="mb-0">How would you rate your overall experience so far with the trainer</h6>
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
</template>