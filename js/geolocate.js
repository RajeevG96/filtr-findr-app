console.log("geolocate.js ready to roll")

if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
}
 
//showPosition is a callback function which will be called at somepoint in the future when we have data

var userMarker = null //here is where we will store the marker for our user

function showPosition(position){
    console.log(position)
    
    var latitude = position.coords.latitude
    var longitude = position.coords.latitude
    
    //create new mapbox coords object
    var coordinates = new mapboxgl.LngLat( longitude, latitude)
    //create marker
    
if (!userMarker)
{
    //create div element from marker
    var div = document.createElement('div')
    //add class called marker to div
    div.className = 'marker user'
    //create custom marker
    userMarker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map

    } else //just update coordinates {
        userMarker.setLngLat(coordinates)
    }
    


