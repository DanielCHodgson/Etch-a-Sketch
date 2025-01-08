function createGrid(size) {

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.id = i;
        div.style.flex = `1 1 calc(100% / ${size})`;
        div.setAttribute("isFilled", "false");
        document.getElementById("grid-container").appendChild(div);
    }

}

function fillDivOnHover() {

    let divs = document.querySelectorAll("#grid-container div");

    divs.forEach(div => {
        div.addEventListener("mouseover", function () {

            let isFilled = div.getAttribute("isFilled");

            if (isFilled === "true") {
                let currentOpacity = Number(div.style.opacity);
                let newOpacity = currentOpacity + 0.1;
                div.style.opacity = String(newOpacity)
            }

            if (isFilled === "false") {
                div.style.backgroundColor = getRandomRGBColor();
                div.style.opacity = 0.1;
                div.setAttribute("isFilled", "true");
            }

        });
    });
}

function getRandomRGBColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function handleNewButtonClick() {

    let button = document.getElementById("new-button");

    button.addEventListener("click", function () {

        let input = getGridSizeFromUser();

        if (input !== undefined) {
            console.log("input: " + input);
            document.getElementById("grid-container").replaceChildren();
            createGrid(input);
            fillDivOnHover();
        }
    });
}


function getGridSizeFromUser() {

    let size = prompt("Enter the number of squares to use for the length of the grid. This value must be a number between 0 and 100.")

    if (isNaN(size) || !(size > 0 && size <= 100)) {
        alert("This value must be a number between 0 and 100.")
    } else {
        return size;
    }
}



createGrid(16, 16);
fillDivOnHover();
handleNewButtonClick();

