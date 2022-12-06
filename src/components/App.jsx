import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function App() {
    const [todos, setTodos] = useState([{name:'Making Bacon Pancakes'},{name:'Putting up jolly X-Mas Lights'},{name:'Know Kung Fu'},{name:'Karate Chop'}])
    const [todoInput, setTodoInput] = useState('')

    const addTodo =(e) => {
        e.preventDefault();
        setTodos(prevValue => {
            return [...prevValue, {name: todoInput}]
        })
        setTodoInput("")
    }

  return (
    <div className="App">
        <Header />
        <AddTodo setTodoInput={setTodoInput} addTodo={addTodo} name='add-todo' value={todoInput}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer />
    </div>
  );
}

export default App;
