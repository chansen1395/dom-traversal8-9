$(document).ready(function() {

  $("div#click-one").click(function() {
    const whatToSay = "Hello!";
    alert(whatToSay);
  });

  $("div#click-two").click(function() {
    alert(whatToSay);
  });
});