// write js code here corresponding to matches.html

var data = JSON.parse(localStorage.getItem("schedule"));

var tbody = document.querySelector("#body");

var favouriteData = JSON.parse(localStorage.getItem("favourites")) || [];

var filter = document.querySelector("#filterVenue");

display(data);

function display(data) {
  tbody.innerHTML = "";
  data.forEach(function (elem) {
    var box = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.mNumber;
    var td2 = document.createElement("td");
    td2.innerText = elem.teamA;
    var td3 = document.createElement("td");
    td3.innerText = elem.teamB;

    var td4 = document.createElement("td");
    td4.innerText = elem.date;

    var td5 = document.createElement("td");
    td5.innerText = elem.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Favourite";
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      addfav(elem);
    });

    box.append(td1, td2, td3, td4, td5, td6);
    tbody.append(box);
  });
}

//  Favourite
function addfav(elem) {
  favouriteData.push(elem);
  localStorage.setItem("favourites", JSON.stringify(favouriteData));
}

// filter

filter.addEventListener("change", changeV);

function changeV() {
  var scl = filter.value;

  var data2 = data.filter(function (elem) {
    return elem.venue == scl;
  });

  display(data2);
}
