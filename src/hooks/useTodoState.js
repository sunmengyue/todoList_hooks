import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: (idToRemove) => {
      const newTodos = todos.filter((todo) => todo.id !== idToRemove);
      setTodos(newTodos);
    },
    toggleTodo: (idToToggle) => {
      const newTodos = todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    },
    editTodo: (id, newTask) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(newTodos);
    },
  };
};
