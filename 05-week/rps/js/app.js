// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  var computerWeapon = "rock"

  function choseRock(){
    console.log("You chose rock")
    if(computerWeapon == "rock"){
      alert("It's a tie!")
    } else if(computerWeapon == "scissors"){
      alert("You Win!!!")
    } else if(computerWeapon == "paper"){
      alert("You Lost :(")
    } else {
      alert("Oops, something went wrong. It's not a win or lost")
    }
  }

  function chosepaper(){
    console.log("You chose paper")
    if(computerWeapon == "paper"){
      alert("It's a tie!")
    } else if (computerWeapon == "scissors"){
      alert("You Lost :(")
    } else if (computerWeapon == "rock"){
      alert("You Win!!!")
    } else {
      alert("Oops, something went wrong. It's not a win or lost")
    }
  }

  function choseScissors(){
    console.log("You chose scissors")
    if(computerWeapon == "scissors"){
      alert("It's a tie!")
    } else if (computerWeapon == "rock"){
      alert("You Lost :(")
    } else if (computerWeapon == "paper"){
      alert("You Win!!!")
    } else {
      alert("Oops, something went wrong. It's not a win or lost")
    }
  }

  $("#rock").click(choseRock)
  $("#paper").click(chosepaper)
  $("#scissors").click(choseScissors)

});
