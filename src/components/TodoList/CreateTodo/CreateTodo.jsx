import React, { useContext, useState } from 'react';
import Context from '../Context';

const CreateTodo = () => {
    const { createTodo , setclickState, clickState} = useContext(Context);
    const [inputValue, setInputValue] = useState('');
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        createTodo(inputValue);
        setclickState(!clickState)
        setInputValue('')

    }
    return (
        <form className="todo-form d-flex align-items-center" onSubmit={submitHandler} >
            <input
                type="text"
                name=""
                id=""
                className="form-control"
                value={inputValue}
                onChange={handleInputValue}
                placeholder="Type your task here ..." />
            <button type="submit" className="btn btn-success ms-1" >Create</button>
        </form>
    )
}

export default CreateTodo;