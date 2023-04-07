import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios
			.get('/api/todos')
			.then((response) => setTodos(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>Todo List</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
