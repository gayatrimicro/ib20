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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
      <!-- <link rel="stylesheet" type="text/css" href="assets/styles/steps.css"> -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
      <!-- <link rel="stylesheet" href="assets/styles/main3e3a.css"> -->
      <link rel="stylesheet" href="com-assets/css/newstyle.css">
      <link rel="stylesheet" href="com-assets/css/slick.css">
      <link rel="stylesheet" type="text/css" href="com-assets/css/slick-theme.css">
  
  

    </head>

   <body class="custom-landing-page patient-visitor-guide browser-large BacClr" data-gr-c-s-loaded="true">
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
          padding: 0px 0px;
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
    <section>
      <div class="HdrNav">
        <div class="row">
          <div class="col-sm-5">
            <div><img src="com-assets/img/logo.png"></div>
          </div>
          <div class="col-sm-7">
            <div class="disMsg op0zin">
              <div class="row">                
                <div class="col-sm-11">
                  <p>This can take about a minute. Please do not refresh<br> your screen or click your browser’s back button.</p>
                </div>
                <div class="col-sm-1 pad_0">
                  <img src="com-assets/img/clock.png" class="imgClock">
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="DeskView">
        <div class="SliSec">
          <button type="button" class="btn_Modal" data-toggle="modal" data-target="#pracFrm">Patients competitors</button>
          <div class="SlickSli op0zin">
            <div class="LodSlid">
              <div>
                <div class="row">
                  <div class="col-sm-4">
                    <div><img src="com-assets/img/com1png.png"></div>
                  </div>
                  <div class="col-sm-8">
                    <div class="txtSli">
                      <h2>Gathering your compititors</h2>
                      <h3>Patients could be choosing your competitors without you even realizing it.</h3>                      
                    </div>                    
                  </div>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-sm-4">
                    <div><img src="com-assets/img/com1png.png"></div>
                  </div>
                  <div class="col-sm-8">
                    <div class="txtSli">
                      <h2>Calculating your Google rank score</h2>
                      <h3>You should strive to rank as high as possible, as search results listed on page 1 of Google get 95% of all web traffic.</h3>                      
                    </div>                    
                  </div>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-sm-4">
                    <div><img src="com-assets/img/com1png.png"></div>
                  </div>
                  <div class="col-sm-8">
                    <div class="txtSli">
                      <h2>Calculating your website score</h2>
                      <h3>Patients could be choosing your competitors without you even realizing it.</h3>                      
                    </div>                    
                  </div>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-sm-4">
                    <div><img src="com-assets/img/com1png.png"></div>
                  </div>
                  <div class="col-sm-8">
                    <div class="txtSli">
                      <h2>Calculating your reputation score</h2>
                      <h3>When choosing between two providers, patients are likely to select the one with better reviews 91 percent of the time.</h3>                      
                    </div>                    
                  </div>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-sm-4">
                    <div><img src="com-assets/img/com1png.png"></div>
                  </div>
                  <div class="col-sm-8">
                    <div class="txtSli">
                      <h2>Scanning your practice</h2>
                      <h3>Please do not refresh your screen or click your browser's back button.</h3>                      
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <!-- <div>
          <div class="inn_progbar">
            <p class="txt_stp">Step <span class="stp_no">1</span> of 4</p>
            <div class="prog_bar">
              <div class="inn_br"></div>
            </div>
          </div>
          <div class="inn_stepslid">
            <div class="innStep1 actstp">
              <h4 class="heading-title">Compare your business with your competitors in your local area</h4>
              <form class="form-box">
              <label style="display: flex;">Type your company name OR website url &nbsp;:&nbsp;</label>
              <input id="autocomplete" placeholder="" onFocus="geolocate()" type="text" />
              <p class="err_msg">Please enter location</p>
              <div class="text-center">
                <div class="btn_frm" onclick="changeStep('step1')">Start</div>
              </div>
              </form>
            </div>
            <div class="innStep2">
              <h4 style="text-align: center;letter-spacing: 1.5px;">Check your company details.</h4>

    
    <div id="address" class="hei_over" hidden="" style="color: #fff;">
      <label style="display: flex;"><strong>Street address&nbsp;:&nbsp;</strong><p id="street_number"></p>&nbsp;<p id="route"></p></label>

      <label style="display: flex;"><strong>City&nbsp;:&nbsp;</strong><p id="locality"></p></label>

      <label style="display: flex;"><strong>State&nbsp;:&nbsp;</strong><p id="administrative_area_level_1"></p></label>

      <label style="display: flex;"><strong>Zip code&nbsp;:&nbsp;</strong><p id="postal_code"></p></label>

      <label style="display: flex;"><strong>Country&nbsp;:&nbsp;</strong><p id="country"></p></label>

      <label style="display: flex;"><strong>Website&nbsp;:&nbsp;</strong><p id="website" style="overflow-wrap: anywhere;"></p></label>

      <label style="display: flex;"><strong>Organization&nbsp;:&nbsp;</strong><p id="name"></p></label>
      
    </div>
    <div class="text-center">
          <div class="btn_frm" onclick="changeStep('step2')">Next</div>
        </div>
            </div>
            <div class="innStep3 cat_js_basic">
             <h4>Select Category to know your competitors</h4>
             
      
      
    <p class="err_msg">Please select category</p>
    <div class="text-center">
          <div class="btn_frm" onclick="changeStep('step3')">Next</div>
        </div>
            </div>
            <div class="innStep4">
              <h4 style="text-align: center;letter-spacing: 1.5px;">Check your results.</h4>
              <div class="cus_selwid">
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
      
      <input type="text" name="user_name" id="snme" maxlength="40" placeholder="Name">
      <input type="email" name="user_email" id="seml" maxlength="30" placeholder="Email">
      <input type="text" name="user_contact" id="sno" maxlength="12" placeholder="Contact Number">
      
      <p class="err_msg">Please fill all fields</p>
      
      <div class="text-center">
          <div class="btn_frm" onclick="changeStep('step4')">Done!</div>
          <button type="submit" class="btn_fin">Done!</button>
        </div>
    </form>
    </div> 
            </div>
            <img src="assets/images/lod.gif" class="img_lod">
          </div>
        </div> -->

        

        <!-- Modal -->
  <div class="modal fade" id="pracFrm" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-body modbdy">
          <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
          <div class="inFrmStrt">
            <div class="inn_progbar">
            <p class="txt_stp">Step <span class="stp_no">1</span> of 4</p>
            <div class="prog_bar">
              <div class="inn_br"></div>
            </div>
          </div>
          <div class="Step1str Stepcurr">
            <h4>Step <span class="stpNo">1</span></h4>
            <h2>Compare your business with your competitors in your local area</h2>
            <div class="LocFie PosRel">
              <label for="FirName">Practice name</label>
              <input type="text"class="form-control" id="autocomplete" onFocus="geolocate()" placeholder="" />
            </div>
            <div class="text-right"><button class="nxtPge hidstpBtn" onclick="NxtStp('step1')">Next &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button></div>

            <div class="Step2str Stepcurr">
            <hr>
            <div id="address" hidden="">
              <div class="row">
                <div class="col-sm-6 pad_l">
                  <div class="PosRel">
                    <label for="FirName">Street No</label>
                    <input type="text"class="form-control"  id="street_number" oninput="ChkInpSts(this)" />
                  </div>
                </div>
                <div class="col-sm-6 pad_r">
                  <div class="PosRel">
                    <label for="FirName">Street address</label>
                    <input type="text" class="form-control" id="route" oninput="ChkInpSts(this)">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 pad_l">
                  <div class="PosRel">
                    <label for="FirName">City</label>
                    <input type="text" class="form-control" id="locality" oninput="ChkInpSts(this)">
                  </div>
                </div>
                <div class="col-sm-6 pad_r">
                  <div class="PosRel">
                    <label for="FirName">State</label>
                    <input type="text" class="form-control" id="administrative_area_level_1" oninput="ChkInpSts(this)">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 pad_l">
                  <div class="PosRel">
                    <label for="FirName">Zip code</label>
                    <input type="text" class="form-control" id="postal_code" oninput="ChkInpSts(this)">
                  </div>
                </div>
                <div class="col-sm-6 pad_r">
                  <div class="PosRel">
                    <label for="FirName">Country</label>
                    <input type="text" class="form-control" id="country" oninput="ChkInpSts(this)">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 pad_0">
                  <div class="PosRel">
                    <label for="FirName">Website</label>
                    <input type="text" class="form-control" id="website" oninput="ChkInpSts(this)">
                  </div>
                </div>
                <div class="col-sm-12 pad_0">
                  <div class="PosRel">
                    <label for="FirName">Organization</label>
                    <input type="text" class="form-control" id="name" oninput="ChkInpSts(this)">
                  </div>
                </div>
                <div class="col-sm-12 cat_js_basic pad_0">
                  <div class="PosRel SelClik">
                    <label for="FirName">Practice Category</label>
                    <select name="category" onchange="get_category(this.value)" id="e1">
                    <option value=""></option>
                      <?php while($row = $result->fetch_assoc()) { ?>
                    <option value="<?php echo $row['id'] ?>"><?php echo $row['category'] ?></option>
                      <?php } ?>
                    </select>
                  </div>
                </div>
              </div>              
            </div>

            <div class="row">
              <div class="col-sm-6 text-left pad_l"><button class="bckPge" onclick="BckStp('step1')"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> &nbsp;Previous</button></div>
              <div class="col-sm-6 text-right pad_r"><button class="nxtPge" onclick="NxtStp('step2')">Next &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button></div>
            </div>

          </div>
          </div>
          
          <div class="Step3str Stepcurr cat_js_basic">
            <h4>Step 3</h4>
            <h2>Enter your contact information</h2>
            <p>We'll send your personalized results to your email.</p>
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

                  <div class="PosRel fidSet1">
                    <label for="FirName">Name</label>
                    <input type="text" name="user_name" class="form-control" id="snme" maxlength="40" autocomplete="off" oninput="ChkInpSts(this)">
                  </div>
                  <div class="PosRel fidSet2">
                    <label for="FirName">Phone</label>
                    <input type="text" name="user_contact" class="form-control" id="sno" maxlength="10" autocomplete="off" oninput="ChkInpSts(this)">
                  </div>
                  <div class="PosRel fidSet3">
                    <label for="FirName">Email</label>
                    <input type="email" name="user_email" class="form-control" id="seml" maxlength="30" autocomplete="off" oninput="ChkInpSts(this)">
                  </div>
                  
                  <p>By submitting my email address above, I acknowledge that ibridge Digital may use my information as described in its Privacy Policy.</p>                                    
                    
                    <div class="text-center">
                        <button type="submit" class="btn_fin">Done!</button>
                      </div>
                  </form>         
              <div class="row">
                <div class="col-sm-6 text-left"><button class="bckPge" onclick="BckStp('step2')"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> &nbsp;Previous</button></div>
                <div class="col-sm-6 text-right"><button class="nxtPge" onclick="NxtStp('step3')">Next &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button></div>
            </div>
          </div>
          <img src="assets/images/lod.gif" class="img_lod">
          </div>
        </div>
      </div>
      
    </div>
  </div>

<div id="myProgress">
  <div id="myBar"><div id="my_per">42%</div></div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="com-assets/js/slick.min.js"></script>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.full.min.js"></script>
<script type="text/javascript">
jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
  
    intShakes = intShakes || 3;
    intDistance = intDistance || 2;
    intDuration = intDuration || 300;
  
    this.each(function() { 
        for (var x=1; x<=intShakes; x++) {
        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
    .animate({left:intDistance}, ((intDuration/intShakes)/2))
    .animate({left:0}, (((intDuration/intShakes)/4)));
    }
  });
return this;
};
</script>
<script>
var set_i = 0;
function move() {
  if (set_i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 42;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        set_i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById("my_per").innerHTML = width  + "%";
      }
    }
  }
}
</script>
<script type="text/javascript">
  $('.LodSlid').slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});

  function NxtStp(step){
    if(step=="step1"){
      if($("#autocomplete").val()=="")
      {
        $(".LocFie input").css("border","2px solid red");
        $(".LocFie label").css("color","red");
        $(".LocFie label").shake();
        return false;
      }
      else
      {
      $(".hidstpBtn").css("display","none");
      $(".inn_br").css("width","50%");
      $(".stp_no").text("2");
      $(".stpNo").text("2");
      $(".Step2str").css("display","block");
      ChkInpLbl();
      }      
    }

    if(step=="step2"){
      var e = document.getElementById("e1");
      var strUser = e.options[e.selectedIndex].value;
      var cont=0;
      if($("#street_number").val==""){
        cont+=1;
      }
      if($("#route").val==""){
        cont+=1;
      }
      if($("#locality").val==""){
        cont+=1;
      }
      if($("#administrative_area_level_1").val==""){
        cont+=1;
      }
      if($("#postal_code").val==""){
        cont+=1;
      }
      if($("#country").val==""){
        cont+=1;
      }
      if($("#website").val==""){
        cont+=1;
      }
      if($("#name").val==""){
        cont+=1;
      }
      if(strUser=="")
      {
        cont+=1;
      }
      if(strUser=="")
      {
        $(".select2-selection--single").css("border","2px solid red");
        $(".SelClik label").css("color","red");
        $(".SelClik label").shake();
        return false;
      }
      else
      {
      $(".select2-selection--single").css("border","2px solid #ddd");
      $(".SelClik label").css("color","#000");
      $(".Step1str").css("display","none");
      $(".inn_br").css("width","100%");
      $(".stp_no").text("3");
      $(".Step3str").css("display","block");      
      }      
    }

    if(step=="step3"){
      var count_n=0;
          if($("#snme").val()=="")
          {
            count_n+=1;
          }
          if($("#sno").val()=="")
          {
            count_n+=1;
          }
          count_n+=phoneno($("#sno").val());
          if($("#seml").val()=="")
          {            
            count_n+=1;
          }
          count_n+=validEmail($("#seml").val());

          if(count_n>0)
          {
              if($("#snme").val()=="")
              {
                $(".fidSet1 input").css("border","2px solid red");
                $(".fidSet1 label").css("color","red");
                $(".fidSet1 label").shake();
              }
              if($("#sno").val()=="")
              {
                $(".fidSet2 input").css("border","2px solid red");
                $(".fidSet2 label").css("color","red");
                $(".fidSet2 label").shake();
              }
              if($("#sno").val().length!=10)
              {
                $(".fidSet2 label").shake();
              }
              if($("#seml").val()=="")
              {            
                $(".fidSet3 input").css("border","2px solid red");
                $(".fidSet3 label").css("color","red");
                $(".fidSet3 label").shake();
              }
              if(validEmail($("#seml").val())==1){
                $(".fidSet3 label").shake();
              }            
            return false;
          }
          else{
            $("#myProgress").show();            
            $(".Step3str").css("display","none");
            $(".Step3str input").css("border","2px solid #ddd");
            $(".Step3str label").css("color","#000");
            $('#pracFrm').modal('hide');
            $('.btn_Modal').hide();
            move();
            $(".SlickSli").removeClass("op0zin");
            $(".disMsg").removeClass("op0zin");
            $(".btn_fin").click();
          }      
    }
  }
  function BckStp(step){
    if(step=="step1"){
      $(".Step1str").css("display","block");
      $(".hidstpBtn").css("display","inline-block");
      $(".inn_br").css("width","25%");
      $(".stp_no").text("1");
      $(".Step2str").css("display","none");      
    }
    if(step=="step2"){
      $(".Step1str").css("display","block");
      $(".Step2str").css("display","block");
      $(".inn_br").css("width","50%");
      $(".stp_no").text("2");
      $(".Step3str").css("display","none");
    }
  }

  document.getElementById("autocomplete").oninput = function() {
  if($("#autocomplete").val()==""){
        $(".LocFie input").css("border","2px solid red");
        $(".LocFie label").css("color","red");
        $(".LocFie label").shake();
      }
      else
      {
        $(".LocFie input").css("border","2px solid #2c98f7");
        $(".LocFie label").css("color","#2c98f7");
        $("#autocomplete").css("color","#2c98f7");        
      }
};

  function ChkInpSts(inp){
        $(inp).css("color","#2c98f7");
        $(inp).css("border","2px solid #2c98f7");
    if($(inp).val()==""){
      $(inp).css("border","2px solid red");
      $(inp).parent().find("label").css("color","red");
      $(inp).parent().find("label").shake();
      }
      else
      {
        $(inp).parent().find("label").css("color","#2c98f7");
        $(inp).css("color","#2c98f7");        
      }
  }

function phoneno(val){         
            if(val.length==10)  {
           $(".fidSet2 input").css("border","2px solid #2c98f7");
             $(".fidSet2 label").css("color","#2c98f7");
             $(".fidSet2 input").css("color","#2c98f7");
             return 0;                
            }
            else{
              $(".fidSet2 input").css("border","2px solid red");
                $(".fidSet2 label").css("color","red");
                $(".fidSet2 input").css("color","red");                
              return 1;
            } 
     }

document.getElementById("sno").onkeyup = function() {
    document.getElementById("sno").value = document.getElementById("sno").value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    phoneno(document.getElementById("sno").value);
  };

document.getElementById("seml").onblur =function() {
  var eml=document.getElementById("seml").value;
  validEmail(eml);
}; 
  function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)==false){
      $(".fidSet3 input").css("border","2px solid red");
        $(".fidSet3 label").css("color","red");
        $(".fidSet3 input").css("color","red");
        return 1;
    }
    else
    {
      return 0;
    }
    // return re.test(email);
};
 
</script>
<script type="text/javascript">
$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('actInp');
  $(this).parent().find('input').css("border","2px solid #2c98f7");
  $(this).parent().find('label').css("color","#2c98f7");
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('actInp');
  }
});

$('label').on('click', function() {
    $(this).parent().find('label').addClass('actInp');
    $(this).parent().find('input').focus();
});


function ChkInpLbl(){

   $(":input").each(function(){
   var input = $(this);
   if($(this).val()=="")
   {      
     $(this).parent().find('label').removeClass('actInp');
   }
   else
   {      
      $(this).parent().find('label').addClass('actInp');
   }
});

}
$(".SelClik").click(function(){
  $(this).find('label').addClass('actInp');
})


</script>
<script>
    $(document).ready(function() { $("#e1").select2(); });
  </script>
              <script type="text/javascript">


function get_category(id)
{
  var city = document.getElementById('locality').value;
  var state = document.getElementById('administrative_area_level_1').value;
  var country = document.getElementById('country').value;
  var organization_name = document.getElementById('name').value;
  
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
    document.getElementById(component).value = 'unknown';
    // document.getElementById(component).disabled = false;
    }
    
    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;   
    }
    }

    document.getElementById('website').value = place['website'];
    document.getElementById('name').value = place['name'];
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


     </div>
   </body>
</html>