
let edit = document.getElementsByClassName('edit')
let trash = document.getElementsByClassName("delete")

let teamOptions = document.querySelectorAll('#dropdownMenu')

// document.querySelector('#dropdownMenu').addEventListener('click', function(){
//   document.querySelector(".dropdown-menu").classList.toggle('show')
// })


teamOptions.forEach(function(currentClickElement){
  currentClickElement.addEventListener('click', function(e){
    console.log("clicked",this.nextElementSibling);
     this.nextElementSibling.classList.toggle('show')
  })
})


//edit

Array.from(edit).forEach(function(currentClickElement){
  var teamNameText = currentClickElement.parentNode.parentNode.parentNode.childNodes[1].innerText
  var newTeamName;
  currentClickElement.addEventListener('click', function(){

    var submitEdit = this.parentNode.parentNode.parentNode.childNodes[5]
    this.parentNode.parentNode.parentNode.childNodes[1].setAttribute("contenteditable", true)
    submitEdit.classList.toggle("hidden")
    submitEdit.addEventListener('click', function(e){
      newTeamName =this.parentNode.parentNode.childNodes[1].childNodes[1].innerText
      console.log("old Team", teamNameText, "new Team", newTeamName);
      console.log(teamNameText)
      fetch('userteams', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'oldTeamName': teamNameText,
          'newTeamName': newTeamName,
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    })
  })
})


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const teamName = this.parentNode.parentNode.parentNode.childNodes[1].innerText
    console.log(teamName);
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
  currentClickElement.addEventListener('click', function (e){
    var editContent = currentClickElement.getAttribute("contenteditable")
    if (editContent == "false") {
      currentClickElement.nextElementSibling.classList.toggle("hidden")
      console.log("content is editable")
    }

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
  console.log("called");
  let selectedTeam = document.getElementsByClassName("selectedTeam")
  let teamOne = selectedTeam[0].textContent
  let teamTwo = selectedTeam[1].textContent
  console.log(teamTwo);
  document.getElementById("predictionLink").href = `/prediction?teamOne=${teamOne}&teamTwo=${teamTwo}`;

})
