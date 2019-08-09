let teams = document.querySelectorAll('img')
let seePlayers = document.querySelector('#players')
let table = document.querySelectorAll('td')


document.getElementById("menu").addEventListener('click', function(e){

document.getElementById("navbarSupportedContent").classList.toggle("show")

})

document.getElementById('create').addEventListener('click', function(){
  console.log("called")
  let teamName = document.getElementById('teamName').value
  let playerNames = []
  let playerImg = []
  teams.forEach(function(element) {
    if(element.classList == "selected"){
      playerImg.push(element.src)
      playerNames.push(element.parentNode.dataset.name)
    }
  })
  fetch('team', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'teamName': teamName,
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
    console.log(data)
    window.location.reload(true)
  })
})




seePlayers.addEventListener('click', function() {
  document.querySelector('#create').classList.toggle("hidden")
  let players = document.querySelectorAll('td')
  players.forEach(function(element){
    element.classList.toggle("hidden")
  });
})
let counter = 5
teams.forEach((currentClickElement,index) =>{
currentClickElement.addEventListener('click',function(e){

  console.log(counter)
  if(currentClickElement.className === "selected"){
      currentClickElement.className = "nonSelected"
      counter += 1
}
  else if(counter > 0){
    counter -= 1
  currentClickElement.className = "selected"
}
  })
})
