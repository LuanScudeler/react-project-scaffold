import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from 'components/Nomatch/NoMatch';
import AppLayout from 'components/AppLayout';
import LandingPage from 'routes/landing-page/LandingPage';

const AppRoutes = () => {
  return (
    <AppLayout>
      <Switch>
        <Redirect exact from="/" to="/landing-page" />
        <Route exact path="/landing-page">
          <LandingPage />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default AppRoutes;
