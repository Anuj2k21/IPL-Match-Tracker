// // write js code here corresponding to matches.html

// var abhiarray = JSON.parse(localStorage.getItem("schedule"))
// playabhi(abhiarray)
// abhiarray = JSON.parse(localStorage.getItem("favourites")) || []
// function playabhi(){
//     abhiarray.forEach(ele => {
//         var tr = document.createElement("tr")
// var a = document.createElement("td")
// a.innerText = ele.matchNum
// var b = document.createElement("td")
// b.innerText = ele.teamA
// var c = document.createElement("td")
// c.innerText = ele.teamB
// var d = document.createElement("td")
// d.innerText = ele.date 
// var e = document.createElement("td")
// e.innertext = ele.venue
// var f = document.createElement("td")
// f.innerText = "Favourites";
// f.style.color = "green"
// f.style.cursor = "pointer"


// function mybutton(){
//     abhiarray.push(ele)
//    // localStorage.setItem
//     (localStorage.setItem("favourites", JSON.stringify(abhiarray)))
// }
// tr.append(a,b,c,d,e,f)
// document.querySelector("tbody").append(tr)




        
//     });
// }


// //var tr = document.createElement("tr")
// //var a = document.createElement("td")
// //a.innerText
// //var b = document.createElement("td")
// //var c = document.createElement("td")
// //var d = document.createElement("td") 
// //var e = document.createElement("td")
// //var f = document.createElement("td")




// write js code here corresponding to matches.html

matchArr = JSON.parse(localStorage.getItem("schedule"));
console.log(matchArr);

displayData(matchArr);

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

function venueFilter(){

    var select =document.querySelector("#filterVenue").value 


}

function displayData(data){
    data.forEach(function(ele){
        console.log(ele)

        var tr   = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText=ele.matchNumber


        var td2 = document.createElement("td")
        td2.innerText=ele.teamTypeA


        var td3 = document.createElement("td")
        td3.innerText=ele.teamTypeB


        var td4 = document.createElement("td")
        td4.innerText=ele.scheduleDate

        var td5 = document.createElement("td")
        td5.innerText=ele.scheduleVenue


        var td6 = document.createElement("td")
        td6.innerText = "Favourites";
        td6.style.color="green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
        favouritesFunction(ele)  

        });

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr);



    });


}

    function favouritesFunction(ele){
    console.log(ele)
    favouritesArr.push(ele)
    console.log(favouritesArr)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
}









