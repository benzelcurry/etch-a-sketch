// Create 16x16 grid
function makeGrid(size) {
    let canvas = document.querySelector("#board");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let rows = document.createElement("div");
    rows.classList.add("rows");
    rows.style.backgroundColor = "cyan";
    rows.textContent = "Test";

    let columns = document.createElement("div");
    columns.classList.add("columns");

    for (let i = 0; i < 256; i++) {
        board.appendChild(rows.cloneNode(true));
    }
}

makeGrid(16);