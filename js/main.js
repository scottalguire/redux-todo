import 'babel-polyfill';
import { createStore } from 'redux';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers';

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

//store.dispatch({type:'ADD_TODO', text:'Custom todo'})
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe();