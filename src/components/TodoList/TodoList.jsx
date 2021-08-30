import React, { useState } from 'react';
import './todoList.css';
import data from './data.json';
import TodoListItems from './TodoListItem/TodoListItems';
import Context from './Context';
import CreateTodo from './CreateTodo/CreateTodo';
import { AiOutlinePlusCircle } from 'react-icons/ai'

const TodoList = () => {
    const [todoData, setTodoData] = useState(data);
    const [clickState, setclickState] = useState(true)
    const toggleTodoData = (id) => {
        setTodoData(
            todoData.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete }
                }
                return { ...todo };
            })
        )
    }
    const removeTodo = (id) => {
       setTimeout(() => {
           setTodoData(
               todoData.filter(todo => todo.id !== id)
           )
       }, 800);

    }

    const createTodo = (title) => {
        if (title !== '') {
            setTodoData(
                todoData.concat({
                    task: title,
                    id: todoData.length + 1,
                    complete: true
                })
            )
        } else {
            alert('Type something')
        }
    }

    const plusClickHandler = () => {
        setclickState(!clickState);
    }
    return (
        <Context.Provider value={{ removeTodo, createTodo, setclickState, clickState }} >
            <div className="todo-list-wrapper">
                <header className="header">
                    <h3>Todo List</h3>
                    {clickState ?
                        (<h3 className = "plus-style" onClick={plusClickHandler}><AiOutlinePlusCircle /> </h3>)
                        : (<CreateTodo />)
                    }
                </header>
                {todoData.length ? (
                    <TodoListItems
                        todoData={todoData}
                        onDataChange={toggleTodoData}
                    />
                ) : (
                    "You completed all the tasks!"
                )}
            </div>
        </Context.Provider>
    )
}

export default TodoList
