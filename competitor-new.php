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
			<title>
				 Competitor Checker  | IBridge Digital
			</title>
			<meta charset="utf-8">
  			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
			<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
			<link rel="stylesheet" href="com-assets/css/newstyle.css">
			<link rel="stylesheet" href="com-assets/css/bar.css">
			<link rel="stylesheet" href="com-assets/css/slick.css">
			<link rel="stylesheet" type="text/css" href="com-assets/css/slick-theme.css">
			<style type="text/css">
				h2{
					color: inherit;
				}
			</style>
		</head>
	 <body class="custom-landing-page patient-visitor-guide browser-large BacClr" data-gr-c-s-loaded="true">
<div class="RsltSec_">
	<section class="HedResult">
		<div class="row">
			<div class="col-sm-6">
				<div><img src="com-assets/img/logo.png"></div>
			</div>
			<div class="col-sm-6 text-right">
				<ul>
					<li>
						<h2 id="organization_name"></h2>
						<p id="category_name"></p>
					</li>
					<li>
						<button data-toggle="modal" data-target="#ReqMod">Request Consultation &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<div class="BanRes">
			<div class="row">
				<div class="col-sm-7">
					<div class="BacTxt">
						<h1>Your personalized practice growth results</h1>
						<p>We compared you against the 3 top-ranking competitors on Google for your local market and specialty. These are the most important factors affecting your practice growth.</p>
						<ul>
							<li>
								<p>
									<img src="com-assets/img/goico.png">
									<span>
										<a href="#google_rank_section">Google Ranking</a>
									</span>
								</p>
							</li>							
							<li>
								<p>
									<img src="com-assets/img/pcico.png">
									<span>
										<a href="#website_section">Website</a>
									</span>
								</p>
							</li>
							<li>
								<p>
									<img src="com-assets/img/webPre.png">
									<span>
										<a href="#seo_score_section">SEO Score</a>
									</span>
								</p>
							</li>
							<li>
								<p>
									<img src="com-assets/img/strico.png">
									<span>
										<a href="#reputation_section">Reputation</a>
									</span>
								</p>
							</li>
							<li>
								<p>
									<img src="com-assets/img/webPre.png">
									<span>
										<a href="#mobile_friendly_section">Mobile Friendly</a>
									</span>
								</p>
							</li>
						</ul>
					</div>          
				</div>
				<div class="col-sm-5 text-right pad_0">
					<div><img src="com-assets/img/resuBac.png" class="WidXs"></div>
				</div>
			</div>      
		</div>
	</section>
	<section>
		<div class="ScoreRes">
			<div class="row">
				<div class="col-sm-7">
					<div class="row">
						<div class="col-sm-6 text-center">
							<div class="inPerBar">
								<div class="ScrRes">
									<p>Your Score :</p>
									<span id="Per"></span>
								</div>
								<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="265" height="265" xmlns="">
									<circle class="circle-chart__background" stroke="#efefef" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
									<circle class="circle-chart__circle" id="my_id" stroke="" stroke-width="1" stroke-dasharray="" stroke-linecap="" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
								</svg> 
							</div>
						</div>
						<div class="col-sm-6">
							<h3>Poor</h3>
							<p>Your practice is behind the competition in practice growth. A complete audit of your processes is strongly recommended.</p>
						</div>
					</div>
				</div>
				<div class="col-sm-5">
					<div class="pracGrow">
						<h2>Competitors</h2>
						<p>Here's how you rank against your competitors based on your overall practice growth scores:</p>
						<ul id="competitor_div">
							<!-- <li><p><span class="Rnk">1st</span><span class="RTxt"> City Acupuncture Fulton Street</span></p></li>
							<li><p><span class="Rnk">2nd</span><span class="RTxt"> Acupuncture Remedies</span></p></li>
							<li><p><span class="Rnk">3rd</span><span class="RTxt"> City Acupuncture Columbus Circle - CLOSED</span></p></li>
							<li><p><span class="Rnk">4th</span><span class="RTxt BClr"> Your Practice</span></p></li> -->
						</ul>
					</div>
				</div>
			</div>
			<div class="text-right">
				<p class="NxtRslt"><b>Next:</b> <span class="BClr"><a href="#google_rank_section">Google Rank &nbsp;<i class="fa fa-long-arrow-down" aria-hidden="true"></i></a></span></p>
			</div>
		</div>
	</section>	
	<section>
		<div class="ResMap" id="google_rank_section">
			<div class="row">
				<div class="col-sm-4">
					<div><img src="com-assets/img/bac2.png" class="WidXs"></div>
					<div class="TxtGrap">           
						<h2>Google rank</h2>
						<p>This shows where you appear in Google search results when the majority of patients search for your specialty in your city.</p>
						<ul id="google_rank_div">
							
						</ul>
						<div class="pad_grph"><b><span class="BClr GetOpn">How was this calculated?</span></b></div>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="bac_clrMap">
						<h4 class="BClr">"You need your practice to rank as high as possible. Search results listed on page 1 of Google get 95% of all web traffic."</h4>
						<section class="main_br" id="main_br1">
							<ul class="graph-container" id="google_rank_graph">
								
							</ul>
						</section>
						<div class="text-right">
							<p class="NxtRslt"><b>Next:</b> <span class="BClr"><a href="#website_section">Website &nbsp;<i class="fa fa-long-arrow-down" aria-hidden="true"></i></a></span></p>
						</div>
						<div class="text-left">
							<p class="OfRes"><b>2</b> <span>of 6</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="ResMap" id="website_section">
			<div class="row">
				<div class="col-sm-4">
					<div><img src="com-assets/img/bac2.png" class="WidXs"></div>
					<div class="TxtGrap">           
						<h2>Website</h2>
						<p>Your website score is calculated based on the following factors:</p>
						<ul id="website_div">
							
						</ul>
						<div class="pad_grph CalWEB"><b><span class="BClr">How was this calculated?</span></b></div>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="bac_clrMap">
						<h4 class="BClr">"More than half of all website visits are abandoned if it takes longer than 3 seconds to load, and it also impacts your Google rank."</h4>
						<div class="DrName"><span></span></div>
						<section class="main_br" id="main_br3">
							<ul class="graph-container" id="website_graph">
								
							</ul>
						</section>
						<div class="text-right">
							<p class="NxtRslt"><b>Next:</b> <span class="BClr"><a href="#seo_score_section">SEO Score &nbsp;<i class="fa fa-long-arrow-down" aria-hidden="true"></i></a></span></p>
						</div>
						<div class="text-left">
							<p class="OfRes"><b>3</b> <span>of 6</span></p>
						</div>
					</div>          
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="ResMap" id="seo_score_section">
			<div class="row">
				<div class="col-sm-4">
					<div><img src="com-assets/img/bac2.png" class="WidXs"></div>
					<div class="TxtGrap">
						<h2>SEO Score</h2>
						<p>Your reputation score was calculated based on the following factors across the most popular review sites.</p>
						<ul id="seo_div">
							
						</ul>
						<div class="pad_grph GetOpn2"><b><span class="BClr">How was this calculated?</span></b></div>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="bac_clrMap">
						<h4 class="BClr">"More than half of all website visits are abandoned if it takes longer than 3 seconds to load, and it also impacts your Google rank."</h4>
						<div class="DrName"><span></span></div>
						<section class="main_br" id="main_br4">
							<ul class="graph-container" id="seo_graph">
								
							</ul>
						</section>
						<div class="text-right">
							<p class="NxtRslt"><b>Next:</b> <span class="BClr"><a href="#reputation_section">Reputation &nbsp;<i class="fa fa-long-arrow-down" aria-hidden="true"></i></a></span></p>
						</div>
						<div class="text-left">
							<p class="OfRes"><b>4</b> <span>of 6</span></p>
						</div>
					</div>          
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="ResMap" id="reputation_section">
			<div class="row">
				<div class="col-sm-4">
					<div><img src="com-assets/img/bac2.png" class="WidXs"></div>
					<div class="TxtGrap">
						<h2>Reputation</h2>
						<p>Your reputation score was calculated based on the following factors across the most popular review sites.</p><br>
						<p><b>Average star rating<br>
							Total number of reviews</b></p>
						<ul id="reputation_div">
							
						</ul>
						<div class="pad_grph ReFac"><b><span class="BClr">How was this calculated?</span></b></div>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="bac_clrMap">
						<h4 class="BClr">"More than half of all website visits are abandoned if it takes longer than 3 seconds to load, and it also impacts your Google rank."</h4>
						<div class="DrName"><span></span></div>
						<section class="main_br" id="main_br4">
							<ul class="graph-container" id="reputation_graph">
								
							</ul>
						</section>
						<div class="text-right">
							<p class="NxtRslt"><b>Next:</b> <span class="BClr">Mobile Friendly &nbsp;<i class="fa fa-long-arrow-down" aria-hidden="true"></i></span></p>
						</div>
						<div class="text-left">
							<p class="OfRes"><b>5</b> <span>of 6</span></p>
						</div>
					</div>          
				</div>
			</div>
		</div>
	</section>

	<section class="ResFinBac" hidden>
		<div class="ResFin">
			<div class="row">
				<div class="col-sm-6 texCen">
					<img src="com-assets/img/hse.png" class="WMid">
					<h1>Your overall practice growth score is <span>poor</span></h1>
					<h4>Your practice is <span>behind the competition</span> in practice growth. A complete audit of your processes is strongly recommended.</h4>
					<button class="btnFinGrph">Schedule a free consultation &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
				</div>
				<div class="col-sm-6">
					<section class="main_br" id="main_br5">
						<ul class="graph-container">
							<li>
								<div class="bar-wrapper">
									<div class="bar-container">
										<div class="bar-inner"><span class="tooltiptext">96 Excellent</span></div>
									</div>
								</div>
							</li>
							<li>
								<div class="bar-wrapper">
									<div class="bar-container">
										<div class="bar-inner"><span class="tooltiptext">76 Good </span></div>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<p class="BClr NxtLin"><b>See how PatientPop can help you improve</b></p>
				</div>
			</div>
			<div class="MreRslt HidAcc">
				<div class="inMre">
					<h3>Let's grow your practice. <span class="clsSpn"><i class="fa fa-times" aria-hidden="true"></i></span></h3>
					<p class="pMarb">Contact us to see how PatientPop can help transform your practice</p>
					<div class="row fntSpn">
						<div class="col-sm-4 pad_0"><span>Practice Growth Factors</span></div>
						<div class="col-sm-2 text-center"><span>Your Scores</span></div>
						<div class="col-sm-6"><span>How PatientPop can help</span></div>
					</div>
					<hr>
					<div class="row">
						<div class="col-sm-4 pad_0">
							<h4><img src="com-assets/img/goor.png">Google Ranking</h4>
						</div>
						<div class="col-sm-2 text-center fot_pink1">
							<div class="FotScr">60</div><div class="FotWei">Poor</div>
						</div>
						<div class="col-sm-6">
							<p>We strive to help practices appear near the top of organic search results, as the first listing gets 42% of all click-through traffic. The second listing gets 12%. All others receive less than 10% of click-through traffic.</p>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-sm-4 pad_0">
							<h4><img src="com-assets/img/wpre.png">Web Presence</h4>
						</div>
						<div class="col-sm-2 text-center fot_vryPoor">
							<div class="FotScr">46</div><div class="FotWei">Very Poor</div>
						</div>
						<div class="col-sm-6">
							<p>Upon joining PatientPop, we'll create more than 70 profiles across the web for your practice, refined with photos and relevant information. Additionally, patients can book an appointment online directly from each web profile.</p>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-sm-4 pad_0">
							<h4><img src="com-assets/img/web.png">Website</h4>
						</div>
						<div class="col-sm-2 text-center fot_vryPoor">
							<div class="FotScr">50</div><div class="FotWei">Very Poor</div>
						</div>
						<div class="col-sm-6">
							<p>PatientPop practices get a fast, secure and mobile-responsive website that promotes each service line of your practice. Addionally, structured data conveys your brand, location, services and star rating to search engines.</p>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-sm-4 pad_0">
							<h4><img src="com-assets/img/rep.png">Reputation</h4>
						</div>
						<div class="col-sm-2 text-center fot_Exce">
							<div class="FotScr">92</div><div class="FotWei">Excellent</div>
						</div>
						<div class="col-sm-6">
							<p>The average PatientPop practice with an integrated EMR doubles their number of reviews and increases their star rating by .2 within the first 6 months of joining PatientPop, improving their overall online reputation.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
		<div class="lodr_sec">
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
		</div>



	<!-- Modal Request Start -->
  <div class="modal fade" id="ReqMod" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body FrmReqRes">
        	<button type="button" class="close" data-dismiss="modal">&times;</button>
	          <h3>Request a Demo</h3>
	          <p>Please complete the form below so we can contact you with more information about how PatientPop can help grow your practice.</p>
	          <form>
	          	<div class="PosRel">
					<label for="FirName">Full Name *</label>
					<input type="text" class="form-control" id="RName" oninput="ChkInpSts(this)">
				</div>
				<div class="PosRel">
					<label for="FirName">Practice Name *</label>
					<input type="text" class="form-control" id="RPname" oninput="ChkInpSts(this)">
				</div>
				<div class="PosRel">
					<label for="FirName">Email *</label>
					<input type="email" class="form-control" id="REmail" maxlength="30" autocomplete="off" oninput="ChkInpSts(this)">
				</div>
				<div class="PosRel">
					<label for="FirName">Phone *</label>
					<input type="text" class="form-control" id="RPhone" maxlength="10" autocomplete="off" oninput="ChkInpSts(this)">
				</div>
				<div class="PosRel">
					<label for="FirName">ZIP *</label>
					<input type="text" class="form-control" id="RZip" oninput="ChkInpSts(this)">
				</div>
				<div class="PosRel">
					<label for="FirName">Number of providers *</label>
					<select class="form-control" id="Nofpro">
						<option value=""></option>
						<option value="1">1</option>
						<option value="2">2</option>
					</select>
				</div>
				<div class="text-center">
					<button type="submit" class="btnFinGrph">SUBMIT</button>
				</div>
          </form>        
        </div>
      </div>      
    </div>
  </div>
  	<!-- Modal Request End -->

  	<div class="GoogRnk">
  		<div class="InGooRnk">
  			<div class="clsGRnk"><button type="button" class="ClsSL">&times;</button></div>
  			<h2>Google Rank</h2>
  			<p class="SubP">This shows where you appear in Google search results when the majority of patients search for your specialty in your city.</p>
  			<ul id="google_rank_details">
  				<!-- <li class="TimLin"></li>
  				<li class="LiGP">
  					<p class="GP1">Dr. Ellie Mizani, MD - Adult, Child and Adolescent Psychiatrist and Addiction Medicine Specialist</p>
  					<p class="GP2">http://www.emizani.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Soroya Bacchus, MD - Addiction Medicine and Psychiatry Specialist</p>
  					<p class="GP2">http://soroyabacchusmd.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Calming Goat Addiction Medicine</p>
  					<p class="GP2">https://calminggoat.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Your Practice</p>
  					<p class="GP2">http://www.hollywoodsign.org</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li> -->
  			</ul>
  		</div>
  	</div>		

<div class="WebDis">
	<div class="InGooRnk">
		<div class="clsGRnk"><button type="button" class="ClsSL">&times;</button></div>
		<h2>Website</h2>
		<p class="SubP">Your website score is calculated based on the factors below.</p>
		<!-- <h5>Your practice</h5>
		<div class="row">
			<div class="col-sm-6 pad_0">
				<div class="row">
					<div class="col-xs-2 pad_0">
						<img src="com-assets\img\scoAir.png">
					</div>
					<div class="col-xs-10">
						<div class="XSPAD">
							<h6>Desktop Speed</h6>
							<span class="ScRNo">50</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 pad_0">
				<div class="row">
					<div class="col-xs-2 pad_0">
						<img src="com-assets\img\mob.png">
					</div>
					<div class="col-xs-10">
						<div class="XSPAD">
							<h6>Mobile Speed</h6>
							<span class="ScRNo">50</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row MArT">
			<div class="col-sm-6 pad_0">
				<div class="row">
					<div class="col-xs-2 pad_0">
						<img src="com-assets\img\pro.png">
					</div>
					<div class="col-xs-10">
						<div class="XSPAD">
							<h6>Security</h6>
							<span class="ScRNo CLRG">Pass</span>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<h5 class="MArT">Your practice</h5>
		<div class="table-responsive">
		
		<table class="table">
		    <thead>
		      <tr>
		        <th width="26%">Practice</th>
		        <th width="21%">Desktop Speed</th>
		        <th width="21%">Mobile Speed</th>
		        <th width="21%">Security</th>
		      </tr>
		    </thead>
		    <tbody id="website_details">
		    </tbody>
	  </table>
	  </div>		
	</div>
</div>

<div class="GoogRnk2">
  		<div class="InGooRnk">
  			<div class="clsGRnk"><button type="button" class="ClsSL">&times;</button></div>
  			<h2>SEO Score</h2>
  			<p class="SubP">This shows where you appear in Google search results when the majority of patients search for your specialty in your city.</p>
  			<ul id="seo_score_details">
  				<!-- <li class="TimLin"></li>
  				<li class="LiGP">
  					<p class="GP1">Dr. Ellie Mizani, MD - Adult, Child and Adolescent Psychiatrist and Addiction Medicine Specialist</p>
  					<p class="GP2">http://www.emizani.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Soroya Bacchus, MD - Addiction Medicine and Psychiatry Specialist</p>
  					<p class="GP2">http://soroyabacchusmd.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Calming Goat Addiction Medicine</p>
  					<p class="GP2">https://calminggoat.com/</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li>
  				<li class="LiGP">
  					<p class="GP1">Your Practice</p>
  					<p class="GP2">http://www.hollywoodsign.org</p>
  					<p class="GPs1"></p>
  					<p class="GPs2"></p>
  				</li> -->
  			</ul>
  		</div>
  	</div>

<div class="REpFa">
	<div class="InGooRnk">
		<div class="clsGRnk"><button type="button" class="ClsSL">&times;</button></div>
		<h2>Reputation Factors</h2>
		<p class="SubP">The reputation scores were calculated based on a combination of the average star rating, and total number of reviews.</p>
		<h5>Average Star Rating</h5>
		<div class="table-responsive">
			<table class="table tbl">
			    <thead>
			      <tr>
			        <th width="26%">Practices</th>
			        <th width="21%"><img src="com-assets\img\goog.png"></th>
			      </tr>
			    </thead>
			    <tbody id="average_rating">
			      <!-- <tr>
			        <td>Your Practice</td>
			        <td></td>
			      </tr>
			      <tr>
			        <td>Dr. Ellie Mizani, MD - Adult, Child and Adolescent Psychiatrist and Addiction Medicine Specialist</td>
			        <td>38</td>
			      </tr>
			      <tr>
			        <td>Soroya Bacchus, MD - Addiction Medicine and Psychiatry Specialist</td>
			        <td>16</td>
			      </tr> -->
			    </tbody>
		  </table>
		</div>
	  <h5>Total Number of Reviews</h5>
	  <div class="table-responsive">
		<table class="table tbl">
		    <thead>
		      <tr>
		        <th width="26%">Practices</th>
		        <th width="21%"><img src="com-assets\img\goog.png"></th>
		      </tr>
		    </thead>
		    <tbody id="total_reviews">
		      <!-- <tr>
		        <td>Your Practice</td>
		        <td></td>
		      </tr>
		      <tr>
		        <td>Dr. Ellie Mizani, MD - Adult, Child and Adolescent Psychiatrist and Addiction Medicine Specialist</td>
		        <td>38</td>
		      </tr>
		      <tr>
		        <td>Soroya Bacchus, MD - Addiction Medicine and Psychiatry Specialist</td>
		        <td>16</td>
		      </tr> -->
		    </tbody>
	  </table>
	  </div>		
	</div>
</div>
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
							 <form method="post" id="website_form" class="form-box">
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
				if($("#street_number").val()==""){
					$("#street_number").parent().find("label").shake();
					cont+=1;
				}
				if($("#route").val()==""){
					$("#route").parent().find("label").shake();
					cont+=1;
				}
				if($("#locality").val()==""){
					$("#locality").parent().find("label").shake();
					cont+=1;
				}
				if($("#administrative_area_level_1").val()==""){
					$("#administrative_area_level_1").parent().find("label").shake();
					cont+=1;
				}
				if($("#postal_code").val()==""){
					$("#postal_code").parent().find("label").shake();
					cont+=1;
				}
				if($("#country").val()==""){
					$("#country").parent().find("label").shake();
					cont+=1;
				}
				if($("#website").val()==""){
					$("#website").parent().find("label").shake();
					cont+=1;
				}
				if($("#name").val()==""){
					$("#name").parent().find("label").shake();
					cont+=1;
				}
				if(strUser=="")
				{
					$("#e1").parent().find("label").shake();
					cont+=1;
				}
				if(cont>0)
				{
					if($("#street_number").val()==""){
						$(".#street_number").css("border","2px solid red");
						$("#street_number").parent().find("label").css("color","red");
						$("#street_number").parent().find("label").shake();
					}
					if($("#route").val()==""){
						$(".#route").css("border","2px solid red");
						$("#route").parent().find("label").css("color","red");
						$("#route").parent().find("label").shake();
					}
					if($("#locality").val()==""){
						$(".#locality").css("border","2px solid red");
						$("#locality").parent().find("label").css("color","red");
						$("#locality").parent().find("label").shake();
					}
					if($("#administrative_area_level_1").val==""){
						$(".#administrative_area_level_1").css("border","2px solid red");
						$("#administrative_area_level_1").parent().find("label").css("color","red");
						$("#administrative_area_level_1").parent().find("label").shake();
					}
					if($("#postal_code").val()==""){
						$(".#postal_code").css("border","2px solid red");
						$("#postal_code").parent().find("label").css("color","red");
						$("#postal_code").parent().find("label").shake();
					}
					if($("#country").val()==""){
						$(".#country").css("border","2px solid red");
						$("#country").parent().find("label").css("color","red");
						$("#country").parent().find("label").shake();
					}
					if($("#website").val()==""){
						 $(".#website").css("border","2px solid red");
						$("#website").parent().find("label").css("color","red");
						$("#website").parent().find("label").shake();
					}
					if($("#name").val()==""){
						 $(".#name").css("border","2px solid red");
						$("#name").parent().find("label").css("color","red");
						$("#name").parent().find("label").shake();
					}
					if(strUser=="")
					{
						 $(".select2-selection--single").css("border","2px solid red");
						$(".SelClik label").css("color","red");
						$(".SelClik label").shake();
					}
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
	<script>
		$(document).ready(function() {
			var PerVal=80;
			var clr="#f6606e";
			var selector = document.getElementById('my_id');
			selector.setAttribute('stroke-dasharray',PerVal+',100');
			selector.setAttribute('stroke',clr);
			$(".ScrRes p").css("color",clr);
			$("#Per").css("color",clr);
			$('#Per').text(PerVal);
		});

		$(window).scroll(function() {
			if ($(window).scrollTop() > 280) {
					$(".inPerBar").fadeIn("slow");
			}
			if ($(window).scrollTop() > 1150) {
					var main = document.getElementById("main_br");
			$(main).addClass("product1");
			}
			if ($(window).scrollTop() > 2100) {
					var main1 = document.getElementById("main_br1");
					$(main1).addClass("product1");
			}
			if ($(window).scrollTop() > 3050) {
					var main2 = document.getElementById("main_br2");
					$(main2).addClass("product1");
			}
			if ($(window).scrollTop() > 4000) {
					var main3 = document.getElementById("main_br3");
					$(main3).addClass("product1");
			}
			if ($(window).scrollTop() > 4950) {
					var main4 = document.getElementById("main_br4");
					$(main4).addClass("product1");
			}
			if ($(window).scrollTop() > 5850) {
					var main5 = document.getElementById("main_br5");
					$(main5).addClass("product1");
			}
		});

		$(".NxtLin").click(function(){
		$(".MreRslt").removeClass("HidAcc");
		});

		$(".clsSpn").click(function(){
		$(".MreRslt").addClass("HidAcc");
		});
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4&libraries=places&callback=initAutocomplete"
		async defer></script>
		<script type="text/javascript">
			$("#website_form").submit(function(event) {
				event.preventDefault();
				var formData = $('#website_form').serialize();
				var website_param = 0;
				var seo_param = 0;
				var mobile_friendly_param = 0;
				$.ajax({
					type: "post",
					url: "competitors/get_competitors.php",
					data: formData,
					success: function(data) {
						var competitor_jsonData = JSON.parse(data);
						$('#category_name').empty();
						$('#category_name').html(competitor_jsonData.category_name);
						$('#organization_name').empty();
						$('#organization_name').html(competitor_jsonData.organization_name);
						// alert(jsonData.status);
						if(competitor_jsonData.status=='true')
						{
							$('#competitor_div').empty();
							$('#competitor_div').html(competitor_jsonData.competitors_div);
							$('#google_rank_div').empty();
							$('#google_rank_div').html(competitor_jsonData.google_rank);
							$('#google_rank_graph').empty();
							$('#google_rank_graph').html(competitor_jsonData.google_rank_chart);
							$('#reputation_div').empty();
							$('#reputation_div').html(competitor_jsonData.reputation);
							$('#reputation_graph').empty();
							$('#reputation_graph').html(competitor_jsonData.reputation_chart);

							$('#google_rank_details').empty();
							$('#google_rank_details').html(competitor_jsonData.google_rank_detail);
							$('#average_rating').empty();
							$('#average_rating').html(competitor_jsonData.average_rating);
							$('#total_reviews').empty();
							$('#total_reviews').html(competitor_jsonData.total_reviews);
							event.preventDefault();
							$.ajax({
								type: "post",
								url: "competitors/check_website_speed.php",
								data: {competitors:competitor_jsonData.competitors},
								success: function(responseData) {
									var website_speed_jsonData = JSON.parse(responseData);
									website_param++;
									recursive_function(website_param);
									if(website_speed_jsonData.status=='true')
									{
										$.ajax({
											type: "post",
											url: "competitors/check_mobile_speed.php",
											data: {competitors:website_speed_jsonData.website_speed},
											success: function(responseData) {
												var mobile_speed_jsonData = JSON.parse(responseData);
												if(mobile_speed_jsonData.status=='true')
												{
													$('#website_div').empty();
													$('#website_div').html(mobile_speed_jsonData.website);
													$('#website_graph').empty();
													$('#website_graph').html(mobile_speed_jsonData.website_chart);

													$('#website_details').empty();
													$('#website_details').html(mobile_speed_jsonData.website_detail);
													// $('.RsltSec').css('display', 'block');
													website_param++;
													recursive_function(website_param);
												}
												else{
													console.log("Something went wrong");
												}
											},
											error: function(jqXHR, textStatus, errorThrown) {
												console.log(errorThrown);
											}
										});
									}
									else{
										console.log("Something went wrong");
									}
								},
								error: function(jqXHR, textStatus, errorThrown) {
									console.log(errorThrown);
								}
							});

							$.ajax({
								type: "post",
								url: "competitors/get_seo_score.php",
								data: {competitors:competitor_jsonData.competitors},
								success: function(responseData) {
									var seo_score_jsonData = JSON.parse(responseData);
									if(seo_score_jsonData.status=='true')
									{
										seo_param = 1;
										$('#seo_div').empty();
										$('#seo_div').html(seo_score_jsonData.seo_score);
										$('#seo_graph').empty();
										$('#seo_graph').html(seo_score_jsonData.seo_chart);
										$('#seo_score_details').empty();
										$('#seo_score_details').html(seo_score_jsonData.seo_score_detail);
										website_param++;
										recursive_function(website_param);
									}
									else{
										console.log("Something went wrong");
									}
								},
								error: function(jqXHR, textStatus, errorThrown) {
									console.log(errorThrown);
								}
							});

							// $.ajax({
							// 	type: "post",
							// 	url: "competitors/check_mobile_friendly.php",
							// 	data: {competitors:competitor_jsonData.competitors},
							// 	success: function(responseData) {
							// 		var mobile_friendly_jsonData = JSON.parse(responseData);
							// 		if(mobile_friendly_jsonData.status=='true')
							// 		{
							// 			mobile_friendly_param = 1;
							// 		}
							// 		else{
							// 			console.log("Something went wrong");
							// 		}
							// 	},
							// 	error: function(jqXHR, textStatus, errorThrown) {
							// 		console.log(errorThrown);
							// 	}
							// });
							// console.log('website_param ' + website_param);
							// console.log('seo_param ' + seo_param);
							// console.log('mobile_friendly_param ' + mobile_friendly_param);
							// if(website_param==1 && seo_param==1)
							// {
							// 	$('.RsltSec').css('display', 'block');
							// 	$('.lodr_sec').css('display', 'none');
							// }
						}
						else{
							console.log("Something went wrong");
						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.log(errorThrown);
					}
				});
			});

			function recursive_function(number)
			{
				console.log("Number " + number);
				if(number > 2)
				// if(number == 4)
				{
					$('.RsltSec').css('display', 'block');
					$('.lodr_sec').css('display', 'none');
					$('#myProgress').css('display', 'none');
				}
				else{
					$('.RsltSec').css('display', 'none');
					$('.lodr_sec').css('display', 'block');
				}
			}
		</script>

		<script type="text/javascript">
			$("#Nofpro").click(function(){
				$(this).parent().find('label').addClass('actInp');
			});
			$(".GetOpn").click(function(){
				$(".GoogRnk").addClass("W66");
				$(".InGooRnk").fadeIn(2000);
			});
			$(".CalWEB").click(function(){
				$(".WebDis").addClass("W66");
				$(".InGooRnk").fadeIn(2000);
			});
			$(".ReFac").click(function(){
				$(".REpFa").addClass("W66");
				$(".InGooRnk").fadeIn(2000);
			});
			$(".GetOpn2").click(function(){
				$(".GoogRnk2").addClass("W66");
				$(".InGooRnk").fadeIn(2000);
			});
			$(".ClsSL").click(function(){
				$(this).parent().parent().parent().removeClass("W66");
				$(".InGooRnk").fadeOut(100);
			});

			$(".btnFinGrph").click(function(){
				var sel = document.getElementById("Nofpro");
				var strPrc = sel.options[sel.selectedIndex].value;
				var cnt=0;
				if($("#RName").val()==""){
					cnt+=1;
				}
				if($("#RPname").val()==""){
					cnt+=1;
				}
				if($("#REmail").val()==""){
					cnt+=1;
				}
				cnt+=validEmail2($("#REmail").val());
				if($("#RPhone").val()==""){
					cnt+=1;
				}
				cnt+=phoneno2($("#RPhone").val());
				if($("#RZip").val()==""){
					cnt+=1;
				}
				if(strPrc==""){
					cnt+=1;
				}
				if(cnt>0)
				{
					if($("#RName").val()==""){
						$("#RName").css("border","2px solid red");
						$("#RName").parent().find("label").css("color","red");
						$("#RName").parent().find("label").shake();
					}
					if($("#RPname").val()==""){
						$("#RPname").css("border","2px solid red");
						$("#RPname").parent().find("label").css("color","red");
						$("#RPname").parent().find("label").shake();
					}
					if($("#REmail").val()==""){
						$("#REmail").css("border","2px solid red");
						$("#REmail").parent().find("label").css("color","red");
						$("#REmail").parent().find("label").shake();
					}
					if(validEmail2($("#REmail").val())==1){
									$("#REmail").parent().find("label").shake();
								} 
					if($("#RPhone").val()==""){
						$("#RPhone").css("border","2px solid red");
						$("#RPhone").parent().find("label").css("color","red");
						$("#RPhone").parent().find("label").shake();
					}
					if($("#RPhone").val().length!=10)
						{
							$("#RPhone").parent().find("label").shake();
						}
					if($("#RZip").val()==""){
						$("#RZip").css("border","2px solid red");
						$("#RZip").parent().find("label").css("color","red");
						$("#RZip").parent().find("label").shake();
					}
					if(strPrc==""){
						$("#Nofpro").parent().addClass("BCRed");
						$("#Nofpro").parent().find("label").css("color","red");
						$("#Nofpro").parent().find("label").shake();						
					}
					return false;
					}
					else
					{
						alert("Success");
					}
				});
			$("#Nofpro").change(function(){
				$(this).parent().removeClass("BCRed");
					$(this).parent().find("label").css("color","#2c98f7");
					$(this).css("color","#2c98f7");
			})

			function phoneno2(val){
				if(val.length==10)  {
				$("#RPhone").css("border","2px solid #2c98f7");
					$("#RPhone").parent().find("label").css("color","#2c98f7");
					$("#RPhone").css("color","#2c98f7");
					return 0;                
				}
				else{
					$("#RPhone").css("border","2px solid red");
					$("#RPhone").parent().find("label").css("color","red");
					$("#RPhone").css("color","red");              
					return 1;
				} 
		}


			document.getElementById("RPhone").onkeyup = function() {
				document.getElementById("RPhone").value = document.getElementById("RPhone").value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
				phoneno2(document.getElementById("RPhone").value);
			};

		document.getElementById("seml").onblur =function() {
			var eml=document.getElementById("seml").value;
			validEmail(eml);
		};

		function validEmail2(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(re.test(email)==false){
					$("#REmail").css("border","2px solid red");
						$("#REmail").parent().find("label").css("color","red");
						$("#REmail").css("color","red");
						return 1;
				}
				else
				{
					return 0;
				}
				// return re.test(email);
		};
		</script>

	 </body>
</html>