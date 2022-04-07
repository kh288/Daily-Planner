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
var currentDate = moment();

$("#currentDay").text(currentDate.format("MMM Do, YYYY"));

$(".container").append("<form class='form-group'>");

$(".form-group").append("<div class='row col-12'>");

for (var i = 0; i < 9; i++) {
    $(".row").append("<p class='hour col-2'>")
    $(".row").append("<textarea class='form-control col-8'>");
    $(".row").append("<button class='saveBtn col-2'>");
    $(".saveBtn").text("Save");
}
// $(".row").append("<textarea class='form-control col-10'>");
// $(".row").append("<button class='saveBtn col-2'>");
// $(".saveBtn").text("Save");
// $(".row").append("<textarea class='form-control col-10'>");
// $(".row").append("<button class='saveBtn col-2'>");
// $(".saveBtn").text("Save");
// $("button").click(function(){
//     $("p:first").addClass("intro");
// });