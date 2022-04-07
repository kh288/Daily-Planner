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

$(".container").append("<form>");
$("form").addClass("form-group");

$(".form-group").append("<div>");

$(".form-group").append("<textarea>");
$("textarea").addClass("form-control");
$(".form-group").append("<button>");
$("button").addClass("saveBtn");
$(".saveBtn").text("Save");

$(".form-group").append("<textarea>");
$("textarea").addClass("form-control");
// $("button").click(function(){
//     $("p:first").addClass("intro");
// });