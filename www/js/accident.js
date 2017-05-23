
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
	    	
	    	top.location.href="login.html";	        
	    }
	});        
}



function post_data(damagenotes)
{
    

     var accidentdamage = $('input[name=accidentdamage]:checked').val();
     console.log(accidentdamage); 

     var accidentdamagetype = $('input[name=accidentdamagetype]:checked').val();
     console.log(accidentdamagetype); 


     console.log(damagenotes); 

     var vehicle_inspection_id = window.localStorage.getItem('vehicle_inspection_id'); 

     var token = window.localStorage.getItem("Authorization");
     header = {"token": "jwt "+token}; 
     console.log(header); 
        
     $.ajax({
	    type: "POST",
	    headers: {"Authorization": "JWT " +token},
	    url: 'http://www.axefree.com/shop_api/vehicle_accident_damage_inspections', 
	    data: { "vehicle_inspection_id": vehicle_inspection_id,
	    "accident_damage": accidentdamage,
	    'accident_damage_type': accidentdamagetype ,
	     'accident_damage_notes': damagenotes , 
	     "created_at": "2017-05-17T14:07:15.249917Z"},
	   
	    datatype: 'json' ,
	    success: function(response) {
	    	console.log("data is successful"); 
	         top.location.href="vehicle-inspection.html";
	         return true; 
	    },
	    error: function(e) {

	        console.log("data is not successfully updated");
          
	        
	    }
	});       
}


