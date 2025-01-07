function createGrid() {

    for (let i = 0; i < 256; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = i;
        document.getElementById("grid-container").appendChild(newDiv);
    }
}

createGrid();

