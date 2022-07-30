// // write js code here corresponding to favourites.html

// array = JSON.parse(localStorage.getItem("favourites"))
// play(array)
// function play(){
//     array.forEach(ele => {
//         var tr = document.createElement("tr")
// var a = document.createElement("td")
// a.innerText = ele.matchNum;
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
//     array.push(ele)
//     localStorage.setItem("favourites", JSON.stringify(array))
// }
// tr.append(a,b,c,d,e,f)
// document.querySelector("tbody").append(tr)



        
//     });
// }

// write js code here corresponding to favourites.html

var favourite =JSON.parse(localStorage.getItem("favourites"));

displayData(favourite);

function displayData(data){
  
    data.forEach(function(ele, index){

        
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText=ele.matchNumber;


        var td2 = document.createElement("td");
        td2.innerText=ele.teamTypeA;


        var td3 = document.createElement("td");
        td3.innerText=ele.teamTypeB;


        var td4 = document.createElement("td");
        td4.innerText=ele.scheduleDate;

        var td5 = document.createElement("td");
        td5.innerText=ele.scheduleVenue;


        var td6 = document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";
        td6.setAttribute("class","deleteText");
        td6.addEventListener("click",function(){
            deleteItem(ele, index);
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);



    });


}

function  deleteItem(ele, index){
favourite.splice(index, 1);
localStorage.setItem("favourites", JSON.stringify(favourite));
window.location.reload();

}