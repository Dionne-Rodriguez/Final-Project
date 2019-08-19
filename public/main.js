
let teams = document.querySelectorAll('img')
let seePlayers = document.querySelector('#players')
let table = document.querySelectorAll('td')

//intro to user
window.addEventListener('load',function(){
  setTimeout(function(){ document.querySelector('#slide').style.left = "0%" }, 2000);
  setTimeout(function(){ document.querySelector('#slide').style.left = "-35%" }, 4000);


})


//loading screen
function loadingScreen(){document.getElementById('loader-wrapper').style.display = 'none'}

setTimeout(loadingScreen, 1300)
let vidCounter = 2
document.getElementById("menu").addEventListener('click', function(e){
document.getElementById("navbarSupportedContent").classList.toggle("show")
vidCounter-=1
if(vidCounter == 1){
document.querySelector('#content').style.top = '323px'
}else if(vidCounter == 0){
  document.querySelector('#content').style.top = '98px'
  vidCounter = 2
}

})

document.getElementById('create').addEventListener('click', function(e){

  document.querySelector('.popUp').style.display = "block"
})


document.getElementById('done').addEventListener("click", function(e){
  e.preventDefault()
let selectedIcon = document.querySelector(".iconSelected").src
  console.log(selectedIcon);
  let teamName = document.getElementById('teamName').value
  let playerNames = []
  let playerImg = []
  teams.forEach(function(element) {
    if(element.parentNode.classList == "selected textOverImage"){
      playerImg.push(element.src)
      playerNames.push(element.parentNode.dataset.name)
    }
  })
    console.log(playerNames, playerImg);
  fetch('team', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'teamName': teamName,
      'teamIcon': selectedIcon,
      'playerOne': playerNames[0],
      'playerOneImg': playerImg[0],
      'playerTwo':playerNames[1],
      'playerTwoImg': playerImg[1],
      'playerThree': playerNames[2],
      'playerThreeImg': playerImg[2],
      'playerFour': playerNames[3],
      'playerFourImg': playerImg[3],
      'playerFive': playerNames[4],
      'playerFiveImg': playerImg[4]
    })
  }).then(data => {
    console.log("TAYE",data)
    window.location.reload(true)
  })
})




seePlayers.addEventListener('click', function() {
  document.querySelector('#create').classList.toggle("hidden")
  console.log("yhnjygtddrfghjsdfgh");
  let players = document.querySelectorAll('td')
  players.forEach(function(element){
  element.classList.toggle("hidden")
  });
})

let counter = 5
table.forEach((currentClickElement,index) => {
currentClickElement.addEventListener('click',function(e){
  if(currentClickElement.className === "selected textOverImage"){
      currentClickElement.className = "nonSelected textOverImage"
      counter += 1
}
  else if(counter > 0){
    counter -= 1
  currentClickElement.className = "selected textOverImage"
}
  })
})


let teamIcons = document.querySelectorAll(".teamIcon")

//select team icon
// teamIcons.addEventListener("click",function(e){
//   e.forEach((currentClickElement) => {
//       console.log('test');
//   })
// })
let iconCounter = 0
teamIcons.forEach(function(currentClickElement) {
  currentClickElement.addEventListener("click", function(e){
    iconCounter += 1
  if (iconCounter == 1) {
    this.classList ="iconSelected"
  }
  })
})
