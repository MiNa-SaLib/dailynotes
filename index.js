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
//custome date and time
if (minuts < 10) {
  minuts = `0${minuts}`;
}
if (hours > 12 && hours <= 23) {
  hours = hours - 12;
  fulldate = `${day}/${month}/${Year}   ${hours}:${minuts} PM`;
}

if (hours >= 0 && hours <= 12) {
  if (hours == 0) {
    hours = 12;
    fulldate = `${day}/${month}/${Year}   ${hours}:${minuts} AM`;
  } else {
    fulldate = `${day}/${month}/${Year}   ${hours}:${minuts} AM`;
  }
}

console.log(hours + ":" + minuts);
// let fulldate = `${day}/${month}/${Year}       ${hours} : ${minuts}`;

// remove all notes
removeall.addEventListener("click", function () {
  let confirm = window.confirm("You are about to remove all your notes!");
  console.log(confirm);
  if (confirm) {
    localStorage.clear();
    allnotes.textContent = "";
  }
});
//set localstorag
if (window.localStorage.getItem("allnotes")) {
  allnotes.innerHTML = window.localStorage.getItem("allnotes");
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
