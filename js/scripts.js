$(document).ready(function(){
  $("button").click(function() {
    var number = prompt("Enter any number");
    $("p#output").remove();
    $("#redo").remove();
    $("button").after("<span id='redo'> (Click here to redo.)</spam>");
    $("p#button").after("<p id='output'></p>");
    for (index = 1; index <= number; index +=1) {
      if (!(index % 3) && !(index % 5)) {
        $("p#output").append("ping-pong<br>");
      } else if (!(index % 3)) {
        $("p#output").append("ping<br>");
      } else if (!(index % 5)) {
        $("p#output").append("pong<br>");
      } else {
        $("p#output").append(index + "<br>");
      }
    }
  });
});
