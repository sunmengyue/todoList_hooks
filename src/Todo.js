import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = ({ task, id, completed, deleteItem, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            checked={completed}
            disableRipple
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => deleteItem(id)}>
              <DeleteIcon aria-label='delete' />
            </IconButton>
            <IconButton onClick={toggle}>
              <EditIcon aria-label='edit' />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
