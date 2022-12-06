import React, {useState} from 'react';
import EditTodo from './EditTodo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({deleteTodo, todos, setTodos, saveTodo, ...props}) => {
    const [done, setDone] = useState(false);
    const [inEdit, setInEdit] = useState(false);
    const [editInput, setEditInput] = useState(props.name)

    const editData = {setInEdit, editInput, props}


    const isChecked = () => {
        setDone(done ? false : true)
    }

    const handleChange =(e) => {
        setEditInput(e.target.value);
    }

    const editTodo = () => {
        setInEdit(true);
    }

    const handleCancel = (e) => {
        setInEdit(false);
    }

    // const saveTodo = (props) => {
    //     const prevTodos = todos;       
    //     const {name, id} = props

    //     prevTodos.filter((todo, index) =>{
    //         if (index === id) {
    //             todo.name = editInput
    //             return todo.name
    //         }
    //         return prevTodos
    //     });

    //     setTodos(prevTodos);
    //     setInEdit(false);
    // }

    return (
        <div className='todo-item-container' >
            {!inEdit &&
            <div className='todo-container'>
                <li style={{textDecoration: done ?  'line-through' : null}} id={props.id}  className='todo-item' name={props.name} onClick={isChecked}>{props.name}</li>
                <div className='todo-actions'>
                    <EditIcon className="action-button" fontSize="large" onClick={editTodo} />
                    <DeleteIcon className="action-button" onClick={() =>deleteTodo(props.id)} fontSize="large" />
                </div>
            </div>}
            {inEdit && <EditTodo name="editTodo" value={editInput} handleCancel={handleCancel} handleChange={handleChange} editInput={editInput} saveTodo={() => saveTodo(editData)}  />}
        </div>
    )
}

export default Todo;