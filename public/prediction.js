


document.getElementById("menu").addEventListener('click', function(){
document.getElementById("navbarSupportedContent").classList.toggle("show")
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
