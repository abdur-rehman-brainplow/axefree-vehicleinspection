$(document).ready(function(){

	token_verify();
})



function token_verify(){
	var token = window.localStorage.getItem("Authorization");
	$.ajax({
	    type: "POST",
	    url: 'http://www.axefree.com/shop_api/api-token-verify/', 
	    data: {"token": token},
	    datatype: 'json' ,
	    success: function(response) {
	       
	        return true;
	    },
	    error: function(e) {
	    	alert("Please Login to proceed Further"); 
	    	top.location.href="login.html";	        
	    }
	});        
}

function post_data()
{
	var token = window.localStorage.getItem('Authorization'); 
	var vehicle_inspection_id = window.localStorage.getItem('vehicle_inspection_id'); 
    

	var air_bag_light_on = $('input[name=airbaglightson]:checked').val();
	var air_bag_system = document.getElementById("airbaglightsonnotes").value; 
	var air_bag_deployed = $('input[name=airbagdeployed]:checked').val(); 
	var air_bag_deployment_notes = document.getElementById("airbagdeployednotes").value; 
	var air_bag_damage = $('input[name=airbagdamaged]:checked').val(); 
	var air_bag_damage_notes = document.getElementById("airbagdamagenotes").value; 
	var seatbelt_damage = $('input[name=seat_belt_damage]:checked').val(); 
	var seatbelt_damage_notes = document.getElementById("seat_belt_damage_notes").value;
	var structural_frame_damage = $('input[name=structural_frame_damage]:checked').val(); 
	var structural_frame_damage_notes = document.getElementById("structural_frame_damage_notes").value;



	var r_s_s_o_c_a_d = $('input[name=rooflinercurtainairbagdeployment]:checked').val(); 
	var r_c_a_d_n = document.getElementById("rooflinerairbagdeploymentnotes").value; 


	console.log(air_bag_light_on); 
	console.log(air_bag_system); 
	console.log(air_bag_deployed); 
	console.log(air_bag_deployment_notes); 
	console.log(air_bag_damage); 
	console.log(air_bag_damage_notes); 
	console.log(seatbelt_damage); 
	console.log(seatbelt_damage_notes); 
	console.log(structural_frame_damage); 
	console.log(structural_frame_damage_notes); 
	console.log(r_s_s_o_c_a_d); 
	console.log(r_c_a_d_n); 
	console.log(vehicle_inspection_id); 
	console.log(token); 





    $.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_air_bag_inspections', 
	    data: {"vehicle_inspection_id": vehicle_inspection_id,
	    		"air_bag_light_on": air_bag_light_on,
	    		"air_bag_system":air_bag_system,
	   		  	"air_bag_deployed":air_bag_deployed, 
	    		 "air_bag_deployment_notes": air_bag_deployment_notes, 
	   		  	 "air_bag_damaged": air_bag_damage,
	   		  	 "air_bag_damage_notes":air_bag_damage_notes, 
	   		  	  "seatbelt_damage": seatbelt_damage,
	   		  	  "seatbelt_damage_notes":seatbelt_damage_notes, 
	   		  	   "r_s_s_o_c_a_d":r_s_s_o_c_a_d, 
	   		  	  "r_c_a_d_n":r_c_a_d_n,  
	   		  	  "structurel_frame_damage":structural_frame_damage, 
	   		  	  "structurel_frame_damage_notes": structural_frame_damage_notes,
	     	  	 "created_at": "2017-05-17T14:14:38.241770Z"},
	    datatype: 'json' ,
	    success: function(response) {
	    	top.location.href = "report.html";
	        
	        return true;
	    },
	    error: function(e) {
	    	       
	    }
	});     

}

