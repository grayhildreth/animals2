$(document).ready(function() {
  var animal = prompt("Do you want to learn about snakes, turtles, or frogs?");


  if (animal === "snakes") {
    $("#snakes").show();
  } else if (animal === "turtles") {
    $("#turtles").show();
  } else if (animal === "frogs") {
    $("#frogs").show();
  } else {
    alert ("Please choose one of the three options.");
  }
});
