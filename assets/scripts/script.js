var currentDate = moment();
var hourTimes =         ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hourTextContent =   [   "",     "",     "",     "",    "",    "",    "",    "",    ""];

$("#currentDay").text(currentDate.format("MMM Do, YYYY"));
// $(".container").append("<div class='row col-12 form-group'>");
// formGroup = $(".container");

// generate rows
function generateBlocks() {
    // Generate rows to the number of hours we stored in our Hour Times array
    for (var i = 0; i < hourTimes.length; i++) {
        $(".container").append($("<div class='row col-12 form-group'></div>"));
            $(".row").last().append("<p class='hour col-2'>");
            $(".hour").last().text(hourTimes[i]);
            $(".row").last().append("<textarea id='hour"+hourTimes[i]+"'class='form-control col-8'>");
            $(".row").last().append("<button id='"+i+"'class='saveBtn col-2'>");
            $(".saveBtn").last().text("Save");
    }
}
// color coat the rows appropriate for the time
function colorRows() {
    var currentHour = moment().format("ha");
    console.log(hourTimes.indexOf(currentHour));
    // var curH = moment().format("h");

    for (var i = 0; i < hourTimes.length; i++) {
        if (i < hourTimes.indexOf(currentHour) || -1) {
            // past
            console.log("COLOR FOR PAST ADDED " + i);
            $("#hour" + hourTimes[i]).addClass("past");
        } else if (i === hourTimes.indexOf(currentHour)) {
            console.log("COLOR FOR PRESENT ADDED " + i);
            $("#hour" + currentHour).addClass("present");
        } else {
            console.log("COLOR FOR FUTURE ADDED " + i);
            $("#hour" + hourTimes[i]).addClass("future");
        }
    }
}
// Checks local storage to see if there's anything that needs to be loaded first
function checkLocalStore() {
    for(var i = 0; i < hourTimes.length; i++) {
        $("#hour"+hourTimes[i]).append(localStorage.getItem(i));
    }
}

// Run the functions
generateBlocks();
colorRows();
checkLocalStore();


// on save click, save information to local storage
$(".saveBtn").click(function(event) { 
    event.stopPropagation();
    event.preventDefault();
    // get the id of the button pressed and store it in this value
    var saveButton = $(this).attr("id");
    
    hourTextContent[saveButton] = $("#hour"+hourTimes[saveButton]).val();
    localStorage.setItem(saveButton, hourTextContent[saveButton]);

    console.log(saveButton);
    console.log(hourTextContent[saveButton]);
});