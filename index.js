let textarea = document.getElementById("textarea");
let savebtn = document.getElementById("save");
let allnotes = document.querySelector(".allnotes");
let removeall = document.querySelector(".clear");
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let Year = date.getFullYear();
let hours = date.getHours();
let minuts = date.getMinutes();
let fulldate;
console.log(date.toDateString());
console.log(date.toString());
//custome date and time
if (minuts < 10) {
  minuts = `0${minuts}`;
}
if (hours > 12 && hours <= 23) {
  hours = hours - 12;
  fulldate = `${date.toDateString()}   ${hours}:${minuts} PM`;
}

else if (hours >= 0 && hours <= 12) {
  if (hours == 0) {
    hours = 12;
    fulldate = `${date.toDateString()}   ${hours}:${minuts} AM`;
  } else {
    fulldate = `${date.toDateString()}   ${hours}:${minuts} AM`;
  }
}

console.log(hours + ":" + minuts);
// let fulldate = `${day}/${month}/${Year}       ${hours} : ${minuts}`;

// remove all notes
removeall.addEventListener("click", function () {
  let confirm = window.confirm(
    "You are about to remove all your notes,Are you sure?"
  );
  console.log(confirm);
  if (confirm) {
    localStorage.clear();
    allnotes.textContent = "";
  }
});
//set localstorag
if (
  window.localStorage.getItem("allnotes") ||
  window.localStorage.getItem("color")
) {
  allnotes.innerHTML = window.localStorage.getItem("allnotes");
  document.body.style.backgroundColor = window.localStorage.getItem("color");
}
//save a note
savebtn.addEventListener("click", function () {
  if (textarea.value != "" && textarea.value != " " && textarea.value != null) {
    let details = document.createElement("details");
    let sumary = document.createElement("summary");
    let remove = document.createElement("button");
    let trach = document.createElement("i");
    trach.className = "fa-solid fa-trash";
    let para = document.createElement("pre");
    let pre = document.createElement("pre");
    pre.append(fulldate);
    remove.className = "remove";
    remove.append("Remove");
    remove.append(trach);
    para.append(textarea.value);
    para.append(remove);
    sumary.append(pre);

    details.append(para);
    details.append(sumary);
    allnotes.append(details);
    window.localStorage.setItem("allnotes", allnotes.innerHTML);
    window.localStorage.getItem("allnotes");
    allnotes.innerHTML = window.localStorage.getItem("allnotes");
    textarea.value = "";
  }
});

// remove one note
document.addEventListener("click", function (e) {
  if (e.target.className == "remove") {
    e.target.parentElement.parentElement.remove();
    window.localStorage.setItem("allnotes", allnotes.innerHTML);
    window.localStorage.getItem("allnotes");
    allnotes.innerHTML = window.localStorage.getItem("allnotes");
  }
});
//settings div
let settingsElementi = document.querySelector(".settings .fa-gear");
let settingsDiv = document.querySelector(".settings");
let none = document.querySelector(".num1");
let black = document.querySelector(".num2");
let yellow = document.querySelector(".num3");
//heideen and display menue
settingsElementi.addEventListener("click", function () {
  settingsDiv.classList.toggle("marginleftforsettings");
});
//add colors to localstorage
none.addEventListener("click", function () {
  console.log("num1");
  window.localStorage.removeItem("color");
  window.localStorage.getItem("color");
  document.body.style.backgroundColor = window.localStorage.getItem("color");
});
black.addEventListener("click", function () {
  console.log("num2");
  window.localStorage.setItem("color", "#000");
  window.localStorage.getItem("color");
  document.body.style.backgroundColor = window.localStorage.getItem("color");
});
yellow.addEventListener("click", function () {
  console.log("num3");
  window.localStorage.setItem("color", "#ffde03");
  window.localStorage.getItem("color");
  document.body.style.backgroundColor = window.localStorage.getItem("color");
});
