import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)
Todo.propTypes = {
    onClick: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
    text: propTypes.string.isRequired
}

export default Todo;