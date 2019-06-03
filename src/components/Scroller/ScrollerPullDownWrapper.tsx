import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { ScrollerPullDownWrapperProps } from './typing';

const prefixCls = 'k-scroller-pulldown-wrapper';

const ScrollerPullDownWrapper: StatelessComponent<ScrollerPullDownWrapperProps> = props => {
  const { beforePullDown, isPullingDown, pullingText, loadingText, successText } = props;
  return (
    <div className={`${prefixCls}`}>
      {beforePullDown && (
        <div>
          <span>{pullingText}</span>
        </div>
      )}
      {!beforePullDown && (
        <div>
          {isPullingDown && <span>{loadingText}</span>}
          {!isPullingDown && <span>{successText}</span>}
        </div>
      )}
    </div>
  );
};

ScrollerPullDownWrapper.defaultProps = {
  beforePullDown: true,
  isPullingDown: false,
  pullingText: '下拉刷新',
  loadingText: '加载中...',
  successText: '刷新成功',
};

export default ScrollerPullDownWrapper;
