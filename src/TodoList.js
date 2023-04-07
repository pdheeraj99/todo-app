import React from 'react';

const TodoList = ({ todos }) => (
	<ul>
		{todos.map((todo) => (
			<li key={todo.id}>{todo.task}</li>
		))}
	</ul>
);

export default TodoList;
