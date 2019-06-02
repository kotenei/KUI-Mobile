import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PullRefreshProps } from './typing';
import { Scroller } from '../Scroller';

class PullRefresh extends PureComponent<PullRefreshProps> {
  public render() {
    const { children } = this.props;
    return <Scroller>{children}</Scroller>;
  }
}

export default PullRefresh;
