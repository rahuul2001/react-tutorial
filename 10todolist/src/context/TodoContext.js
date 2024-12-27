import  { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Learn React',
            completed: true
        },
        {
            id: 2,
            title: 'Learn Vite',
            completed: false
        },
        {
            id: 3,
            title: 'Build an app',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;