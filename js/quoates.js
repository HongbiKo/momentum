"use strict";

const quotes = [
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
    author: "괴테",
  },
  {
    quote:
      "나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다.",
    author: "맥아더",
  },
  {
    quote:
      "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
    author: "에디슨",
  },
  {
    quote:
      "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
    author: "맹자",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리포드",
  },
  {
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
