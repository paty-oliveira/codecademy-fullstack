export async function getTodos() {
	try {
		const res = await fetch('api/todos');
		return await res.json();

	} catch (error) {
		return { error };
	}

}

export async function createTodo(todo) {
	try {
		const res = await fetch('api/todo/create', {
			method: 'POST',
			body: todo,
		})
		return await res.json();

	} catch (error) {
		return { error };
	}

}

export async function removeTodo(id) {
	try {
		await fetch(`api/todo/${id}`, {
			method: 'DELETE',
		})
		return 'DELETED';

	} catch (error) {
		return { error };
	}

}