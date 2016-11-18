console.log("geolocate.js ready to roll")

console.log(coords)

var x = document.getElementById("linkText");
function getLocation() {
    //Check if Geolocation is supported
    //If supported, run the getCurrentPosition() method. If not, display a message to the user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//If the getCurrentPosition() method is successful, it returns a coordinates object to the function specified in the parameter (showPosition)
//The showPosition() function outputs the Latitude and Longitude

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

var coords = ('function showPosition')

