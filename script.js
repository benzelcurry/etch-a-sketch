// Create 16x16 grid
function makeGrid() {
    let grid = document.querySelector("#container");

    let rows = document.createElement("div");
    rows.classList.add("rows");
    rows.textContent = "Test";

    let columns = document.createElement("div");
    columns.classList.add("columns");

    for (let i = 0; i < 16; i++) {
        container.appendChild(rows.cloneNode(true));
        console.log(i);
    }
}