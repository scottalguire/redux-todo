import 'babel-polyfill';
import { createStore } from 'redux';
import { ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER } from './actionTypes';

// {
//     type: ADD_TODO,
//     text: 'Build my first Redux app'
// }

// {
//     type: TOGGLE_TODO,
//     index:5
// }

// {
//   type: SET_VISIBILITY_FILTER,
//   filter: SHOW_COMPLETED
// }


// Action Creator
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

dispatch(addTodo(text));