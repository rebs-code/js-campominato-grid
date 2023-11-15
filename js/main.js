"use strict";

// functions
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

// execution

const playButton = document.getElementById("play");


playButton.addEventListener("click", function () {
    
    for (let i = 1; i <= 100; i++) {
        const myElement = createElement("div", "cell", i);
        document.getElementById('board').append(myElement);
    }
});

