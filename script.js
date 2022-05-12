// Saving search term to variable
import search from "./non-dom.js";
// import renderBooks, { main } from "/dom.js";

// Creating Search Function
// const search = async (searchTerm) => {
//     let results = "";
//     // Saving API call
//     const requestPromise = fetch(getSearchUrl(searchTerm));

//     // Waiting for response
//     const response = await requestPromise;

//     // Saving JSON Object
//     const responseData = await response.json();

//     // Mapping over search results to get titles
//     results = responseData.items.map(renderBooks);

//     console.table(results);
// };

// selecting innertext of textbook
const searchButton = document.getElementById("submit");

// Adding click event when 'Search' is clicked
searchButton.addEventListener("click", (e) => {
    // Stops page from refreshing when 'search' is clicked
    e.preventDefault();

    // Storing contents of textbox
    const textbox = document.getElementById("text").value;

    // Calling Search function
    search(textbox);
});

// TASKS
// Sort out modules
// Responsiveness
// Clear all on search
