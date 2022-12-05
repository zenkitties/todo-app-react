import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({deleteTodo, ...props}) => {
    const [done, setDone] = useState(false);

    const isChecked = () => {
        setDone(done ? false : true)
    }

    const handleEdit = () => {
        console.log('ready for edit')
    }

    return (
        <div className='todo-item-container'>
            <li style={{textDecoration: done ?  'line-through' : null}} id={props.id} className='todo-item' name={props.name} onClick={isChecked}>{props.name}</li>
            <div className='todo-actions'>
                        <EditIcon className="action-button" fontSize="large" />
                        <DeleteIcon className="action-button" onClick={() =>deleteTodo(props.id)} fontSize="large" />
            </div>
        </div>
    )
}

export default Todo;