const fs = require('fs').promises; // Using promise-based fs
const path = require('path');

const TODO_FILE = path.join(__dirname, 'todos.json');

// Utility function to read the file
async function readTodoFile() {
	try {
		const data = await fs.readFile(TODO_FILE, 'utf8');
		return JSON.parse(data || '[]');
	} catch (error) {
		if (error.code === 'ENOENT') {
			// File doesn't exist, create it with empty array
			await fs.writeFile(TODO_FILE, '[]', 'utf8');
			return [];
		}
		throw error;
	}
}

// Utility function to write to file
async function writeTodoFile(todos) {
	await fs.writeFile(TODO_FILE, JSON.stringify(todos, null, 2), 'utf8');
}

// GET all todos
async function getAllTodos() {
	try {
		return await readTodoFile();
	} catch (error) {
		console.error('Error reading todos:', error);
		throw error;
	}
}

// GET specific todo by id
async function getTodoById(id) {
	try {
		const todos = await readTodoFile();
		const todo = todos.find((t) => t.id === id);
		if (!todo) {
			throw new Error(`Todo with id ${id} not found`);
		}
		return todo;
	} catch (error) {
		console.error(`Error getting todo ${id}:`, error);
		throw error;
	}
}

// POST new todo
async function createTodo(content) {
	try {
		const todos = await readTodoFile();
		const newTodo = {
			id: todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
			date: new Date().toISOString(),
			content,
			complete: false,
		};

		todos.push(newTodo);
		await writeTodoFile(todos);
		return newTodo;
	} catch (error) {
		console.error('Error creating todo:', error);
		throw error;
	}
}

// PUT update todo
async function updateTodo(id, updates) {
	try {
		const todos = await readTodoFile();
		const index = todos.findIndex((t) => t.id === id);

		if (index === -1) {
			throw new Error(`Todo with id ${id} not found`);
		}

		todos[index] = {
			...todos[index],
			...updates,
			id, // Prevent id from being updated
			date: updates.date || todos[index].date, // Keep original date if not updated
		};

		await writeTodoFile(todos);
		return todos[index];
	} catch (error) {
		console.error(`Error updating todo ${id}:`, error);
		throw error;
	}
}

// DELETE todo
async function deleteTodo(id) {
	try {
		const todos = await readTodoFile();
		const index = todos.findIndex((t) => t.id === id);

		if (index === -1) {
			throw new Error(`Todo with id ${id} not found`);
		}

		todos.splice(index, 1);
		await writeTodoFile(todos);
		return true;
	} catch (error) {
		console.error(`Error deleting todo ${id}:`, error);
		throw error;
	}
}

// Usage example:
async function example() {
	try {
		// Create some todos
		const todo1 = await createTodo('Buy groceries');
		const todo2 = await createTodo('Learn Node.js');
		const todo3 = await createTodo('Do laundry');
		const todo4 = await createTodo('Make pancake');
		console.log('Created todos:', todo1, todo2, todo3, todo4);

		// Get all todos
		const allTodos = await getAllTodos();
		console.log('All todos:', allTodos);

		// Get specific todo
		const specificTodo = await getTodoById(todo1.id);
		console.log('Specific todo:', specificTodo);

		// Update todo
		const updatedTodo = await updateTodo(todo1.id, {
			content: 'Buy more groceries',
			complete: true,
		});
		console.log('Updated todo:', updatedTodo);

		// Delete todo
		await deleteTodo(todo2.id);
		console.log('Deleted todo2');

		// Show final state
		const finalTodos = await getAllTodos();
		console.log('Final todos:', finalTodos);
	} catch (error) {
		console.error('Error in example:', error);
	}
}

// Run the example
example();
