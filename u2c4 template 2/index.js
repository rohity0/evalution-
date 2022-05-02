// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("#masaiForm");

var scheduleData = JSON.parse(localStorage.getItem("schedule")) || [];

form.addEventListener("submit", eventSchedule);

function eventSchedule(event) {
  event.preventDefault();
  var obj = {
    mNumber: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue: masaiForm.venue.value,
  };
  scheduleData.push(obj);
  localStorage.setItem("schedule", JSON.stringify(scheduleData));
  window.location.href = "matches.html";
}
