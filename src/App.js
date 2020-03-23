import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import { checkLoginStatus } from './services/checkLoginStatus.service';

function App() {
  const [status, setStatus] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function checkLoginStatusService() {
      const { logged_in } = await checkLoginStatus();
      setStatus(logged_in);
      setLoad(true);
    }

    checkLoginStatusService();
  });

  return (
    load && (
      <>
        <Router history={history}>
          <Routes logged_in={status} />
        </Router>

        <GlobalStyle />
        <ToastContainer />
      </>
    )
  );
}

export default App;
