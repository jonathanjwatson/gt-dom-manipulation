console.log("Hello from the script file");

// DOM - Document Object Model
// This takes HTML elements, and make them accessible in JS
document.getElementById("home-heading").textContent = "banana";
document.getElementById("home-heading").style = "color: blue";

// Assign the DOM element to a variable so we can use it later.
var homeHeadingEl = document.getElementById("home-heading");
// var homeHeading2 = document.querySelector("#home-heading");

// console.log(homeHeadingEl);
// console.log(homeHeading2);

homeHeadingEl.textContent = "This is my new heading.";
homeHeadingEl.style = "color: magenta";

// Add a completely new section

// // 1. Create an element
// var newSection = document.createElement("div");
// // 2. Add content to element
// newSection.setAttribute("class", "container");
// // 3.  Append to existing element
// document.body.append(newSection);

// 1. Create an element
var newContainer = document.createElement("div");
// 2. Add content
newContainer.setAttribute("class", "container");
    // 1a. Create another element
    var newRow = document.createElement("div");
    // 2a. Add content
    newRow.setAttribute("class", "row");
        // 1b. Create another element
        var newHeading = document.createElement("h3");
        // 2b. Add content
        newHeading.textContent = "This should be styled nicer.";
        // 3b. Append to existing element.
        newRow.append(newHeading);
    // 3a. Append to existing element
    newContainer.append(newRow);
// 3. Add to existing element.
document.body.append(newContainer);


// WHEN to use DOM Manipulation
// Not an exhaustive list

// 1. When we need to dynamically generate elements on the page.

var arrayOfNames = ["Bob", "Nancy", "El", "Hopper"];

// a. Especially helpful inside loops.
for (var i = 0; i < arrayOfNames.length; i++){
    // 1. Create an element
var newContainer = document.createElement("div");
// 2. Add content
newContainer.setAttribute("class", "container");
    // 1a. Create another element
    var newRow = document.createElement("div");
    // 2a. Add content
    newRow.setAttribute("class", "row");
        // 1b. Create another element
        var newHeading = document.createElement("h3");
        // 2b. Add content
        newHeading.textContent = arrayOfNames[i];
        // 3b. Append to existing element.
        newRow.append(newHeading);
    // 3a. Append to existing element
    newContainer.append(newRow);
// 3. Add to existing element.
document.body.append(newContainer);
}

// 2. In response to a user's input. 
// Event Listening