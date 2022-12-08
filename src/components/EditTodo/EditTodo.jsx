import React from 'react'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import CancelIcon from '@mui/icons-material/Cancel';

const EditTodo = ({ handleCancel, handleChange, saveTodo, ...props}) => {

    return (
        <div className="edit-container">
            <input id={props.id} name={props.name} className='edit-todo' value={props.value} onChange={handleChange}/>
            <div className="todo-actions">
                <DataSaverOnIcon className="action-button" fontSize="large" onClick={saveTodo} />
                <CancelIcon className="action-button" onClick={handleCancel} fontSize="large" />
            </div>
        </div>
    )
}

export default EditTodo;