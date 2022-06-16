let size = 16;
let colorStatus = false;
const button = document.querySelector("#btn");
const colors = document.querySelector('#colors');

button.addEventListener("click", () => {
    // Removes children from the canvas
   while (board.firstChild) {
       board.removeChild(board.lastChild);
   }
   
   getSize();
});

colors.addEventListener("click", () => {
    if (colorStatus == false) {
        colorStatus = true;
    } else {
        colorStatus = false;
    }
});

// Gets size input from user
function getSize() {
    userSize = Number(prompt("Please enter your desired height & width for the grid (limit: 100)."));

    if (typeof(userSize) !== "number" || userSize < 0 || userSize > 100) {
        alert("Please follow the instructions.");
    } else {
        makeGrid(userSize);
    }
}

// Create grid
function makeGrid(size) {
    let canvas = document.querySelector("#board");
 
    // Sets the amount of columns and rows in the grid
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Fills the grid with squares
    for (let i = 0; i < (size ** 2); i++) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let squares = document.createElement("div");
        squares.style.backgroundColor = "white";
        board.appendChild(squares);
        
        // Set color of squares upon hovering with cursor
        squares.addEventListener("mouseover", () => {
            if (colorStatus == false) {
                squares.style.backgroundColor = "black";
            } else {
                squares.style.backgroundColor = `#${randomColor}`;
            }
        });
    }       
}

makeGrid(size);