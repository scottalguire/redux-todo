import 'babel-polyfill';
import { createStore } from 'redux';
import { ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER } from './actionTypes';

// Action Creators

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

function setVisibilityFilter(filter) {
    return {
        type: VISIBILITY_FILTER,
        filter
    }
}