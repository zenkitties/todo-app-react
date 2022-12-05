import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function App() {
    const [todos, setTodos] = useState(['Making Bacon Pancakes','Putting up jolly X-Mas Lights','Become the Matrix'])
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
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer />
    </div>
  );
}

export default App;
