// GAME PLAN
// Create an object that contains all the information we need per ROW
// Object information to contain per row:
// Time: ex. 9am, 2pm
// Color: grey = past, blue = current, green = future
// Text: event text content information
// Index:
// 9am  [0]
// 10am [1]
// 11am [2]
// 12pm [3]
// 1pm  [4]
// 2pm  [5]
// 3pm  [6]
// 4pm  [7]
// 5pm  [8]

// $("button").click(function(){
//     $("p:first").addClass("intro");
// });

var currentDate = moment();
var hourTimes =         ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
var hourTextContent =   [   "",     "",     "",     "",    "",    "",    "",    "",    "",    "",    "", ""];

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
            $(".row").last().append("<button class='saveBtn col-2'>");
            $(".saveBtn").last().text("Save");
    }
}

function colorRows() {
    var currentHour = moment().format("ha");
    var curH = moment().format("h");
    // if (hourTimes.includes($(".hour" + currentHour).attr('id'))) {
    //     console.log($(".hour" + currentHour));
    // }
    console.log(curH);
    for (var i = 0; i < hourTimes.length; i++) {
        if (i < hourTimes.indexOf(currentHour)) {
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
    
    // console.log($("p")[2].attributes.[2]);
}
// formGroup = $(".form-group");

// $(formGroup).click(function(event) {
//     event.stopPropagation();
//     event.preventDefault();
//     console.log($(event.currentTarget));
// });

    // event.preventDefault();
    // event.stopPropagation();

generateBlocks();
colorRows();

// 

// formGroup.on("click", saveItem);
// $(event.currentTarget)

// var currentHour = moment().format("ha");
// console.log(hourTimes.indexOf(currentHour))


// $("hour" + currentHour).attr("class", "present");
// console.log(colorRows());


// function remove(event) {
//     var
// }
// event.currentTarget;

// $(".row").append("<p class='hour col-2'>");
// var timeVis = $("p").attr("id",hourTimes[0]);
// rowVal.attr("id",hourTimes[0]);

// .attr('id', 'taco');

// var valueThing = $("<div>").addClass("");