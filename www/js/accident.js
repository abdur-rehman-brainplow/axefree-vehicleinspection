
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

     // var token = window.localStorage.getItem("Authorization");
     // header = {"token": "jwt "+token}; 
     // console.log(header); 
        window.location.href="vehicle-inspection.html"; 
 //     $.ajax({
	//     type: "POST",
	//     url: 'http://www.axefree.com/shop_api/vehicle_accident_damage_inspections', 
	//     data: { "vehicle_inspection_id": "99","accident_damage": accidentdamage,'accident_damage_type': accidentdamagetype , 'accident_damage_notes': damagenotes , "created_at": "2017-05-17T14:07:15.249917Z"},
	//     headers: header, 
	//     datatype: 'json' ,
	//     success: function(response) {
	//     	console.log("data is successful"); 
	//          top.location.href="vehicle-inspection.html";
	//          return true; 
	//     },
	//     error: function(e) {

	//         alert('Error: Your email password is incorrect' + e.message);
          
	        
	//     }
	// });       
}