import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

const Alert = lazy(() => import('./containers/Alert'));
const Home = lazy(() => import('./containers/Home'));
const Layout = lazy(() => import('./containers/Layout'));
const Collapse = lazy(() => import('./containers/Collapse'));

const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<div>loading...</div>}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/alert" render={() => <Alert />} />
      <Route exact path="/layout" render={() => <Layout />} />
      <Route exact path="/collapse" render={() => <Collapse />} />
    </AnimationRouter>
  );
};

export default Router;
