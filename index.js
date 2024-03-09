"use strict";
let input = document.getElementById("email");
let button = document.querySelector(".button");
let ulList = document.querySelector(".ul-li");
let allClear = document.querySelector(".clear-all");

button.addEventListener("click", function () {
  let value = input.value;

  let li = document.createElement("li");
  li.innerText = value;
  if (li.innerText == "") {
    return;
  }
  ulList.appendChild(li);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash")
  li.appendChild(deleteIcon);
  input.value = "";
  deleteIcon.addEventListener("click", function () {
    li.remove();
  });
});
allClear.addEventListener("click", function () {
  ulList.innerHTML = " ";
});

let burger = document.querySelector(".burger-bar");
burger.addEventListener("click", function () {
  burger.classList.toggle("br-bar");
  burger.style.display = "block";
});

let burgerBar = document.querySelector(".burger-bar");
let navList = document.querySelector(".ul-list");
burgerBar.addEventListener("click", function () {
  burgerBar.appendChild(navList);
  if (navList.style.display === "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
});
