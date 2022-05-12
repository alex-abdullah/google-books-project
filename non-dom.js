export const url = "https://www.googleapis.com/books/v1/volumes?q=";

export const getSearchUrl = (searchTerm) => {
    return url + searchTerm;
};
