
let trash = document.getElementsByClassName('fa-trash-alt')

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const teamName = this.parentNode.parentNode.childNodes[1].innerText
        fetch('teams', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'teamName': teamName
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

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


document.getElementById('prediction').addEventListener('click', function (){
  let selectedTeam = document.getElementsByClassName("selectedTeam")
  let teamOne = selectedTeam[0].innerText
  let teamTwo = selectedTeam[1].innerText
  document.getElementById("predictionLink").href = `/prediction?teamOne=${teamOne}&teamTwo=${teamTwo}`;
  // let team = document.querySelectorAll("#viewPlayer")
  // let result = []
  // const getOddIndex = index => {
  //   return index % 2 !== 0;
  // }
  // team.forEach(function(element){
  //   let players = [];
  //   if(element.classList == "selectedTeam"){
  //     players = [ ...element.childNodes ]
  //     result = players.filter((t, idx) => getOddIndex(idx));
  //       bothTeams.push(result)
  //   }
  //
  // })
  //
  //
  // getPlayerName(bothTeams)
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
