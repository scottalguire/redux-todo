import 'babel-polyfill';
import { createStore } from 'redux';
import { VisibilityFilters } from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state, action) {
    if (typeof state === "undefined") {
        return initialState;
    }
    // don't handle any actions for now
    return state;
}