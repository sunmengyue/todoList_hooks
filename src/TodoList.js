import React, { useState } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';

const TodoList = (props) => {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <div key={todo.id}>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider component='li' />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
