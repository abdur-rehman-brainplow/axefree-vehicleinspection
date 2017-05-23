
$(document).ready(function(){
	//token_verify();
})




    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }




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


