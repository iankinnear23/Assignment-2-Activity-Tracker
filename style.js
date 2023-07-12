//my code for photo gallery

let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  console.log("Function called!");
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}
function closeFullImg() {
  fullImgBox.style.display = "none";
}

//my code for adding functionality to the form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const display = document.getElementById("display");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const dateInput = document.getElementById("date").value;
    const minutesInput = document.getElementById("minutes").value;
    const stepsInput = document.getElementById("steps").value;

    const logEntry = document.createElement("p");
    logEntry.textContent = ` Great job, you did a total of ${stepsInput} steps in ${minutesInput} minutes.`;
    logEntry.style.fontFamily = "monospace";
    logEntry.style.color = "red";

    display.appendChild(logEntry);

    document.getElementById("date").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("steps").value = "";
  });
});

//my code for changing the color of my heading

function changeColor() {
  if (window.innerWidth > 1000)
    document.getElementById("h1-col").style.color = "#84e4a8";
}

function resetColor() {
  if (window.innerWidth > 1000)
    document.getElementById("h1-col").style.color = "";
}
function changeBackgroundColor() {
  if (window.innerWidth > 1000)
    document.getElementById("main-col").style.background =
      "url('images3/backr.jpg')";
}

function resetBackgroundColor() {
  if (window.innerWidth > 1000)
    document.getElementById("main-col").style.background = "";
}

function changeBackgroundColorGaller() {
  if (window.innerWidth > 1000)
    document.getElementById("gallery-col").style.background =
      "url('images3/backr.jpg')";
}

function resetBackgroundColorGallery() {
  if (window.innerWidth > 1000)
    document.getElementById("gallery-col").style.background = "";
}

function changeColor1() {
  if (window.innerWidth > 1000)
    document.getElementById("h1-col1").style.color = "#84e4a8";
}

function resetColor1() {
  if (window.innerWidth > 1000)
    document.getElementById("h1-col1").style.color = "";
}

//CODE FOR MY TO DO BOX

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
