import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

const Alert = lazy(() => import('./containers/Alert'));
const Badge = lazy(() => import('./containers/Badge'));
const Button = lazy(() => import('./containers/Button'));
const Cell = lazy(() => import('./containers/Cell'));
const Collapse = lazy(() => import('./containers/Collapse'));
const Home = lazy(() => import('./containers/Home'));
const Icon = lazy(() => import('./containers/Icon'));
const Layout = lazy(() => import('./containers/Layout'));
const Tabs = lazy(() => import('./containers/Tabs'));

const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<React.Fragment />}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/alert" render={() => <Alert />} />
      <Route exact path="/badge" render={() => <Badge />} />
      <Route exact path="/button" render={() => <Button />} />
      <Route exact path="/cell" render={() => <Cell />} />
      <Route exact path="/collapse" render={() => <Collapse />} />
      <Route exact path="/icon" render={() => <Icon />} />
      <Route exact path="/layout" render={() => <Layout />} />
      <Route exact path="/tabs" render={() => <Tabs />} />
    </AnimationRouter>
  );
};

export default Router;
