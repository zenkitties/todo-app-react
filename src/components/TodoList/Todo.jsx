import React, {useContext, useState} from 'react';
import EditTodo from '../EditTodo/EditTodo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TodosContext } from '../../contexts/Todos';

const Todo = ({toggleDone, ...props}) => {
    const [editInput, setEditInput] = useState(props.name)
    const {editTodo, deleteTodo, setStatus, todos, saveTodo, handleCancel} = useContext(TodosContext);
    const isInEdit= todos[props.id].inEdit;

    const handleChange =(e) => {
        setEditInput(e.target.value);
    }


    return (
        <div className='todo-item-container' >
            {!isInEdit ?
            <div className='todo-container'>
                <li style={props.style} id={props.id}  className='todo-item' value={props.name} name={props.name} onClick={() => setStatus(props.id)}>{props.name}</li>
                <div className='todo-actions'>
                    <EditIcon className="action-button" fontSize="large" onClick={() => editTodo(props.id)} />
                    <DeleteIcon className="action-button" onClick={() =>deleteTodo(props.id)} fontSize="large" />
                </div>
            </div>
            :
            <EditTodo name="editTodo" value={editInput} handleChange={handleChange} saveTodo={() => saveTodo(props.id, editInput)} handleCancel={() => handleCancel(props.id)} />
            }
        </div>
    )
}

export default Todo;