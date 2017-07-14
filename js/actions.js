import { ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER } from './actionTypes';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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
