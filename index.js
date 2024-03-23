const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const body = document.body;

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampmIndicator = "AM";

  if (h >= 12) {
    h = h - 12;
    ampmIndicator = "PM";
  }

  // Add leading zeros if needed
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampmIndicator;

  // Update background color based on AM/PM
  if (ampmIndicator === "AM") {
    body.style.backgroundColor = "#f0f0f0"; // Change to your desired AM background color
  } else {
    body.style.backgroundColor = "#000000"; // Change to your desired PM background color
  }

  setTimeout(updateClock, 1000);
}

updateClock();
