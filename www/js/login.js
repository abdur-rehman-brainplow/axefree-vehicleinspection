function verify(username,password)
          {                  
          	if (username == "") {
          		  alert("please enter in username field");
          		  return; 
          	} 
          	else if(password == "") 
          	{
          		alert("please enter in password field"); 
          		return; 
          	}
          	else if (checkbox == "off") {

          		alert ("please mark the required field");
          		return; 
          	}

      		else
      		{
      			msg = log_in(username,password);



      		}

          		
          		

          	
          	          }


function log_in(username,password ){
  $.ajax({
	    type: "POST",
	    url: 'http://www.axefree.com/shop_api/api-token-auth/', 
	    data: {"username": username , "password": password},
	    datatype: 'json' ,
	    success: function(response) {
	        window.localStorage.setItem("Authorization" , response['token']);
	         top.location.href="home.html";
	    },
	    error: function(e) {

	        alert('Error: Your email password is incorrect' + e.message);
          
	        
	    }
	});                 
	}
      	          







