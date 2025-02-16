const container = document.querySelector(".container");

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

