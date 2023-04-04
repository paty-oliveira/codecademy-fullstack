import {API_ENDPOINT} from "./index.js";

export const addNewBook = async (newTitle, newStart, newEnd) => {
	const response = await fetch(`${API_ENDPOINT}/books`, {
		method: "POST",
		body: JSON.stringify({
			title: newTitle,
			start: newStart,
			end: newEnd
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	return await response.json();
};

export const getBooks = async () => {
	const response = await fetch(`${API_ENDPOINT}/books`);

	return await response.json();
};

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.