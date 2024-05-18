let grid = document.getElementById("grid");
const sizeBtn = document.getElementById("sizeBtn");
const blackBtn = document.getElementById("blackBtn");
const resetBtn = document.getElementById("resetBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const sizeNotice = document.getElementById("size");
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
        button.style.backgroundColor = 'black')
    })
}
colorBoxes();

function resetBoard() {
    resetBtn.addEventListener('click', () => {
        square.forEach((button) => {
            button.style.backgroundColor = 'white';
            
        })
        console.log('The board has been reset');
    })
}
function adjustSize(){
    sizeBtn.addEventListener('click', () => {
        console.log('adjustsize button pressed');
        let newSize = parseInt(prompt('Please enter a number between 2 and 100'));
        if (newSize < 2 || newSize > 100 || newSize % 1 != 0) {
            sizeNotice.textContent = ('Please insert a whole number between 2 and 100');
            sizeNotice.style.color = 'red';
        }
        else {
            sizeNotice.textContent = `${newSize}x${newSize}`; 
            sizeNotice.style.color = 'black';
            grid.innerHTML = '';
            makeGrid(newSize);
            rainbowColor
        }
    })
}
function clearBoard() {
    row.forEach((row) => {
        row.removeChild(row)
    })
}
function rainbowColor(square) {
        return (
         square.forEach((q)=>q.addEventListener('mouseover',(e)=>{
         const red = Math.round(Math.random() * 255);
         const blue = Math.round(Math.random() * 255);
         const green = Math.round(Math.random() * 255);
         e.target.style.backgroundColor=`rgb(${red},${green},${blue})`;
         }))   
     ) 
}
function blackColor(square) {
    return (
     square.forEach((q)=>q.addEventListener('mouseover',(e)=>{
     const red = 0;
     const blue = 0;
     const green = 0;
     e.target.style.backgroundColor=`rgb(${red},${green},${blue})`;
     }))   
 ) 
}


resetBoard();
adjustSize();
blackBtn.addEventListener('click', ()=> blackColor(square));
rainbowBtn.addEventListener('click',()=>rainbowColor(square));
