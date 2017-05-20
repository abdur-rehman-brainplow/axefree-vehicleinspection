$(document).ready(function(){
	//token_verify();
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
 
 // var token = window.localStorage.getItem("Authorization");
 // var header = {"token": "jwt "+token}; 


 //   $.ajax({
	//     type: "POST",
	//     url: 'http://www.axefree.com/shop_api/api-token-verify/', 
	//     headers: header; 
	//     data: {"headlights_accident": headlightsaccidented, "headlights_damage_notes": headlightsaccidentednotes , "front_bumper_accidented": frontbumperaccidented , 
	//    		   "front_bumper_damage_notes":frontbumperaccidentednotes, "hood_accidented": hoodaccidented , 
	//      	   "hood_damage_notes": hoodaccidentednotes , "created_at": "2017-05-17T14:14:38.241770Z"},
	//     datatype: 'json' ,
	//     success: function(response) {
	        
	//         return true;
	//     },
	//     error: function(e) {
	    	       
	//     }
	// });     
  


  window.location.href="right.html"; 
    
}



