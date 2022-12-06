import React from 'react';
import Todo from './Todo'
import uuid from 'react-uuid';

const TodoList = ({todos, setTodos, editData}) => {

    const deleteTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((item, index) => {
                return index !== id;
            })
        })
    }


    const saveTodo = (editData) => {
        const {setInEdit, editInput, props} = editData   
        const {name, id} = props


        setTodos(prevTodos => 
            prevTodos.filter((todo, index) =>{
                if (index === id) {
                    todo.name = editInput
                }
            return prevTodos
        }));
        setInEdit(false);
    }


    const getTodos = (todo,  index) => {
        const {name} = todo;

        return (
            <Todo key={uuid()} id={index} name={name}  deleteTodo={deleteTodo} setTodos={setTodos} todos={todos} saveTodo={saveTodo}/>
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