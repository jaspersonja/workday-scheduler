var text = document.getElementById("textarea")
// Date on header
var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text("Today is " + date)



var derTag = [
    {
        id: "0",
        hour: "9am",
        time: "9",
        text: ""
    },
    {
        id: "1",
        hour: "10am",
        time: "10",
        text: ""
    },
    {
        id: "2",
        hour: "11am",
        time: "11",
        text: ""
    },
    {
        id: "3",
        hour: "12pm",
        time: "12",
        text: ""
    },
    {
        id: "4",
        hour: "1pm",
        time: "13",
        text: ""
    },
    {
        id: "5",
        hour: "2pm",
        time: "14",
        text: ""
    },
    {
        id: "6",
        hour: "3pm",
        time: "15",
        text: ""
    },
    {
        id: "7",
        hour: "4pm",
        time: "16",
        text: ""
    },
    {
        id: "8",
        hour: "5pm",
        time: "17",
        text: ""
    },
    
]


// saves text to localStorage
function savePlan() {
    localStorage.setItem("derTag", JSON.stringify(derTag.text));
console.log(derTag)
}

//display text from localStorage
function displayPlan() {}
    
//
function init() {
    var storedDay = JSON.parse(localStorage.getItem("derTag"));

    if (storedDay) {
        derTag = storedDay;
    }

    savePlan();
    displayPlan();
}
var planText = $("<textarea>")
planText.append()

init();


// saves text to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    savePlan();
    displayPlan();
})