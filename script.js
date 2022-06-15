

// Create 16x16 grid
function makeGrid(size) {
    let canvas = document.querySelector("#board");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++) {
        let squares = document.createElement("div");
        squares.classList.add("squares");
        squares.style.backgroundColor = "cyan";
        squares.textContent = "x";
        board.appendChild(squares);

        // Turns squares black upon cursor hover
        squares.addEventListener("mouseover", () => {
            squares.style.backgroundColor = "black";
        });
    }
}

makeGrid(16);