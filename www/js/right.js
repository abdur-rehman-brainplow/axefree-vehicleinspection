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


function post_data(rightfenderdamagenots,rightfrontdoordamagenotes,rightreardoordamagenotes,rightquarterpaneldamagenotes)
{
	console.log(rightfenderdamagenots);
	console.log(rightfrontdoordamagenotes); 
	console.log(rightreardoordamagenotes);
	console.log(rightquarterpaneldamagenotes); 

	var right_fender_accidented = $('input[name=rightfenderaccidented]:checked').val();
	var right_front_door_accidented = $('input[name=rightfrontdooraccidented]:checked').val(); 
	var right_rear_door_accidented = $('input[name=rightreardooraccidented]:checked').val(); 
	var right_quarter_panel_accidented = $('input[name = rightquarterpanelaccidented').val(); 

	console.log(right_fender_accidented); 
	console.log(right_front_door_accidented); 
	console.log(right_rear_door_accidented); 
	console.log(right_quarter_panel_accidented); 
	console.log(right_quarter_panel_accidented); 

	var token = window.localStorage.getItem('Authorization'); 
    var vehicle_inspection_id = window.localStorage.getItem('vehicle_inspection_id'); 

	$.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_right_side_inspection', 
	    data: {"vehicle_inspection_id": vehicle_inspection_id,
	    	"right_fender_accidented": right_fender_accidented,
	    	"right_fender_damage_notes":rightfenderdamagenots,
	   		  	"right_front_door_accidented":right_front_door_accidented , 
	    		 "right_front_door_damage_notes": rightfrontdoordamagenotes , 
	   		  	 "right_rear_door_accidented":right_rear_door_accidented,
	   		  	  "right_rear_door_damage_notes": rightreardoordamagenotes, 
	     	  	 "right_quarter_panel_accidented": right_quarter_panel_accidented,
	     	  	 "right_quarter_panel_damage_notes":rightquarterpaneldamagenotes, 
	     	  	 "created_at": "2017-05-17T14:14:38.241770Z"},
	    datatype: 'json' ,
	    success: function(response) {
	    	top.location.href = "back.html";
	        
	        return true;
	    },
	    error: function(e) {
	    	       
	    }
	});     



}