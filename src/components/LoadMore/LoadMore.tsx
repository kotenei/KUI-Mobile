import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { LoadMoreProps } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-loadmore';

const LoadMore: StatelessComponent<LoadMoreProps> = props => {
  const { className, tip, loading, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
      [`${prefixCls}--line`]: !loading,
      [`${prefixCls}--dot`]: !loading && !tip,
    },
    className,
  );
  return (
    <div className={classString} {...others}>
      <div className={`${prefixCls}__tip`}>
        {loading ? <Icon className={`${prefixCls}__icon`} type="loading" /> : null}
        {tip}
      </div>
    </div>
  );
};

LoadMore.defaultProps = {
  loading: true,
};

export default LoadMore;
