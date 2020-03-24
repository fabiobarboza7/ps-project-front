import React, { useReducer } from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Root from '../pages/Root';
import { Store } from '../store';
import modules from '../store/modules';
import Route from './Route';
import Users from '../components/Users';

const { Provider } = Store;

export default function Routes({ logged_in }) {
  const store = useReducer(modules, { user: logged_in });
  return (
    <Provider value={store}>
      <Switch>
        <Route exact path="/" component={Root} name="/" />
        <Route path="/home" component={Home} isPrivate name="home" />
        <Route path="/car" component={Users} name="cars" isPrivate />
      </Switch>
    </Provider>
  );
}
