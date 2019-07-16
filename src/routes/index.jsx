// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// components
import PageNotFound from 'components/PageNotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageNotFound} />
      <Route path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
