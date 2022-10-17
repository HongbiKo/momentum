"use strict";

const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

const img = document.createElement("img");
img.src = `img/${todayImg}`;
document.body.appendChild(img);
