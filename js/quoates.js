"use strict";

const quotes = [
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "Go ahead, make my day.",
    author: "Harry Callahan",
  },
  {
    quote: "I have always depended on the kindness of strangers.",
    author: "Blanche Dubois",
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    author: "W. E. Hickson",
  },
  {
    quote: "If you build it, they will come.",
    author: "Joe Jackson",
  },
  {
    quote:
      "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone",
  },
  {
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln	",
  },
  {
    quote: "Knowledge is power.",
    author: "Sir Francis Bacon",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
