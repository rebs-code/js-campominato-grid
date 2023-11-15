"use strict";

// functions

//funzione crea elementi
function createElement(tag, className, content) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.append(content);
  return element;
}

//funzione resetta board
function resetBoard() {
  document.getElementById("board").innerHTML = "";
}

// execution

const playButton = document.getElementById("play");

playButton.addEventListener("click", function () {
  resetBoard();
  //predo il valore del select
  const inputValue = document.getElementById("difficolta").value;
  if (inputValue === "1") {
    for (let i = 1; i <= 49; i++) {
      const myElement = createElement("div", "cell-7", i);
      myElement.addEventListener("click", function () {
        console.log(`Cell ${i} clicked!`);
        myElement.classList.toggle("blue");
      });
      document.getElementById("board").append(myElement);
    }
  } else if (inputValue === "2") {
    for (let i = 1; i <= 81; i++) {
      const myElement = createElement("div", "cell-9", i);
      myElement.addEventListener("click", function () {
        console.log(`Cell ${i} clicked!`);
        myElement.classList.toggle("blue");
      });
      document.getElementById("board").append(myElement);
    }
  } else if (inputValue === "3") {
    for (let i = 1; i <= 100; i++) {
      const myElement = createElement("div", "cell-10", i);
      myElement.addEventListener("click", function () {
        console.log(`Cell ${i} clicked!`);
        myElement.classList.toggle("blue");
      });
      document.getElementById("board").append(myElement);
    }
  }
});
