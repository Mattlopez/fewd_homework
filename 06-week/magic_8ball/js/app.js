  $(document).ready(function() {

    var prefix = ["Results unclear", "Signs point to yes!", "Ask again later", "Yes", "No", "Hell No","Maybe"]

    function buttonClicked(){
      var randomNumber = Math.floor(Math.random() * prefix.length)
      var result = prefix [randomNumber]
      $('#output').text(result)
      console.log()

      if(result == "Results unclear"){
        $('body').attr("class","red")
      }
      else if(result == "Yes"){
        $('body').attr("class","green")
      }
      else if(result == "No"){
        $('body').attr("class","red")
      }
      else if(result == "Hell No"){
        $('body').attr("class","red")
      }
      else if(result == "Maybe"){
        $('body').attr("class","blue")
      }
      else if(reslt == "Signs point to yes!"){
        $('body').attr("class","green")
      }
      else if(result == "Ask again later"){
        $('body').attr("class","black")
      }



    }

    $('#shakeMe').click(buttonClicked)

  });
