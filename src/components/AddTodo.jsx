import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const AddTodo = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#0277bd',
                main: '#12374C',
                dark: '#0c2635',
                contrastText: '#fff',
            },
            secondary: {
                main: '#039be5'
            }
        },
    });

    return (
        <div className="add-todo-container">
            <input className="add-todo-input" placeholder="Enter a todo..."/>
            <ThemeProvider theme={theme}>
                <Fab size="medium" color="primary" className="add-todo-button"><AddIcon /></Fab>
            </ThemeProvider>
        </div>
    )
}

export default AddTodo;