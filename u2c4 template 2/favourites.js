// write js code here corresponding to favourites.html

var dataF = JSON.parse(localStorage.getItem("favourites"));

var bodyF = document.querySelector("#bodyF");
display(dataF);

function display(dataF) {
  dataF.forEach(function (elem, ind) {
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
    td6.innerText = "Delete";
    td6.style.color = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      deleteF(elem, ind);
    });

    box.append(td1, td2, td3, td4, td5, td6);
    bodyF.append(box);
  });
}

function deleteF(elem, ind) {
  dataF.splice(ind, 1);
  localStorage.setItem("favourites", JSON.stringify(dataF));
  window.location.reload();
}
