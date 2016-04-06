  $(document).ready(function() {

    alert("It's working")

    var prefix = ["Results unclear", "Signs point to yes!", "Ask again later", "Yes", "No", "Hell No","Maybe"]

    function buttonClicked(){
      var randomNumber = Math.floor(Math.random() * prefix.length)
      var result = prefix [randomNumber]
      $('#output').text(result)
      console.log("result")
    }

    $('#shakeMe').click(buttonClicked)

  });
