import React from 'react';
import Loader from './components/Loader';
import routes from './routes/routes';
import Router from './routes/authorizer';
import useAuth from './hooks/useAuth';
import { Switch } from 'react-router-dom';
import {Suspense} from 'react';

function App() {
  const user = useAuth();
  const router = new Router(user, routes);

  return (
    <Suspense fallback={<Loader />}>
    <Switch>
        {router.getRoutes()}
    </Switch>
    </Suspense>
  );
}

export default App;
