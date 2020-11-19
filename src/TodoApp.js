import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'walk dog', completed: false },
    { id: 2, task: 'coding', completed: false },
    { id: 3, task: 'go shopping', completed: 'true' },
  ];
  const [todos, setTodos] = useState(initialTodos);
  function addTodo(newTodoText) {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  }
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
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
