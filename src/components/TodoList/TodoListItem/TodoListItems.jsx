import React from 'react';
import ToDo from '../Todo/ToDo';

const TodoListItems = (props) => {
    const {todoData, onDataChange} = props;
    return (
        <>
            {todoData.map((todo, index) => {
                return (
                    <ToDo key={index} todo={todo} onInputChange={onDataChange} />
                )
            })}
        </>
    )
}

export default TodoListItems
