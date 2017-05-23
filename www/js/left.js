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
	var vehicle_inspection_id = window.localStorage.getItem("vehicle_inspection_id"); 
	var token = window.localStorage.getItem("Authorization"); 

	console.log(vehicle_inspection_id); 
	console.log(token);

	var left_fender_accidented = $('input[name=leftfenderaccidented]:checked').val();
	var left_front_door_accidented = $('input[name = leftfrontdooraccidented]:checked').val(); 
	var left_rear_door_accidented = $('input[name = leftreardooraccidented]:checked').val(); 
	var left_quarter_panel_accidented = $('input[name = leftquarterpanelaccidented]:checked').val(); 
	var left_fender_damage_notes = document.getElementById("leftfenderdamagenotes").value;
	var left_front_door_damage_notes = document.getElementById("leftfrontdoordamagenotes").value; 
	var left_rear_door_damage_notes = document.getElementById("leftreardoordamagenotes").value;
	var left_quarter_panel_damage_notes = document.getElementById("leftquarterpaneldamagenotes").value; 
    console.log(left_fender_accidented); 
    console.log(left_front_door_accidented); 
    console.log(left_rear_door_accidented); 
    console.log(left_quarter_panel_accidented); 
    console.log(left_fender_damage_notes); 
    console.log(left_front_door_damage_notes); 
    console.log(left_rear_door_damage_notes); 
    console.log(left_quarter_panel_damage_notes);  


    $.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_left_side_inspection', 
	    data: {"vehicle_inspection_id": vehicle_inspection_id,
	    "left_quarter_panel_accident": left_quarter_panel_accidented,
	     	  	 "left_quarter_panel_damage_notes":left_quarter_panel_damage_notes,
	     	  	  "left_rear_door_accidented":left_rear_door_accidented,
	   		  	  "left_rear_door_damage_notes": left_rear_door_damage_notes, 
	   		  	  "left_front_door_accidented":left_front_door_accidented , 
	    		 "left_front_door_damage_notes": left_front_door_damage_notes , 
	    		"left_fender_accidented": left_fender_accidented,
	  		  	"left_fender_damage_notes":left_fender_damage_notes,
	     	  	 "created_at": "2017-05-17T14:14:38.241770Z"},
	    datatype: 'json' ,
	    success: function(response) {
	    	top.location.href = "airbag.html";
	        
	        return true;
	    },
	    error: function(e) {
	    	       
	    }
	});     


}
