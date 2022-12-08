import React, {useState, useContext} from 'react';

import { UserContext } from '../contexts/User';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import Authentication from './Authentication/Authentication'


const App = () => {
    const [todos, setTodos] = useState([{name:'Making Bacon Pancakes'},{name:'Putting up jolly X-Mas Lights'},{name:'Know Kung Fu'},{name:'Karate Chop'}])
    const [todoInput, setTodoInput] = useState('')
    const [signedIn, setSignedIn] = useState(false);
    const [signedUp, setSignedUp] = useState(true);
    const { currentUser } = useContext(UserContext);


    const addTodo =(e) => {
        e.preventDefault();

        if (!todoInput) return;

        setTodos(prevValue => {
            return [...prevValue, {name: todoInput}]
        })
        setTodoInput("")
    }

  return (
    <div className="App">
        <Header setSignedUp={setSignedUp} setSignedIn={setSignedIn} signedIn={signedIn}/>
        { currentUser ?
        <div>
            <AddTodo setTodoInput={setTodoInput} addTodo={addTodo} name='add-todo' value={todoInput}/>
            <TodoList todos={todos} setTodos={setTodos}/> 
        </div>
        :
        <Authentication signedUp={signedUp} setSignedIn={setSignedIn} />
        }
        <Footer />
    </div>
  );
}

export default App;
