import React, {useContext} from 'react'
import { ThemeProvider} from '@mui/material/styles';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import theme from '../Theme/Theme'

import { TodosContext } from '../../contexts/Todos';



const AddTodo = (props) => {
    const {addTodo,setTodoInput} = useContext(TodosContext);

    const handleChange = event => {
      const input = event.target.value
        setTodoInput(input)
    }
    
    return (
        <div className="add-todo-container">
            <input className="add-todo-input" placeholder="Enter a todo..." onChange={handleChange} name={props.name} value={props.value}/>
            <ThemeProvider theme={theme}>
                <Fab size="medium" color="primary" className="add-todo-button" onClick={addTodo}><AddIcon /></Fab>
            </ThemeProvider>
        </div>
    )
}

export default AddTodo;