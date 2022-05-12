import renderBooks from "./dom.js";

export const url = "https://www.googleapis.com/books/v1/volumes?q=";

export const getSearchUrl = (searchTerm) => {
    return url + searchTerm;
};

const search = async (searchTerm) => {
    let results = "";
    // Saving API call
    const requestPromise = fetch(getSearchUrl(searchTerm));

    // Waiting for response
    const response = await requestPromise;

    // Saving JSON Object
    const responseData = await response.json();

    // Mapping over search results to get titles
    results = responseData.items.map(renderBooks);

    console.table(results);
};

export default search;
