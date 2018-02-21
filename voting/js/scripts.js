$(document).ready(function() {
  debugger;
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voting').show();
  } else if (age === 18) {
    alert("Congrats on becoming an adult!");
    $('#voting').show();
  } else {
    $('#under-18').show();
  }
});
