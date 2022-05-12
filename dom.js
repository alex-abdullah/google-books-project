// Creating Main
export const main = document.createElement("main");
//Adding Class to Main
main.classList.add("main");
//Appending Main to Body
document.body.appendChild(main);

// Books rendering function
const renderBooks = (volume) => {
    // Empty Object to store book titles
    const output = {};

    // Inserting book key-value pairs into object
    output.title = volume.volumeInfo.title;
    output.authors = volume.volumeInfo.authors;
    output.description = volume.volumeInfo.description;
    output.image = volume.volumeInfo.imageLinks.thumbnail;

    // Creating Book Container
    const div = document.createElement("div");
    div.classList.add("books");
    document.body.appendChild(div);

    // Creating new img element
    const image = document.createElement("img");
    image.src = `${output.image}`;

    // Appending image to img element
    div.append(document.body.appendChild(image));

    // Create new li elements
    const createItem = (key, element) => {
        const listItem = document.createElement(element);
        listItem.appendChild(document.createTextNode(key));
        div.append(document.body.appendChild(listItem));
    };

    // Shortening descriptions
    if (output.description.length > 20) {
        output.description = `${output.description.slice(0, 50)}...`;
    }

    // Reducing displayed authors
    if (output.authors.length > 1) {
        output.authors = output.authors[0];
    }

    // Calling function
    createItem(output.title, "h3");
    createItem(output.authors, "li");
    createItem(output.description, "p");

    //Appending divs to Main
    main.append(div);

    // Returning newly filled object
    return output;
};

export default renderBooks;
