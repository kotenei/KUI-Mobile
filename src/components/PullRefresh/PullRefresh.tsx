import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PullRefreshProps } from './typing';
import { Scroller } from '../Scroller';

class PullRefresh extends PureComponent<PullRefreshProps> {
  public render() {
    const { children, ...others } = this.props;
    return (
      <Scroller
        {...others}
        scrollbar={{ fade: true }}
        pullDownRefresh={{
          threshold: 70,
          stop: 50,
        }}
      >
        {children}
      </Scroller>
    );
  }
}

export default PullRefresh;
