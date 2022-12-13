import { createContext, useState } from 'react'

//import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

import TODO_DATA from '../todo-data.json'


// as the actual value you want to access
export const TodosContext = createContext({
    todos: [],
    setTodos: () => null,
    todoInput: '',
    setTodoInput: () => null,
});

export const TodosProvider = ({ children }) =>{
    const [todos, setTodos] = useState(TODO_DATA);
    const [todoInput, setTodoInput] = useState('');

    // add functionality
    const addTodo =(e) => {
        e.preventDefault();

        if (!todoInput) return;

        setTodos((prevValue) => {
            return [...prevValue, {
                "id":  prevValue.length,
                "name": todoInput,
                "isDone": false,
                "inEdit": false
            }]
        })
        setTodoInput("")
    };

    //edit functionality
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, "inEdit": true } : todo))
        console.log(todos)
    }

     //cancel edited functionality
     const handleCancel = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, "inEdit": false} : todo))
    }

    // save functionality
    const saveTodo = (id, name) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, "name": name, "inEdit": false}: todo))
    }


    // delete functionality
    const deleteTodo = (id) => {
        console.log(id)
        setTodos(prevTodos => {
            return prevTodos.filter((item, index) => {
                return index !== id;
            })
        })
    }

    const setStatus = (id, status) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, "isDone": !status} : todo))
    }

    const value = {todos, setTodos, todoInput, setTodoInput, addTodo, saveTodo, editTodo, handleCancel, deleteTodo, setStatus};
    
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}