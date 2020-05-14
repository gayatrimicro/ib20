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
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="assets/styles/steps.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="assets/styles/main3e3a.css">
      <link rel="stylesheet" href="assets/styles/newstyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    </head>

   <body class="custom-landing-page patient-visitor-guide browser-large" data-gr-c-s-loaded="true" style="background-color: #1c1c20;padding-top: 0rem;">
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
        .form-box{
          padding: 0px 50px;
        }
        .heading-title{
          font-size: 28px;
          line-height: 1.5;
          letter-spacing: 1.5px;
        }
        .margin-top{
          margin: 45px 0px;
        }

        @media (max-width: 600px){
          .form-box{
            padding: 0px 30px;
          }
          .heading-title{
            padding: 0px 20px;
          }
          .comp-details{
            padding: 0px 20px;
          }
        }

       
    </style>


    <!-- <h2 style="text-align: center;font-size: 32px;">Find your practice</h2> -->
      <div class="">
        <img src="assets/images/lod.gif" class="img_lod">
          <!-- <img src="assets/images/lod.gif" class="img_lod"> -->
          <!-- <h6>Start a project</h6>
          <h3>Sweet, now give us more details about your project?</h3> -->
          <div class="modal-wrap">
  <!-- <div class="modal-header"><span class="is-active"></span><span></span><span></span><span></span></div> -->
  <div class="modal-bodies">
  <div class="modal-body modal-body-step-1 is-showing">
    <!-- <h3>Step 1</h3> -->
    <h4 class="heading-title">Compare your business with your competitors in your local area</h4>
    <form class="form-box">
    <label style="display: flex;">Type your company name OR website url &nbsp;:&nbsp;</label>
    <input id="autocomplete" placeholder="" onFocus="geolocate()" type="text" />
    <p class="err_msg">Please enter location</p>
    <div class="text-center margin-top">
      <div class="button chksts">Start</div>
    </div>
    </form>
  </div>
  
  <div class="modal-body modal-body-step-2 comp-details">
    <!-- <h3>Step 2</h3> -->
    <h4 style="text-align: center;letter-spacing: 1.5px;">Check your company details.</h4>

    <!-- <h4>Would you rather</h4> -->
    <div id="address" hidden="" style="color: #fff;">
      <label style="display: flex;"><strong>Street address&nbsp;:&nbsp;</strong><p id="street_number"></p>&nbsp;<p id="route"></p></label><br>

      <label style="display: flex;"><strong>City&nbsp;:&nbsp;</strong><p id="locality"></p></label><br>

      <label style="display: flex;"><strong>State&nbsp;:&nbsp;</strong><p id="administrative_area_level_1"></p></label><br>

      <label style="display: flex;"><strong>Zip code&nbsp;:&nbsp;</strong><p id="postal_code"></p></label><br>

      <label style="display: flex;"><strong>Country&nbsp;:&nbsp;</strong><p id="country"></p></label><br>

      <label style="display: flex;"><strong>Website&nbsp;:&nbsp;</strong><p id="website" style="overflow-wrap: anywhere;"></p></label><br>

      <label style="display: flex;"><strong>Organization&nbsp;:&nbsp;</strong><p id="name"></p></label>
      <br><br>
    </div>
    <div class="text-center fade-in">
      <div class="button">Next</div>
    </div>
    
  </div>

  <div class="modal-body modal-body-step-3 cat_js_basic form-box">
    <!-- <h3>Step 3</h3> -->
    <h4 style="text-align: center;letter-spacing: 1.5px;">Select your company category.</h4>

    <!-- <h4>Would you rather</h4> -->
    <label >
      Select Category to know your competitors
    </label>
      <select name="category" required onchange="get_category(this.value)" id="e1" style="color: #fff;">
        <option value="">Select Category</option>
        <?php while($row = $result->fetch_assoc()) { ?>
          <option value="<?php echo $row['id'] ?>"><?php echo $row['category'] ?></option>
        <?php } ?>
      </select>
      
    <p class="err_msg">Please select category</p>
    <div class="text-center fade-in margin-top">
      <div class="button_sel">Next</div>
    </div>
  </div>
  <div class="modal-body modal-body-step-4">
    <!-- <h3>Step 4</h3> -->
    <h4 style="text-align: center;letter-spacing: 1.5px;">Check your results.</h4>
    <form method="post" action="competitors.php" class="form-box">
      <input type="hidden" id="frm_street_number" value="" />
      <input type="hidden" name="street_address" id="frm_route" value="" />
      <input type="hidden" id="frm_locality" name="city" value="" />
      <input type="hidden" id="frm_administrative_area_level_1" name="state" value="" />
      <input type="hidden" id="frm_postal_code" name="zip_code" value="" />
      <input type="hidden" id="frm_country" name="country" value="" />
      <input type="hidden" id="frm_website" name="website" value="" />
      <input type="hidden" id="frm_name" name="name" value="" />
      <input type="hidden" id="frm_category" name="category" value="" />
      
      <label style="display: flex;">Name&nbsp;:&nbsp;</label>
      <input type="text" name="user_name" id="snme" maxlength="40">
      

      <label style="display: flex;">Email&nbsp;:&nbsp;</label>
      <input type="email" name="user_email" id="seml" maxlength="30">
      

      <label style="display: flex;">Contact Number&nbsp;:&nbsp;</label>
      <input type="text" name="user_contact" id="sno" maxlength="12">
      
      <p class="err_msg">Please fill all fields</p>
      
      <div class="text-center margin-top">
        <button type="submit" class="btn_fin">Done!</button>
      </div>
    </form>   
  </div>
  </div>
</div>
<div class="text-center">
  <!--<div class="button">Loading...</div>-->
  
</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.full.min.js"></script>



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

$(".btn_fin").click(function(){
        
        var nme = $("#snme").val();
        var eml = $("#seml").val();
        var no = $("#sno").val();

        if(nme=="" && eml=="" && no=="")
        {
          $(".err_msg").show();
          return false;
        }
        else
        {
          $(".modal-wrap").fadeOut("slow");
          $(".err_msg").hide();
          $(".img_lod").fadeIn("slow");
        }
        
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
<script>
  // This sample uses the Autocomplete widget to help the user select a
  // place, then it retrieves the address components associated with that
  // place, and then it populates the form fields with those details.
  // This sample requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script
  // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  var placeSearch, autocomplete;

  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'long_name',
    country: 'short_name',
    postal_code: 'short_name',
    website: 'website',
    name: 'name',   
  };

  function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['establishment']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    // autocomplete.setFields(['address_component', 'website']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    document.getElementById('address').removeAttribute("hidden");
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
    document.getElementById(component).innerHTML = '';
    // document.getElementById(component).disabled = false;
    }
    
    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).innerHTML = val;   
    }
    }

    document.getElementById('website').innerHTML = place['website'];
    document.getElementById('name').innerHTML = place['name'];
    document.getElementById('frm_website').value = place['website'];
    document.getElementById('frm_name').value = place['name'];
  }

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
      };
      var circle = new google.maps.Circle(
        {center: geolocation, radius: position.coords.accuracy});
      autocomplete.setBounds(circle.getBounds());
    });
    }
    $(document).keypress(
      function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
    });
  }
  

  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4&libraries=places&callback=initAutocomplete"
    async defer></script>
  <script>
    $(document).ready(function() { $("#e1").select2(); });
  </script>
            </div>
   </body>
</html>