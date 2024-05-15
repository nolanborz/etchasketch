// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
// It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
// Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”
// Did you link your CSS stylesheet?
// Open your browser’s developer tools.
// Check if there are any errors in the JavaScript console.
// Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
// Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

// //Make 1st box
// const div = document.createElement("div");
// const containerNode = document.querySelector(".container");
// containerNode.appendChild(div);
// div.setAttribute("class", "box");

// //Make 2nd box
// const div2 = document.createElement("div");
// const containerNode2 = document.querySelector(".container");
// containerNode2.appendChild(div2);
// div2.setAttribute("class", "box");

function makeBoxes(numOfBoxes) {
    for (let i = 0; i < numOfBoxes; i++){
        let makeElement = document.createElement("div");
        let makeSelector = document.querySelector(".container");
        makeSelector.appendChild(makeElement);
        makeElement.setAttribute("class", "box");
    }
}
makeBoxes(16);





