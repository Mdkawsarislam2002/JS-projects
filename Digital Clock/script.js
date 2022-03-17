let hourDiv = document.querySelector("#hour");
let mntDiv = document.querySelector("#mnt");
let secondDiv = document.querySelector("#second");
let timeFormateDiv = document.querySelector("#timeFormate");

(function clock() {
  let dates = new Date();
  let hour = dates.getHours();
  let minute = dates.getMinutes();
  let second = dates.getSeconds();
  let timeFormate = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    timeFormate = "PM";
  }
  if (hour < 10) {
    hour = ` 0${hour}`;
  } else {
    hour;
  }
  if (minute < 10) {
    minute = ` 0${minute}`;
  } else {
    minute;
  }
  if (second < 10) {
    second = ` 0${second}`;
  } else {
    second;
  }

  hourDiv.innerHTML = hour;
  mntDiv.innerHTML = minute;
  secondDiv.innerHTML = second;
  setInterval(clock, 1000);
})();
