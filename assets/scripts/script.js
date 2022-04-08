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
var hourTimes = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hourTextContent = ["", "", "", "", "", "", "", "", ""];

$("#currentDay").text(currentDate.format("MMM Do, YYYY"));
$(".container").append("<form class='row col-12 form-group'>");
formGroup = $(".form-group");

// generate rows
function generateBlocks() {
    // Generate rows to the number of hours we stored in our Hour Times array
    for (var i = 0; i < hourTimes.length; i++) {
        // Create each element and append
        formGroup.append("<p class='hour col-2'>");
        $("p").last().attr("id","hour" + hourTimes[i]);
        $("p").last().text(hourTimes[i]);
        // $(hourTimes[i])
        $(formGroup).append("<textarea class='form-control col-8'>");
        $(formGroup).append("<button class='saveBtn col-2'>");
        $(".saveBtn").text("Save");
    }
}

generateBlocks();



// function remove(event) {
//     var
// }
// event.currentTarget;

// $(".row").append("<p class='hour col-2'>");
// var timeVis = $("p").attr("id",hourTimes[0]);
// rowVal.attr("id",hourTimes[0]);

// .attr('id', 'taco');

// var valueThing = $("<div>").addClass("");