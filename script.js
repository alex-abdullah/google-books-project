// Saving search term to variable
import search from "./non-dom.js";

// selecting innertext of textbook
const searchButton = document.getElementById("submit");

// Function to clear previous search items
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Adding click event when 'Search' is clicked
searchButton.addEventListener("click", (e) => {
    // Stops page from refreshing when 'search' is clicked
    e.preventDefault();

    // Storing contents of textbox
    let textbox = document.getElementById("text").value;

    // Calling clear function
    removeAllChildNodes(document.querySelector("main"));

    // Calling Search function
    search(textbox);
});

// TASKS
// Responsiveness
