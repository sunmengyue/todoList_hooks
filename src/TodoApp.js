import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todo.context';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos,
  );
  //[
  //   { id: 1, task: 'walk dog', completed: false },
  //   { id: 2, task: 'coding', completed: false },
  //   { id: 3, task: 'go shopping', completed: 'true' },
  // ];

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              deleteItem={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
