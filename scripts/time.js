const todayHeader = document.getElementById("today");
const timeDiv = document.getElementById("time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function setTime() {
  let today = new Date();
  todayHeader.innerText = `Today is ${days[today.getDay()]}, ${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}.`;

  timeDiv.innerHTML = `${String(today.getHours()).padStart(
    2,
    "0"
  )}<br/>--<br/>${String(today.getMinutes()).padStart(2, "0")}`;
}
setTime();
setInterval(setTime, 1000);
