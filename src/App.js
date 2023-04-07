import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	function handleAddTodo() {
		const newTodo = window.prompt('Enter a task for your new todo:');
		if (newTodo) {
			setTodos([...todos, { id: Date.now(), task: newTodo }]);
		}
	}

	return (
		<div>
			<h1>Todo List</h1>
			<button onClick={handleAddTodo}>Add Todo</button>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
