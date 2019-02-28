import React from 'react';

const prefixCls = 'app-block';

const Block = props => {
  const { title,children} = props;
  return (
    <div className={prefixCls}>
      <h2 className={`${prefixCls}-title`}>{title}</h2>
      <div className={`${prefixCls}-body`}>{children}</div>
    </div>
  );
};

export default Block;
