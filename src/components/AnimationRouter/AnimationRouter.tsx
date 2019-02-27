import React, { Component, Suspense } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { AnimationRouterProps, AnimationRouterState } from './typing';

export default class AnimationRouter extends Component<AnimationRouterProps, AnimationRouterState> {
  private static defaultProps = {
    component: React.Fragment,
    enter: true,
    exit: false,
    timeout: 300,
  };
  public render() {
    const { children, location, timeout, component, enter, exit, fallback } = this.props;
    const groupProps = {
      component,
      enter,
      exit,
    };

    return (
      <TransitionGroup
        // childFactory={child => {
        //   return child
        // }}
        {...groupProps}
      >
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={timeout}
          onEnter={this.handleEnter}
          onEntered={this.handleEntered}
          onExit={this.handleExit}
          onExited={this.handleExited}
        >
          {fallback ? (
            <Suspense fallback={fallback}>
              <Switch location={location}>{children}</Switch>
            </Suspense>
          ) : (
            <Switch location={location}>{children}</Switch>
          )}
        </CSSTransition>
      </TransitionGroup>
    );
  }

  private handleEnter = node => {
    console.log('enter', node);
  };

  private handleEntered = node => {
    console.log('entered', node);
  };

  private handleExit = node => {
    console.log('exit', node);
  };

  private handleExited = node => {
    console.log('exited', node);
  };
}
