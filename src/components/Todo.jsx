import React, {useState} from 'react';

const Todo = (props) => {
    const [done, setDone] = useState(false);

    const isChecked = () => {
        setDone(done ? false : true)
    }

    return (
        <div className='todo-item-container' id={props.id}>
            <li style={{textDecoration: done ?  'line-through' : null}} className='todo-item' name={props.name} onClick={isChecked}>{props.name}</li>
            <div className='todo-actions'></div>
        </div>
    )
}

export default Todo;