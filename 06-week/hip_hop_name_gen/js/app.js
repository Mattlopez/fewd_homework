// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var prefix = ["Cash Money", "Snoop", "Li'l", "Big", "MC", "Ol' dirty", "Dr"]

  function buttonClicked(){
    var username = $('#username').val()
    var randomNumber = Math.floor(Math.random() * prefix.length)
    var hipHopName = prefix [randomNumber] + " " + username
    $('#output').text(hipHopName)
  }

  $('#submit').click(buttonClicked)

});
