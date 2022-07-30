// // write js code here corresponding to index.html
// // You should add submit event on the form
// document.querySelector("form").addEventListener("submit", myform)
// var abhi = JSON.parse(localStorage.getItem("schedule")) || []
// function myform(){
//   var a = document.querySelector("#matchNum").value 
//   var b = document.querySelector("#teamA").value 
//   var c = document.querySelector("#teamB").value 
//   var d = document.querySelector("#date").value 
//   var e = document.querySelector("#venue").value 

//   var obj = {matchNum:a , teamA:b, teamB:c, date:d, venue:e}
//   abhi.push(obj)
//   localStorage.setItem("schedule", JSON.stringify(abhi))
// }

// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",matchSubmit);

var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

function matchSubmit() {
    event.preventDefault();

    var matchObj = {
       
        matchNumber: document.querySelector("#matchNum").value,
        teamTypeA: document.querySelector("#teamA").value,
        teamTypeB: document.querySelector("#teamB").value,
        scheduleDate:document.querySelector("#date").value,
        scheduleVenue:document.querySelector("#venue").value,
    };

    matchArr.push(matchObj);
    console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr));


    //nextPage

    window.location.href="matches.html"

    
}


