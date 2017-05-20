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


function redirect_me()
{
	window.location.href="home.html"; 
}
