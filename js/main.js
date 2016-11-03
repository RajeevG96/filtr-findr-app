//use jquery to select the HTML elements we're going to manipulate

var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var ListItem1 = $('#ListItem1')
var DetailsSection = $('#details')
var detailsBackButton = $('#details .back')

//tell the button to do something when we click 
homeGoButton.click(function () {
    homeSection.hide()
    resultsSection.show()
})

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
    DetailsSection.hide()
})