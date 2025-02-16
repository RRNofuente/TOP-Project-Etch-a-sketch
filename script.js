const container = document.querySelector(".container");
const header = document.querySelector(".header");
const input = document.querySelector("input");
const enterBtn = document.querySelector("#enterBtn");
const error = document.createElement("p");


let dimension = 16;
let squareDivSize = 960 / dimension;

createGrid(dimension, squareDivSize);

function createGrid(dimension, squareDivSize) {
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            squareDiv.id = `${(i*dimension)+(j+1)}`
            squareDiv.style.flexBasis = `${squareDivSize}px`
            squareDiv.style.height = "auto";
            container.appendChild(squareDiv);
        }
    }    
}

gridHover(dimension);

function gridHover(dimension) {
    const squareDivHoverListener = document.querySelectorAll(".squareDiv");
    let count = 10;
    const countArray = {};
    const totalSquare = dimension * dimension;
    for (let i = 0; i <= totalSquare; i++) {
        countArray[i] = count;
    }
    squareDivHoverListener.forEach(squareDiv => {
        squareDiv.addEventListener("mouseenter", (event) => {
            let target = event.target;
            target.textContent = countArray[target.id];

            let currentCount = countArray[target.id];
            currentCount -= 1;
            countArray[target.id] = currentCount;

            squareDiv.style.backgroundColor = "red";
        });
        squareDiv.addEventListener("mouseleave", () => {
            squareDiv.style.backgroundColor = "white";
        });
    });
}


enterBtn.addEventListener("click", () => {
    error.textContent = "";
    if (input.value > 100 || input.value < 1 || input.value % Math.round(input.value) != 0) {
        error.textContent = "Must be an integer from 1 to 100. Please try again.";
        header.appendChild(error);
    } else {

        const removeGrid = document.querySelectorAll(".squareDiv");

        removeGrid.forEach((squareDiv) => {
            container.removeChild(squareDiv);
        });

        dimension = input.value;
        squareDivSize = Math.floor(960 / dimension);
        input.value = "";
        input.focus();
        createGrid(dimension, squareDivSize);

        gridHover(dimension);
    }
});