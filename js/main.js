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
    document.getElementById('board').innerHTML = '';
}

// execution

const playButton = document.getElementById("play");


playButton.addEventListener("click", function () {
    resetBoard();
    for (let i = 1; i <= 100; i++) {
        const myElement = createElement("div", "cell", i);
        myElement.addEventListener("click", function() {
            console.log(`Cell ${i} clicked!`);
            myElement.classList.toggle("blue");
        });
        document.getElementById('board').append(myElement);
    }
});

