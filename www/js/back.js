$(document).ready(function(){
	token_verify();
})



function token_verify(){
	var token = window.localStorage.getItem("Authorization");
	var set_token = token;
	$.ajax({
	    type: "POST",
	    url: 'http://www.axefree.com/shop_api/api-token-verify/', 
	    data: {"token": set_token},
	    datatype: 'json' ,
	    success: function(response) {
	        
	        return true;
	    },
	    error: function(e) {
	    	top.location.href="login.html";	        
	    }
	});        
}


function post_data()
{
	var token = window.localStorage.getItem('Authorization'); 
	var vehicle_inspection_id = window.localStorage.getItem('vehicle_inspection_id'); 
    

	var trunk_accidented = $('input[name=trunkaccidented]:checked').val();
	var trunk_damage_notes = document.getElementById("trunkdamagenotes").value; 
	var tail_lights_accidented = $('input[name=taillightsaccidented]:checked').val(); 
	var tail_lights_damage_notes = document.getElementById("taillightsdamagenotes").value; 
	var rear_bumper_accidented = $('input[name=rearbumperaccidented]:checked').val(); 
	var rear_bumper_damage_notes = document.getElementById("rearbumperdamagenotes").value; 

	console.log(trunk_accidented); 
	console.log(trunk_damage_notes); 
    console.log(tail_lights_accidented); 
    console.log(tail_lights_damage_notes); 
    console.log(rear_bumper_accidented); 
    console.log(rear_bumper_damage_notes); 


    $.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_back_inspection', 
	    data: {"vehicle_inspection_id": vehicle_inspection_id,
	    	"trunk_accidented": trunk_accidented,
	    	"trunk_damage_notes":trunk_damage_notes,
	   		  	"tail_lights_damage_notes":tail_lights_damage_notes, 
	    		 "tail_lights_accidented": tail_lights_accidented , 
	   		  	 "rear_bumper_accidented": rear_bumper_accidented,
	   		  	  "rear_bumper_damage_notes": rear_bumper_damage_notes,  
	     	  	 "created_at": "2017-05-17T14:14:38.241770Z"},
	    datatype: 'json' ,
	    success: function(response) {
	    	top.location.href = "left.html";
	        
	        return true;
	    },
	    error: function(e) {
	    	       
	    }
	});     

}
