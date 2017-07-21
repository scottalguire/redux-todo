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

// Vanilla JS solution for binding DOM with state
// Switching to React in next update

document.getElementById('add-btn').addEventListener('click', function () {
    console.log('click')
    let txtBox = document.getElementById('todo-text').value;

    store.dispatch(addTodo(txtBox))

})

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
})

function createList() {
    let todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";
        for (let i = 0; i < store.getState().todos.length; i++) {
            let listItem = document.createElement("li");
            let liText = document.createTextNode(store.getState().todos[i].text)

            listItem.appendChild(liText);

            let ul = document.getElementById('todo-list');
            ul.appendChild(listItem)
        }
    }

store.subscribe(() => {
    createList()
})
//todoList.innerText = JSON.stringify(store.getState().todos.length)
createList();


unsubscribe()