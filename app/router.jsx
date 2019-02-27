import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
const Layout = lazy(() => import('./containers/Layout'));


const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<div>loading...</div>}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/layout" render={() => <Layout />} />
    </AnimationRouter>
  );
};

export default Router;
