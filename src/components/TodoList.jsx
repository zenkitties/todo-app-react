import React from 'react';
import Todo from './Todo'
import uuid from 'react-uuid';

const TodoList = ({todos}) => {

    const getTodos = (todo) => {
        return (
            <Todo key={uuid()} name={todo} />
        )
    }

    return (
        <div className="todo-list-container">
            <ul className="todo-ul">
                <Todo name="Making Bacon Pancakes" />
                <Todo name="Putting up Jolly X-Mas Lights" />
                <Todo name="Becoming the Matrix" />
                {todos.map(getTodos)}
            </ul>
        </div>
    )
}

export default TodoList;