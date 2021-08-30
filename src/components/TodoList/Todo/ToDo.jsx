import React, { useContext } from 'react'
import Context from '../Context';
import './todo.css';

const ToDo = (props) => {
    const { todo, onInputChange } = props;
    const {removeTodo} = useContext(Context);
    return (
        <div className="todo-item-wrapper">
            <ul className="todo-list">
                <li className={`todo-item ${todo.complete ? '' : 'completed'}`} >
                    <label htmlFor="name" className="form-label">
                        <input
                            className="todo-check-input"
                            type="checkbox" name="todo-check"
                            id=""
                            onChange={() => { onInputChange(todo.id); removeTodo(todo.id) }}
                            checked={!todo.complete} />
                        {todo.task}
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default ToDo
