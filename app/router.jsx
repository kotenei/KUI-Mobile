import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

const Alert = lazy(() => import('./containers/Alert'));
const Cell = lazy(() => import('./containers/Cell'));
const Collapse = lazy(() => import('./containers/Collapse'));
const Home = lazy(() => import('./containers/Home'));
const Layout = lazy(() => import('./containers/Layout'));

const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<div>loading...</div>}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/alert" render={() => <Alert />} />
      <Route exact path="/cell" render={() => <Cell />} />
      <Route exact path="/collapse" render={() => <Collapse />} />
      <Route exact path="/layout" render={() => <Layout />} />
    </AnimationRouter>
  );
};

export default Router;
