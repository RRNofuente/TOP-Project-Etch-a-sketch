const container = document.querySelector(".container");
const header = document.querySelector(".header");
const input = document.querySelector("input");
const enterBtn = document.querySelector("#enterBtn");
const error = document.createElement("p");


let dimension = 16;
let squareDivSize = 960 / dimension;

for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.flexBasis = `${squareDivSize}px`
        container.appendChild(squareDiv);
    }
}

const squareDivHoverListener = document.querySelectorAll(".squareDiv");

squareDivHoverListener.forEach(squareDiv => {
    squareDiv.addEventListener("mouseenter", () => {
        squareDiv.style.backgroundColor = "red";
    });
    squareDiv.addEventListener("mouseleave", () => {
        squareDiv.style.backgroundColor = "white";
    });
});

enterBtn.addEventListener("click", () => {
    error.textContent = "";
    if (input.value > 100 || input.value < 1 || input.value % Math.round(input.value) != 0) {
        error.textContent = "Must be an integer from 1 to 100. Please try again.";
        header.appendChild(error);
    }
});