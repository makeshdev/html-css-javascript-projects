let hrsValue = document.querySelector("#hrs");
let secValue = document.querySelector("#sec");
let minValue = document.querySelector("#min");
let date = document.querySelector(".date");
let meridiem = document.querySelector(".meridiem");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  let time = new Date();
  meridiem.innerText = time.getHours() >= 12 ? "PM" : "AM";
  date.innerText = daysOfWeek[time.getDay()];
  hrsValue.innerText = (time.getHours() < 10 ? "0" : "") + time.getHours();
  secValue.innerText = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  minValue.innerText = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
}, 1000);
