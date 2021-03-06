// function switchDisplay(toHide, toDisplay) {
//     toHide.classList.remove("visible");
//     toHide.classList.add("hidden");
//     toDisplay.classList.remove("hidden");
//     toDisplay.classList.add("visible");
// }

// Just used for trying out if calling a function inside another function works (it does)
function whatIsThis(something) {
    return `This is a ${something}`;
}

// Function to t est if adding an eventListener to <img> works -> it does!
let pineTest = document.getElementById("pine-picture");
pineTest.addEventListener("click", function() {
    alert("Hey, it works!");
})

// Function to add CSS class "hidden" to an HTML-element and remove the same class if it is already there from the start, so hidden stuff is now displayed 
function switchDisplay(toHide, toDisplay) {
    toHide.classList.toggle("hidden");
    toDisplay.classList.toggle("hidden");
}

const fruitContainer = document.getElementById("fruits");
const veggieContainer = document.getElementById("veggies");
let textContainer = document.getElementById("text-here");
let finalArray = [];

const fruitButtons = document.querySelectorAll(".fruit-button")
// MUST addEventListener to each element with "forEach", adding the Listener to the variable fruitButtons as a whole doesn't work!
fruitButtons.forEach(function (element) {
    element.addEventListener("click", function() {
        // Below also works with (element.innerHTML) and (element.value) if value is specified like id/class
        console.log(whatIsThis(element.id));
        switchDisplay(fruitContainer, veggieContainer);
        finalArray.push(element.innerHTML);
        
        console.log(`finalArray is now: ${finalArray} with ${finalArray.length} elements`);
    })
})

const veggieButtons = document.querySelectorAll(".veggie-button")
veggieButtons.forEach(function (element) {
    element.addEventListener("click", function() {
        // Below also works with (element.value) if value is specified like id/class
        console.log(whatIsThis(element.innerHTML));
        switchDisplay(veggieContainer, textContainer);
        finalArray.push(element.innerHTML);

        console.log(`finalArray is now: ${finalArray} with ${finalArray.length} elements`);
        textContainer.innerHTML = `<h1>Your favorite fruit and veggie: ${finalArray}<h1>`;
    })
})

console.log(finalArray);