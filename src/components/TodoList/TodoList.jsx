import React, {useContext} from 'react';
import Todo from './Todo'
import uuid from 'react-uuid';

import { TodosContext } from '../../contexts/Todos';

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    const getTodos = (todo, index) => {
        const {name, isDone} = todo;

        return (
            <Todo style={{textDecoration: isDone ?  'line-through' : null}} key={uuid()} id={index} name={name}/>
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