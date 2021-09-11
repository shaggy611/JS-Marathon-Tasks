const board = document.querySelector("#board");
const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6', '#FFA384', '#3B9778', '#93E9BE', '#2E8BC0'];
const SQUARES_NUMBER = 221;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor();
     element.style.backgroundColor = color;
     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px black' 
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}