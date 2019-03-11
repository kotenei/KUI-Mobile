import React from 'react';
import classnames from 'classnames';

const prefixCls = 'app-block';

const Block = props => {
  const { title, children } = props;
  return (
    <div className={prefixCls}>
      <h2 className={`${prefixCls}-title`}>{title}</h2>
      <div
        className={classnames({
          [`${prefixCls}-body`]: true,
          [`${prefixCls}-body--padding`]: !!props.bodyPadding,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
