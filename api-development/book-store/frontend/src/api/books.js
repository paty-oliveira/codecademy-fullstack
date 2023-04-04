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

export const updateBook = async (id, newTitle, newStart, newEnd) => {
	const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
		method: "PUT",
		body: JSON.stringify({
			newTitle,
			newStart,
			newEnd
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	return response.status;
};



// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.