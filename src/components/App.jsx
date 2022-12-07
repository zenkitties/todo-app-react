import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import SignIn from './SignIn'

function App() {
    const [todos, setTodos] = useState([{name:'Making Bacon Pancakes'},{name:'Putting up jolly X-Mas Lights'},{name:'Know Kung Fu'},{name:'Karate Chop'}])
    const [todoInput, setTodoInput] = useState('')
    const [loggedIn, setLogin] = useState(false);
    const [isRegistered, setIsRegistered] = useState(true);

    const addTodo =(e) => {
        e.preventDefault();
        setTodos(prevValue => {
            return [...prevValue, {name: todoInput}]
        })
        setTodoInput("")
    }

  return (
    <div className="App">
        <Header setIsRegistered={setIsRegistered} setLogin={setLogin}/>
        { loggedIn ?
        <div>
            <AddTodo setTodoInput={setTodoInput} addTodo={addTodo} name='add-todo' value={todoInput}/>
            <TodoList todos={todos} setTodos={setTodos}/> 
        </div>
        :
        <SignIn isRegistered={isRegistered} />
        }
        <Footer />
    </div>
  );
}

export default App;
