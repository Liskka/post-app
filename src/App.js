import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import AppRouter from './components/AppRouter';


import './styles/app.scss';
import { AuthContext } from './context';

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  )
}

export default App;