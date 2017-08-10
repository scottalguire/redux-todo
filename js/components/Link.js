import React from 'react';
import Proptypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    if (active) {
    return <span>{children}</span>
}

return (
    <a
        href="#"
        onClick={(e) =>{
            e.preventDefault()
            onClick()
        }}>
        {children}
        </a>
    )
}

Link.Proptypes = {
    active: Proptypes.bool.isRequired,
    children: Proptypes.node.isRequired,
    onCLick: Proptypes.func.isRequired
}

export default Link