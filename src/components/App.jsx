import React, {useState, useContext} from 'react';

import { UserContext } from '../contexts/User';
import { TodosContext } from '../contexts/Todos';

import { signOutUser } from '../utils/firebase/firebase.utils';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import Authentication from './Authentication/Authentication'




const App = () => {
    const {todoInput, setTodoInput} = useContext(TodosContext);
    const [signedIn, setSignedIn] = useState(false);
    const [signedUp, setSignedUp] = useState(true);
    const { currentUser } = useContext(UserContext);

  return (
    <div className="App">
        <Header setSignedUp={setSignedUp} setSignedIn={setSignedIn} signedIn={signedIn} signOutUser={signOutUser}/>
        { currentUser ?
        <div>
            <AddTodo setTodoInput={setTodoInput} name='add-todo' value={todoInput}/>
            <TodoList/> 
        </div>
        :
        <Authentication signedUp={signedUp} setSignedIn={setSignedIn} />
        }
        <Footer />
    </div>
  );
}

export default App;
