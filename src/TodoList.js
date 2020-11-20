import React, { useState } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const TodoList = ({ todos, deleteItem, toggleTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              deleteItem={deleteItem}
              toggleTodo={toggleTodo}
            />
            <Divider component='li' />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
