import React, { createContext } from 'react';
import useTodoState from '../hooks/useInputState';
const defaultTodos = [
  { id: 1, task: 'feed cat', completed: false },
  { id: 2, task: 'coding', completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
