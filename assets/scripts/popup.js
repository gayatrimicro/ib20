
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




		function get_patients_competitor_form()
		{
			$.ajax({
				type: "post",
				url: "../competitors/check_attempt.php",
				success: function(responseData) {
					$('#pracFrm').modal("show");
					var response = JSON.parse(responseData);
					if(response.status=='true')
					{						
					}
					else{
						$('#pracFrm_body').empty();
						$('#pracFrm_body').html('<div class="Step1str Stepcurr"><h2></h2></div>');
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown);
				}
			});
		}

		

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
				var strUser = e.value;
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
				if($("#e1").val()=="")
				{
					$("#e1").parent().find("label").shake();
					cont+=1;
				}
				if(cont>0)
				{
					if($("#street_number").val()==""){
						$("#street_number").css("border","2px solid red");
						$("#street_number").parent().find("label").css("color","red");
						$("#street_number").parent().find("label").shake();
					}
					if($("#route").val()==""){
						$("#route").css("border","2px solid red");
						$("#route").parent().find("label").css("color","red");
						$("#route").parent().find("label").shake();
					}
					if($("#locality").val()==""){
						$("#locality").css("border","2px solid red");
						$("#locality").parent().find("label").css("color","red");
						$("#locality").parent().find("label").shake();
					}
					if($("#administrative_area_level_1").val==""){
						$("#administrative_area_level_1").css("border","2px solid red");
						$("#administrative_area_level_1").parent().find("label").css("color","red");
						$("#administrative_area_level_1").parent().find("label").shake();
					}
					if($("#postal_code").val()==""){
						$("#postal_code").css("border","2px solid red");
						$("#postal_code").parent().find("label").css("color","red");
						$("#postal_code").parent().find("label").shake();
					}
					if($("#country").val()==""){
						$("#country").css("border","2px solid red");
						$("#country").parent().find("label").css("color","red");
						$("#country").parent().find("label").shake();
					}
					if($("#website").val()==""){
						 $("#website").css("border","2px solid red");
						$("#website").parent().find("label").css("color","red");
						$("#website").parent().find("label").shake();
					}
					if($("#name").val()==""){
						 $("#name").css("border","2px solid red");
						$("#name").parent().find("label").css("color","red");
						$("#name").parent().find("label").shake();
					}
					if($("#e1").val()=="")
					{
						 $("#e1").next().css("border","2px solid red");
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
				var cntStrnme=countWords($("#snme").val());
				var count_n=0;
						if($("#snme").val()=="")
						{
							count_n+=1;
						}

						if(cntStrnme < 2){
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
								if(cntStrnme < 2){
									$(".fidSet1 input").css("border","2px solid red");
									$(".fidSet1 label").css("color","red");
									$(".fidSet1 input").css("color","red");
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
							$(".Step3str").css("display","none");
							$(".Step3str input").css("border","2px solid #ddd");
							$(".Step3str label").css("color","#000");
							$('#pracFrm').hide();
							$(".modal-backdrop").removeClass("in");
							$(".modal-backdrop").hide();
							$('.HidPge').hide();
							$('.ShwRes').show();
							$('body').removeClass("modal-open");
							$("html").css("overflow","unset");
							$("html").css("background-color","#f7f9fc");
							

							$("#myProgress").show();
							// move();
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
		var kcnt=0;
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



			// $(document).ready(function() { $("#e1").select2(); });



		function get_category(id)
		{
			document.getElementById('e1').value = id;
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
			sublocality_level_1: 'long_name',
			country: 'short_name',
			postal_code: 'short_name',
			website: 'website',
			name: 'name',
			frm_user_rating: 'rating',
			frm_user_reviews: 'user_ratings_total',
		};

		function initAutocomplete() {
			// Create the autocomplete object, restricting the search predictions to
			// geographical location types.
			autocomplete = new google.maps.places.Autocomplete(
				document.getElementById('autocomplete'), {types: ['establishment']});

			autocomplete2 = new google.maps.places.Autocomplete(
				document.getElementById('autocomplete2'), { types: ['establishment']});

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
			document.getElementById('frm_user_rating').value = place['rating'];
			document.getElementById('frm_user_reviews').value = place['user_ratings_total'];
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

		// var placeSearch, autocomplete;

		// var componentForm = {
		// 	street_number: 'short_name',
		// 	route: 'long_name',
		// 	locality: 'long_name',
		// 	administrative_area_level_1: 'long_name',
		// 	sublocality_level_1: 'long_name',
		// 	country: 'short_name',
		// 	postal_code: 'short_name',
		// 	website: 'website',
		// 	name: 'name',
		// 	frm_user_rating: 'rating',
		// 	frm_user_reviews: 'user_ratings_total',
		// };

		// function initAutocomplete() {
		// 	// Create the autocomplete object, restricting the search predictions to
		// 	// geographical location types.
		// 	autocomplete = new google.maps.places.Autocomplete(
		// 		document.getElementById('autocomplete'), {types: ['establishment']});


		// 	autocomplete2 = new google.maps.places.Autocomplete(
		// 		document.getElementById('autocomplete2'), { types: ['establishment']});


		// 	// Avoid paying for data that you don't need by restricting the set of
		// 	// place fields that are returned to just the address components.
		// 	// autocomplete.setFields(['address_component', 'website']);

		// 	// When the user selects an address from the drop-down, populate the
		// 	// address fields in the form.
		// 	autocomplete2.addListener('place_changed', fillInAddress);
		// }

		// function fillInAddress() {
		// 	// Get the place details from the autocomplete object.
		// 	document.getElementById('address').removeAttribute("hidden");
		// 	var place = autocomplete.getPlace();

		// 	for (var component in componentForm) {
		// 	document.getElementById(component).value = 'unknown';
		// 	// document.getElementById(component).disabled = false;
		// 	}
			
		// 	// Get each component of the address from the place details,
		// 	// and then fill-in the corresponding field on the form.
		// 	for (var i = 0; i < place.address_components.length; i++) {
		// 	var addressType = place.address_components[i].types[0];
		// 	if (componentForm[addressType]) {
		// 		var val = place.address_components[i][componentForm[addressType]];
		// 		document.getElementById(addressType).value = val;   
		// 	}
		// 	}

		// 	document.getElementById('website').value = place['website'];
		// 	document.getElementById('name').value = place['name'];
		// 	document.getElementById('frm_website').value = place['website'];
		// 	document.getElementById('frm_name').value = place['name'];
		// 	document.getElementById('frm_user_rating').value = place['rating'];
		// 	document.getElementById('frm_user_reviews').value = place['user_ratings_total'];
		// }

		// // Bias the autocomplete object to the user's geographical location,
		// // as supplied by the browser's 'navigator.geolocation' object.
		// function geolocate() {
		// 	if (navigator.geolocation) {
		// 	navigator.geolocation.getCurrentPosition(function(position) {
		// 		var geolocation = {
		// 		lat: position.coords.latitude,
		// 		lng: position.coords.longitude
		// 		};
		// 		var circle = new google.maps.Circle(
		// 			{center: geolocation, radius: position.coords.accuracy});
		// 		autocomplete.setBounds(circle.getBounds());
		// 	});
		// 	}
		// 	$(document).keypress(
		// 		function(event){
		// 		if (event.which == '13') {
		// 			event.preventDefault();
		// 		}
		// 	});
		// }  




		function growth(val, color) {
			var PerVal=val;
			var clr=color;
			var selector = document.getElementById('my_id');
			selector.setAttribute('stroke-dasharray',PerVal+',100');
			selector.setAttribute('stroke',clr);
			$(".ScrRes p").css("color",clr);
			$("#Per").css("color",clr);
			$('#Per').text(val);
		}

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

	


			$("#request_demo_form").submit(function(event) {
				event.preventDefault();
				var formData = $('#request_demo_form').serialize();
				$.ajax({
					type: "post",
					url: "../competitors/request_demo_form.php",
					data: formData,
					success: function(data) {
						if(data.status=='true')
						{
							$('.demo_request_message').empty().text('Your request has been sent successfully');
						}
						else{
							$('.demo_request_message').empty().text('Something went wrong');
						}
					}
				});
			});
			$("#website_form").submit(function(event) {
				event.preventDefault();
				var formData = $('#website_form').serialize();
				// var website_param = $('#my_loader_predictor').val(); //0
				recursive_function();
				$.ajax({
					type: "post",
					url: "../competitors/get_competitors.php",
					data: formData,
					success: function(data) {
						var competitor_jsonData = JSON.parse(data);
						$('#category_name').empty();
						$('#category_name').html(competitor_jsonData.category_name);
						$('#organization_name').empty();
						$('#organization_name').html(competitor_jsonData.organization_name);
						// var website_param = $('#my_loader_predictor').val();
						// document.getElementById('my_loader_predictor').vlaue = "";
						var set_var = document.getElementById('my_loader_predictor').value;
						document.getElementById('my_loader_predictor').value = parseInt(set_var)+1;
						recursive_function();
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
								url: "../competitors/check_mobile_friendly.php",
								data: {competitors:competitor_jsonData.competitors},
								success: function(responseData) {
									var mobile_friendly_jsonData = JSON.parse(responseData);
									if(mobile_friendly_jsonData.status=='true')
									{
										$('#mobile_friendly_div').empty();
										$('#mobile_friendly_div').html(mobile_friendly_jsonData.mobile_friendly_score);
										$('#mobile_friendly_screens').empty();
										$('#mobile_friendly_screens').html(mobile_friendly_jsonData.mobile_friendly_screens);
										
										$('#mobile_friendly_details').empty();
										$('#mobile_friendly_details').html(mobile_friendly_jsonData.mobile_friendly_details);
										// var website_param = $('#my_loader_predictor').val();
										// document.getElementById('my_loader_predictor').vlaue = "";
										var set_var = document.getElementById('my_loader_predictor').value;
										document.getElementById('my_loader_predictor').value = parseInt(set_var)+1;
										recursive_function();
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
								url: "../competitors/check_website_speed.php",
								data: {competitors:competitor_jsonData.competitors},
								success: function(responseData) {
									var website_speed_jsonData = JSON.parse(responseData);
									// var website_param = $('#my_loader_predictor').val();
									// document.getElementById('my_loader_predictor').vlaue = "";
									var set_var = document.getElementById('my_loader_predictor').value;
									document.getElementById('my_loader_predictor').value = parseInt(set_var)+1;
									recursive_function();
									if(website_speed_jsonData.status=='true')
									{
										$.ajax({
											type: "post",
											url: "../competitors/check_mobile_speed.php",
											data: {competitors:website_speed_jsonData.website_speed, your_rank:competitor_jsonData.your_rank, organization:competitor_jsonData.organization_name},
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

													$('#your_growth').empty();
													$('#your_growth').html(mobile_speed_jsonData.your_growth);
													growth(mobile_speed_jsonData.your_growth_score, mobile_speed_jsonData.your_growth_color);
													// var website_param = $('#my_loader_predictor').val();
													// document.getElementById('my_loader_predictor').vlaue = "";
													var set_var = document.getElementById('my_loader_predictor').value;
													document.getElementById('my_loader_predictor').value = parseInt(set_var)+1;
													recursive_function();
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
								url: "../competitors/get_seo_score.php",
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
										
										// var website_param = $('#my_loader_predictor').val();
										// document.getElementById('my_loader_predictor').vlaue = "";
										var set_var = document.getElementById('my_loader_predictor').value;
										document.getElementById('my_loader_predictor').value = parseInt(set_var)+1;
										recursive_function();
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
			});

			function recursive_function()
			{
				var number = document.getElementById('my_loader_predictor').value;
				console.log("Number " + number);
				if(number == 1)
				{
					$("#myBar").css("width","50%");
					$("#my_per").html("50%");
				}
				else if(number == 2)
				{
					$("#myBar").css("width","60%");
					$("#my_per").html("60%");
				}
				else if(number == 3)
				{
					$("#myBar").css("width","70%");
					$("#my_per").html("70%");
				}
				else if(number == 4)
				{
					$("#myBar").css("width","80%");
					$("#my_per").html("80%");
				}
				else if(number == 5)
				{
					$("#myBar").css("width","100%");
					$("#my_per").html("100%");
				}

				if(number == 5)
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
			$(".CalWEB2").click(function(){
				$(".WebDis2").addClass("W66");
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

$("input").keyup(function(){
	//$(this).parent().find('label').addClass('actInp');
  if (event.keyCode === 13) {
   event.preventDefault();
   setTimeout(function(){ $(".nxtPge").click(); }, 500);
   
  }
  });

function countWords(str) {
   str = str.replace(/(^\s*)|(\s*$)/gi,"");
   str = str.replace(/[ ]{2,}/gi," ");
   str = str.replace(/\n /,"\n");
   return str.split(' ').length;
   }

   $("#PatComBtn").click(function(){
         $('#pracFrm').modal('show');
         setTimeout(function(){ getClassModal(); }, 300);
    });

   function getClassModal(){
   	if(($("#pracFrm").hasClass("in"))){
		$("#autocomplete").focus();
	}
   }

   function SelCatPrac(val) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ULPrc");
    $("#ULPrc").addClass("H200");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$("#ULPrc li").click(function(){
var GetTxt=$(this).text();
$("#myInput").val(GetTxt);
$("#ULPrc").toggleClass("H200");
});

$("#myInput").click(function(){
	$("#ULPrc").addClass("H200");
});
$(".SelClik label").click(function(){
	$("#ULPrc").toggleClass("H200");
});

$(document).click(function(e) {
		if (($(e.target).closest("#selClPr").attr("id") != "selClPr")) {
		$("#ULPrc").removeClass("H200");
		}
		});


$("#submit").click(function(){
var GetLoc2=$("#autocomplete2").val();
if(GetLoc2==""){
	$("#autocomplete2").css("border-bottom","2px dashed red")
}
else
{
	$('#btnPop').click();
	$("#autocomplete").val(GetLoc2);
}
});


 $('.LodSlid').slick({
            infinite: true,
            autoplay: true,
            speed: 300,
            fade: true,
            cssEase: 'linear'
        });

		document.getElementById("RPhone").onkeyup = function() {
				document.getElementById("RPhone").value = document.getElementById("RPhone").value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
				phoneno2(document.getElementById("RPhone").value);
			};

		document.getElementById("seml").onblur =function() {
			var eml=document.getElementById("seml").value;
			validEmail(eml);
		};
