document.getElementById("menu").addEventListener('click', function(){
document.getElementById("navbarSupportedContent").classList.toggle("show")
})


window.addEventListener('load', function(){
let teamOne = document.getElementById('teamOneName').innerText
let teamTwo = document.getElementById('teamTwoName').innerText
let finalScore = document.getElementById('score').innerText
let numScore = parseInt(finalScore)
numScore = Math.abs(numScore)
if (finalScore > 0) {
  document.getElementById('winner').innerHTML = teamOne
  document.getElementById('teamOne').style.backgroundColor = "green"
  document.getElementById('teamOne').style.width = "45%"
    document.getElementById('teamOne').style.height = "550px"
  document.getElementById('teamTwo').style.backgroundColor = 'red'
}else{
  document.getElementById('teamOne').style.backgroundColor = "red"
  document.getElementById('teamTwo').style.backgroundColor = 'green'
  document.getElementById('teamTwo').style.width = "45%"
    document.getElementById('teamTwo').style.height = "550px"
  document.getElementById('winner').innerHTML = teamTwo
}
document.getElementById('score').innerHTML = numScore
})






let bothTeams = []
let myTeamSelect = document.querySelectorAll('#myTeamSelect')
let counter = 2
myTeamSelect.forEach((currentClickElement,index) => {
  console.log(counter)
  currentClickElement.addEventListener('click', function (e){
    currentClickElement.nextElementSibling.classList.toggle("hidden")
 if(currentClickElement.className === "selectedTeam"){
   currentClickElement.className = "nonSelected"
   counter +=1
 }else if(counter > 0){
   counter -= 1
   currentClickElement.className = 'selectedTeam'
 }
  })
})

function loadingScreen(){
  document.getElementById('loader-wrapper').style.display = 'none'
}



setTimeout(loadingScreen, 1300)
