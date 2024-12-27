import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World", completed: false}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload, completed: false})
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.text = action.payload.text
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer