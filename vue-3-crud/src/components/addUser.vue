<template>
    <!-- Form --> 
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Register new client</h3>
            <form @submit.prevent="handleSubmitForm">>
              
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Username</label>
                    <input type="username" class="form-control" id="c_username" name="c_username" placeholder="">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_pass" class="text-black">Password <span class="text-danger">*</span></label>
                    <input type="password" class="form-control" id="c_pass" name="c_pass">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_repass" class="text-black">Re-type Password <span class="text-danger">*</span></label>
                    <input type="password" class="form-control" id="c_repass" name="c_repass">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                    <input type="fname" class="form-control" id="c_fname" name="c_fname">
                  </div>
                </div>                
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                    <input type="lname" class="form-control" id="c_lname" name="c_lname">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_phone" class="text-black">Phone Number <span class="text-danger">*</span></label>
                    <input type="" class="form-control" id="c_phone" name="c_phone">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="c_email" name="c_email">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_zip" class="text-black">Zipcode <span class="text-danger">*</span></label>
                    <input type="zipcode" class="form-control" id="c_zip" name="c_zip">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_regisdate" class="text-black">Registration Date <span class="text-danger">*</span></label>
                    <input type="registrationdate" class="form-control" id="c_regisdate" name="c_regisdate">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_emerfname" class="text-black">Emergency Contact First Name <span class="text-danger">*</span></label>
                    <input type="emergencyfname" class="form-control" id="c_emerfname" name="c_emerfname">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_emerlname" class="text-black">Emergency Contact Last Name <span class="text-danger">*</span></label>
                    <input type="emergencylname" class="form-control" id="c_emerlname" name="c_emerlname">
                  </div>
                </div>  
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_weight" class="text-black">Weight <span class="text-danger">*</span></label>
                    <input type="weight" class="form-control" id="c_weight" name="c_weight">
                  </div>
                </div>   
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_height" class="text-black">Height <span class="text-danger">*</span></label>
                    <input type="height" class="form-control" id="c_height" name="c_height">
                  </div>
                </div>                   
                
                <div class="form-group row">
                  <div class="col-lg-12">
                    <input type="submit" class="btn btn-primary btn-lg" value="Register">
                  </div>
                </div>

                <!--Link to Login-->
                <div class="form-group row">
                  <div class="signup-image">
                      <a href="/login" class="member-link">I am already member</a>
                </div>
              </div>

            </form>
          </div>
        </div>
</template>