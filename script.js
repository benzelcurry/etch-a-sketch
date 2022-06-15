let size = 16;

// Gets size input from user
function getSize() {
    userSize = Number(prompt("Please enter your desired height & width for the grid (limit: 100)."));

    if (typeof(userSize) !== "number" || userSize < 0 || userSize > 100 || typeof(userSize) == "NaN") {
        alert("Please follow the instructions.");
    } else {
        console.log(userSize);
        return userSize;
    }
}

// Create grid
function makeGrid(size) {
    let canvas = document.querySelector("#board");
    const button = document.querySelector("#btn");

    // Sets the amount of columns and rows in the grid
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Fills the grid with squares
    for (let i = 0; i < (size ** 2); i++) {
        let squares = document.createElement("div");
        squares.classList.add("squares");
        squares.style.backgroundColor = "white";
        board.appendChild(squares);

        // Turns squares black upon cursor hover
        squares.addEventListener("mouseover", () => {
            squares.style.backgroundColor = "black";
            console.log(size);
        });
    }

    button.addEventListener("click", () => {
        getSize();
        size = userSize;
        
        // Removes children from the canvas
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }

        // Draws a new grid
        makeGrid(size);
    });

}

makeGrid(16);