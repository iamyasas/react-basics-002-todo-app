import React from 'react';
import Item from './Item';

function Todo({ items, removeItem }) {
    return (
        <ul>
            {items.map(item => (
                <Item key={item.id} id={item.id} name={item.name} removeItem={removeItem}/>
            ))}
        </ul>
    );
}

export default Todo;