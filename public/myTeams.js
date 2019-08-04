



document.getElementById("menu").addEventListener('click', function(){
  console.log("called")
document.getElementById("navbarSupportedContent").classList.toggle("show")
})



let bothTeams = []
let myTeamSelect = document.querySelectorAll('#myTeamSelect')
// console.log(myTeamSelect)

myTeamSelect.forEach((currentClickElement,index) => {
  currentClickElement.addEventListener('click', function (e){

    currentClickElement.nextElementSibling.classList.toggle("hidden")
    let predictTeams = currentClickElement.nextElementSibling.className = "selectedTeam"
  })

})

document.getElementById('prediction').addEventListener('click', function (){
  let team = document.querySelectorAll("#viewPlayer")
  let result = []
  const getOddIndex = index => {
    return index % 2 !== 0;
  }
  team.forEach(function(element){
    let players = [];
    if(element.classList == "selectedTeam"){
      players = [ ...element.childNodes ]
      result = players.filter((t, idx) => getOddIndex(idx));
        bothTeams.push(result)
    }

  })


  getPlayerName(bothTeams)
  // console.log(teamOne[0][1].innerText)
  // console.log(teamOne[1][1].innerText)
  // console.log(teamTwo)
})
//loop through playerNames
//push to an Array
//only want player names with selected class

//
function getPlayerName (filterPlayerName){
let teamOne = []
let teamTwo = []
filterPlayerName[0].forEach(function(e){
  teamOne.push(e.innerText)
  })
  filterPlayerName[1].forEach(function(e){
    teamTwo.push(e.innerText)
  })
  azureStub(teamOne,teamTwo)
}


function azureStub(teamOne, teamTwo) {
  return 1;
}
