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


function post_data(hoodaccidentednotes,frontbumperaccidentednotes,headlightsaccidentednotes)
{
 

 var headlightsaccidented = $('input[name=headlightsaccidented]:checked').val();
 console.log(headlightsaccidented); 
 console.log(headlightsaccidentednotes);
 var frontbumperaccidented = $('input[name=frontbumperaccidented]:checked').val();
 console.log(frontbumperaccidented);
 console.log(frontbumperaccidentednotes);
 var hoodaccidented = $('input[name=hoodaccidented]:checked').val(); 
 console.log(hoodaccidented);
 console.log(hoodaccidentednotes)
 
 var vehicle_inspection_id = window.localStorage.getItem('vehicle_inspection_id');
 var token = window.localStorage.getItem("Authorization");



   $.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_front_inspection', 
	    data: {"vehicle_inspection_id": vehicle_inspection_id,
	    		"headlights_accident": headlightsaccidented,
	   		  	"headlights_damage_notes": headlightsaccidentednotes, 
	    		 "front_bumper_accidented": frontbumperaccidented, 
	   		  	 "front_bumper_damage_notes":frontbumperaccidentednotes,
	   		  	  "hood_accidented": hoodaccidented, 
	     	  	 "hood_damage_notes": hoodaccidentednotes, 
	     	  	 "created_at": "2017-05-17T14:14:38.241770Z"},
	    datatype: 'json' ,
	    success: function(response) {
	    	top.location.href = "right.html";
	        
	        return true;
	    },
	    error: function(e) {
	    	       
	    }
	});     
  


  
    
}



