import React from 'react';

function Item({ id, name, removeItem }) {

    return(
        <li>
            {name} <button onClick={(e) => removeItem(id, e)}>x</button>
        </li>
    );
}

export default Item;    