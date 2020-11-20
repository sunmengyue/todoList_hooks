import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'walk dog', completed: false },
    { id: 2, task: 'coding', completed: false },
    { id: 3, task: 'go shopping', completed: 'true' },
  ];
  const [todos, setTodos] = useState(initialTodos);
  function addTodo(newTodoText) {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  }

  const removeTodo = (idToRemove) => {
    const newTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(newTodos);
  };

  const toggleTodo = (idToToggle) => {
    const newTodos = todos.map((todo) =>
      todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id, newTask) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Paper
      style={{ margin: 0, padding: 0, height: '100vh', background: '#fafafa' }}
      elevation={0}
    >
      <AppBar position='static' color='primary' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS with HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteItem={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
