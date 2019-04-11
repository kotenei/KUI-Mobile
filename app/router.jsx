import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

const Alert = lazy(() => import('./containers/Alert'));
const Avatar = lazy(() => import('./containers/Avatar'));
const Badge = lazy(() => import('./containers/Badge'));
const Button = lazy(() => import('./containers/Button'));
const Card = lazy(() => import('./containers/Card'));
const Cell = lazy(() => import('./containers/Cell'));
const Collapse = lazy(() => import('./containers/Collapse'));
const Home = lazy(() => import('./containers/Home'));
const Icon = lazy(() => import('./containers/Icon'));
const Layout = lazy(() => import('./containers/Layout'));
const LazyLoad = lazy(() => import('./containers/LazyLoad'));
const LoadMore = lazy(() => import('./containers/LoadMore'));
const Message = lazy(() => import('./containers/Message'));
const NavBar = lazy(() => import('./containers/NavBar'));
const NoticeBar = lazy(() => import('./containers/NoticeBar'));
const Progress = lazy(() => import('./containers/progress'));
const Steps = lazy(() => import('./containers/Steps'));
const TabBar = lazy(() => import('./containers/TabBar'));
const Switch = lazy(() => import('./containers/Switch'));
const Tabs = lazy(() => import('./containers/Tabs'));
const Tag = lazy(() => import('./containers/Tag'));
const Timeline = lazy(() => import('./containers/Timeline'));
const Toast = lazy(() => import('./containers/Toast'));

const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<React.Fragment />}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/alert" render={() => <Alert />} />
      <Route exact path="/avatar" render={() => <Avatar />} />
      <Route exact path="/badge" render={() => <Badge />} />
      <Route exact path="/button" render={() => <Button />} />
      <Route exact path="/card" render={() => <Card />} />
      <Route exact path="/cell" render={() => <Cell />} />
      <Route exact path="/collapse" render={() => <Collapse />} />
      <Route exact path="/icon" render={() => <Icon />} />
      <Route exact path="/layout" render={() => <Layout />} />
      <Route exact path="/lazyload" render={() => <LazyLoad />} />
      <Route exact path="/loadmore" render={() => <LoadMore />} />
      <Route exact path="/message" render={() => <Message />} />
      <Route exact path="/navbar" render={() => <NavBar />} />
      <Route exact path="/noticebar" render={() => <NoticeBar />} />
      <Route exact path="/progress" render={() => <Progress />} />
      <Route exact path="/steps" render={() => <Steps />} />
      <Route exact path="/switch" render={() => <Switch />} />
      <Route exact path="/tabbar" render={() => <TabBar />} />
      <Route exact path="/tabs" render={() => <Tabs />} />
      <Route exact path="/tag" render={() => <Tag />} />
      <Route exact path="/timeline" render={() => <Timeline />} />
      <Route exact path="/toast" render={() => <Toast />} />
    </AnimationRouter>
  );
};

export default Router;
