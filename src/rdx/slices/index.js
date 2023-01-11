import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todo.slice"

export default combineReducers({
    todos : todoSlice,
})