import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import uuid from 'react-uuid';

function App() {
    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState('')

    const addTodo =(e) => {
        e.preventDefault();
        setTodos(prevValue => {
            return [...prevValue, todoInput];
        })
        setTodoInput("")
    }

  return (
    <div className="App">
        <Header />
        <AddTodo setTodoInput={setTodoInput} addTodo={addTodo} name='add-todo' value={todoInput}/>
        <TodoList todos={todos}/>
        <Footer />
    </div>
  );
}

export default App;
