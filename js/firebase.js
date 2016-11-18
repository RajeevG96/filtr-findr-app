console.log("firebase.js ready to roll")

//connect to the firebase DB

// Initialize Firebase

var config = {
    apiKey: "AIzaSyAotxZMr0ayTV0QDe2squTZxuQSAKUwDDk",
    databaseURL: "https://locationsapp-df31c.firebaseio.com",
};

firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//this specifies only the 'location' part of the database
var locationDatabase = database.ref('location');

//load all the children of "people"
//keep listening for new children

locationDatabase.on('child_added', function (childData) {
    //run these instructions for each child e.g. each location within location db
    console.log(childData.val());
    var location = childData.val(); //extract data about the location
    locationList.push(location); //add location to people list
});

//variable to store list of people

var locationList = []; //currently empty