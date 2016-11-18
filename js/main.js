//use jquery to select the HTML elements we're going to manipulate

var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $ ('#results .toggle')
var homeDropdown = $ ('#home select')
var resultsOL = $('#results ol')
var ListItem1 = $('#ListItem1')
var detailsSection = $('section#details')
var detailsInfo = $('#info')
var detailsBackButton = $('#details .back')
var mapBox = $('#map')

//tell the button to do something when we click 
homeGoButton.click(function () {

    //capture the users chosen option with jQ
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)

    // filter+sort people by user selection
    var resultsList = filterAndSortList(locationList, chosenOption);
    console.log(resultsList);

    showList (resultsList, resultsOL)
    
    addMarkers(resultsList)     

    //what happens when someone clicks on a result?
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        resultsSection.hide()
        detailsSection.show()
    })

    //show results
    homeSection.hide()
    resultsSection.show()

}) 


// get user input
var selectedOption = homeDropdown.val(); 
// using jQuery val(), see http://api.jquery.com/val
console.log('You picked ' + selectedOption);

resultsBackButton.click(function () {
    homeSection.show()
    resultsSection.hide()
})

ListItem1.click(function () {
    resultsSection.hide()
    DetailsSection.show()
})

detailsBackButton.click(function () {
    resultsSection.show()
    detailsSection.hide()
})

resultsToggleButton.click(function() {
    //find out which element is currently visible map or list?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false
    
    //if its the map we want to show the list
    //if its the list we want to show the map
    
    if (isListVisible) {
        resultsOL.hide()
        mapBox.show()
        map.resize()
//        document.getElementById("toggle").innerHTML = "List"
        resultsToggleButton.text('List')
        
    }
    
    else {
        mapBox.hide()
        resultsOL.show()
//        document.getElementById("toggle").innerHTML = "Map"
        resultsToggleButton.text('Map')

        
    }
   
    
})