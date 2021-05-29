import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ROOT } from 'constant/Routes';
import Main from 'components/Main/Main';
import PrivateRoute from 'components/common/PrivateRoute';

function App() {
  return (
    <Switch>
      <PrivateRoute exact path={ROOT.ROOT} component={Main} />
      <Redirect to={ROOT.ROOT} />
    </Switch>
  );
}

export default App;
