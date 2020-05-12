<?php
$servername = "64.207.177.102";
$username = "usr_google";
$password = "Kd%x761x";
// $username = "root";
// $password = "";
$databese = 'google';
// Create connection
$conn = new mysqli($servername, $username, $password, $databese);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM business_category";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      
      <title>
         Competitor Checker  | IBridge Digital
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="assets/styles/steps.css">
      <link rel="stylesheet" href="assets/styles/main3e3a.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    </head>

   <body class="custom-landing-page patient-visitor-guide browser-large" data-gr-c-s-loaded="true" style="background-color: #1c1c20;padding-top: 10rem;">
    <style type="text/css">
      h1, h2, h3, h4, h5, h6{
        color: #fff;
        text-align: center;
      }
      html{
        color: #fff !important;
      }
      select{
        padding: 10px 20px !important;
        border: 1px solid #fff !important;
        border-radius: 3px !important;
      }
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #fff;
        }
       
    </style>


    <h2 style="text-align: center;">Welcome to the Competitor finder tool</h2>
      <div class="edit_projfrm">
          <!-- <img src="assets/images/lod.gif" class="img_lod"> -->
          <!-- <h6>Start a project</h6>
          <h3>Sweet, now give us more details about your project?</h3> -->
          <div class="modal-wrap">
  <div class="modal-header"><span class="is-active"></span><span></span><span></span><span></span></div>
  <div class="modal-bodies">
  <div class="modal-body modal-body-step-1 is-showing">
    <h3>Step 1</h3>
    <h4>Find your practice</h4>
    <form>
    <input id="autocomplete" placeholder="Type your practice name" onFocus="geolocate()" type="text" />
    <p class="err_msg">Please enter location</p>
    <div class="text-center">
      <div class="button chksts">Start</div>
    </div>
    </form>
  </div>
  
  <div class="modal-body modal-body-step-2">
    <h3>Step 2</h3>
    <!-- <h4>Would you rather</h4> -->
    <div id="address" hidden="" style="color: #fff;">
      <label style="display: flex;"><strong>Street address&nbsp;:&nbsp;</strong><p id="street_number"></p>&nbsp;<p id="route"></p></label><br>

      <label style="display: flex;"><strong>City&nbsp;:&nbsp;</strong><p id="locality"></p></label><br>

      <label style="display: flex;"><strong>State&nbsp;:&nbsp;</strong><p id="administrative_area_level_1"></p></label><br>

      <label style="display: flex;"><strong>Zip code&nbsp;:&nbsp;</strong><p id="postal_code"></p></label><br>

      <label style="display: flex;"><strong>Country&nbsp;:&nbsp;</strong><p id="country"></p></label><br>

      <label style="display: flex;"><strong>Website&nbsp;:&nbsp;</strong><p id="website"></p></label><br>

      <label style="display: flex;"><strong>Organization&nbsp;:&nbsp;</strong><p id="name"></p></label>
      <br><br>
    </div>
    <div class="text-center fade-in">
      <div class="button">Next</div>
    </div>
    
  </div>

  <div class="modal-body modal-body-step-3 cat_js_basic">
    <h3>Step 3</h3>
    <!-- <h4>Would you rather</h4> -->
    <label>
      Select Category to know your competitors
    </label>
      <select name="category" required onchange="get_category(this.value)" id="e1" style="color: #fff;">
        <option value="">Select Category</option>
        <?php while($row = $result->fetch_assoc()) { ?>
          <option value="<?php echo $row['id'] ?>"><?php echo $row['category'] ?></option>
        <?php } ?>
      </select>
      <hr>
    <p class="err_msg">Please select category</p>
    <div class="text-center fade-in">
      <div class="button button_sel">Next</div>
    </div>
  </div>
  <div class="modal-body modal-body-step-4">
    <h3>Step 4</h3>
    <h4 style="text-align: center;">Check your results.</h4>
    <form method="post" action="competitors.php">
      <input type="hidden" id="frm_street_number" value="" />
      <input type="hidden" name="street_address" id="frm_route" value="" />
      <input type="hidden" id="frm_locality" name="city" value="" />
      <input type="hidden" id="frm_administrative_area_level_1" name="state" value="" />
      <input type="hidden" id="frm_postal_code" name="zip_code" value="" />
      <input type="hidden" id="frm_country" name="country" value="" />
      <input type="hidden" id="frm_website" name="website" value="" />
      <input type="hidden" id="frm_name" name="name" value="" />
      <input type="hidden" id="frm_category" name="category" value="" />
      
      <label style="display: flex;"><strong>Name&nbsp;:&nbsp;</strong></label>
      <input type="text" name="user_name" id="snme" maxlength="40">
      

      <label style="display: flex;"><strong>Email&nbsp;:&nbsp;</strong></label>
      <input type="email" name="user_email" id="seml" maxlength="30">
      

      <label style="display: flex;"><strong>Contact Number&nbsp;:&nbsp;</strong></label>
      <input type="text" name="user_contact" id="sno" maxlength="12">
      
      <p class="err_msg">Please fill all fields</p>
      
      <div class="text-center">
        <button type="submit" class="button btn_fin">Done!</button>
      </div>
    </form>   
  </div>
  </div>
</div>
<div class="text-center">
  <!--<div class="button">Loading...</div>-->
  
</div>





              <script type="text/javascript">
    $('.button_sel').click(function(){
      var e = document.getElementById("e1");
  var strUser = e.options[e.selectedIndex].text;
  if(strUser=="Select Category")
  {
    $(".err_msg").show();
    return false;
  }
  $(".err_msg").hide();
  var $btn = $(this),
  $step = $btn.parents('.modal-body'),
  stepIndex = $step.index(),
  $pag = $('.modal-header span').eq(stepIndex);
  if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2) { step1($step, $pag); }
  else { step4($step, $pag); }  
});

$('.button').click(function(){
  if($(".pac-target-input").val()=="")
  {
    $(".err_msg").show();
    return false;
  }

  $(".err_msg").hide();
  var $btn = $(this),
  $step = $btn.parents('.modal-body'),
  stepIndex = $step.index(),
  $pag = $('.modal-header span').eq(stepIndex);
  if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2) { step1($step, $pag); }
  else { step4($step, $pag); }  
});



function step1($step, $pag){
  console.log('step1');
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
  $step.removeClass('animate-out is-showing')
     .next().addClass('animate-in');
  $pag.removeClass('is-active')
      .next().addClass('is-active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
  $step.next().removeClass('animate-in')
      .addClass('is-showing');
  
  }, 1200);
}

function step4($step, $pag){
console.log('3');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
  $('.rerun-button').css('display', 'inline-block');
  }, 300);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
          .find('.modal-body')
          .first().addClass('is-showing')
          .siblings().removeClass('is-showing');

  $('.modal-header span').first().addClass('is-active')
              .siblings().removeClass('is-active');
 $(this).hide();
});

function get_category(id)
{
  var city = document.getElementById('locality').innerHTML;
  var state = document.getElementById('administrative_area_level_1').innerHTML;
  var country = document.getElementById('country').innerHTML;
  var organization_name = document.getElementById('name').innerHTML;
  
  console.log("Organization Name : "+organization_name);
  document.getElementById('frm_locality').value = city;
  document.getElementById('frm_administrative_area_level_1').value = state;
  document.getElementById('frm_country').value = country;
  document.getElementById('frm_name').value = organization_name;

  document.getElementById('frm_category').value = '';
  document.getElementById('frm_category').value = id;
}
</script>

            </div>
   </body>
</html>