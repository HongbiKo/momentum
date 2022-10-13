"use strict";

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm > input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogin(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogin);
} else {
  paintGreeting(savedUserName);
}
