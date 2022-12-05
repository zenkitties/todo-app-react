import React from 'react';
import Todo from './Todo'
import uuid from 'react-uuid';

const TodoList = ({todos, setTodos}) => {

    const deleteTodo = (id) => {
        setTodos(prevTodos => {
            console.log(prevTodos)
            return prevTodos.filter((item, index) => {
                return index !== id;
            })
        })
    }

    const getTodos = (todo,  index) => {
        return (
            <Todo key={uuid()} id={index} name={todo}  deleteTodo={deleteTodo}/>
        )
    }

    return (
        <div className="todo-list-container">
            <ul className="todo-ul">
                {todos.map(getTodos)}
            </ul>
        </div>
    )
}

export default TodoList;