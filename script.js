// Test
console.log("Hi");

// Creating Main
const main = document.createElement("main");

//Appending Main to Body
document.body.appendChild(main);

//Adding Class to Main
main.classList.add("main");

// Saving search term to variable
const url = "https://www.googleapis.com/books/v1/volumes?q=";

const getSearchUrl = (searchTerm) => {
    return url + searchTerm;
};

// Creating Search Function
const search = async (searchTerm) => {
    // Saving API call
    const requestPromise = fetch(getSearchUrl(searchTerm));

    // Waiting for response
    const response = await requestPromise;

    // Saving JSON Object
    const responseData = await response.json();
    console.log(responseData);

    // Mapping over search results to get titles
    const results = responseData.items.map((volume) => {
        // Empty Object to store book titles
        const output = {};

        // Inserting book key-value pairs into object
        output.title = volume.volumeInfo.title;
        output.authors = volume.volumeInfo.authors;
        output.description = volume.volumeInfo.description;
        output.publishedDate = volume.volumeInfo.publishedDate;
        output.image = volume.volumeInfo.imageLinks.thumbnail;

        // Creating Book Container

        const container = document.createElement("div");
        container.classList.add("books");
        document.body.appendChild(container);

        // Creating new img element
        const image = document.createElement("img");

        // Appending image to img element
        image.src = `${output.image}`;

        // Create new li elements
        const listItem1 = document.createElement("li");
        listItem1.appendChild(document.createTextNode(output.authors));
        const listItem2 = document.createElement("li");
        listItem2.appendChild(document.createTextNode(output.title));
        const listItem3 = document.createElement("li");
        listItem3.appendChild(document.createTextNode(output.description));

        // Appending li elements to container
        container.append(document.body.appendChild(image));
        container.append(document.body.appendChild(listItem1));
        container.append(document.body.appendChild(listItem2));
        // container.append(document.body.appendChild(listItem3));

        //Appending containers to Main
        main.append(container);

        // Returning newly filled object

        return output;
    });

    console.table(results);
};

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
