import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos: [],
    },
    reducers : {
        setTodo : (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodo: (state, action) => {
            const copyTodos = state.todos;
            const findIndex = copyTodos.findIndex((val) => val.id == action.payload);
            findIndex > -1 && copyTodos.splice(findIndex, 1);
            state.todos = copyTodos;
        }
    }
})

const {actions, reducer} = todoSlice;

export const {setTodo, removeTodo} = actions;

export default reducer;