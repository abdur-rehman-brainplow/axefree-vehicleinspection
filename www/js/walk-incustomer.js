$(document).ready(function(){
	 token_verify();
   
    get_inspection_types();
     
}); 

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

function verify_characters()
{
	var vin = document.getElementById('vin').value;
	 if(vin.length == 17) 
	{
          var vin_no = vin;   
          get_vehicle_data(vin_no);
	}
	if(vin.length < 17 || vin.length > 17)
	{
		    document.getElementById("maker").value =" ";
	    	document.getElementById("model").value = " ";
	    	document.getElementById("year").value = " ";
	    	document.getElementById("trim").value = " ";
	}

	 
}


function get_vehicle_data(vin_no)
{
    
	$.ajax({
	    type: "GET",
	    url: 'http://www.axefree.com/website_api/vehicle_info/'+vin_no, 
	   	datatype: 'json',
	    success: function(response) {
	    	
	    	
	    
	    	document.getElementById("maker").value = response['Make'];
	    	document.getElementById("model").value = response['Model'];
	    	document.getElementById("year").value = response['Model_Year'];
	    	document.getElementById("trim").value = response['Trim_Level'];
	    
	        return true;
	    },
	    error: function(e) {
	    	
	        document.getElementById("maker").value = " ";
	    	document.getElementById("model").value = " ";
	    	document.getElementById("year").value = " ";
	    	document.getElementById("trim").value = " "; 
	    }
	}); 
}

function get_inspection_types(){

$.ajax({
 type: "GET",
 url: "http://www.axefree.com/vehicle_api/vehicle_inspection_types",
 crossDomain: true,
 datatype: 'json',
 success: function(result){

 		var arr = [];
 		$.each(result,function( key , value){
 	 		arr.push("<option value='"+value['id']+"'>"+value['title']+"</option>");
 		});

 		$("#inspection_types").html(arr);
 		
 }
 });
}

function back()
{
	window.location.href = "home.html"; 
}


function post_data()
{
	 var vin = document.getElementById('vin').value; 
	 var maker = document.getElementById('maker').value; 
	 var model = document.getElementById('model').value; 
	 var trim = document.getElementById('trim').value; 
	 var year = document.getElementById('year').value; 
	 var fname = document.getElementById('fname').value; 
	 var lname = document.getElementById('lname').value; 
	 var phoneno = document.getElementById('phoneno').value; 
	 var email = document.getElementById('email').value; 
	 var state = document.getElementById('state').value; 
	 var zipcode = document.getElementById('zipcode').value;

	 console.log(vin); 
	 console.log(maker); 
	 console.log(model); 
	 console.log(trim); 
	 console.log(year); 
	 console.log(fname); 
	 console.log(lname); 
	 console.log(phoneno); 
	 console.log(email); 
	 console.log(state); 
	 console.log(zipcode);  



	
     window.location.href = "accident.html"; 


 //   var token = window.localStorage.getItem("Authorization");
 //   console.log("JWT "+token);
 //   var header = {"token": "JWT " +token}; 
 //   console.log(header);

 //    console.log(shop_id,customers,vin,inspectiontypes );
 //     $.ajax({
	//     type: "POST",
	//     headers: {"token": token},
	//     url: 'http://www.axefree.com/shop_api/vehicle_inspections', 
	//     data: {"shop_id":shop_id,"customer_id":customers,"vehicle_id": vin, "inspection_type_id":inspectiontypes, "created_at": "2017-05-17T14:14:38.241770Z"},
	//     datatype: 'json' ,
	//     success: function(response) {
	//         top.location.href="accident.html"
	//         return true;
	//     },
	//     error: function(e) {
	//     	console.log("Error" , e.message);
	    	        
	//     }
	// });        
}