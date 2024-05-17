let grid = document.getElementById("grid");
const sizeBtn = document.getElementById("sizeBtn");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
let square;
let size = 16;

function makeGrid(size){
    
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        //make square in new loop
        for (let u = 0; u < size; u++) {
            square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            square=document.querySelectorAll('.square');
        }
    }
}
makeGrid(16);
function colorBoxes() {
    square.forEach((button) => {
        button.addEventListener("mouseover", () =>
        button.style.backgroundColor = 'crimson')
    })
}
colorBoxes();
