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

export const deleteBook = async (id) => {
	const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
		method: "DELETE"
	});

	return response.status;
};
