import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { UserProvider } from './contexts/User';
import { TodosProvider } from './contexts/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <TodosProvider>
            <App />
      </TodosProvider>
    </UserProvider>
  </React.StrictMode>
);
