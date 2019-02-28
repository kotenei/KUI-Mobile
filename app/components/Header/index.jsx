import React from 'react';

const prefixCls = 'app-header';

const Header = props => {
  const { children, left, right } = props;
  return (
    <div className={prefixCls}>
      {left && <div className={`${prefixCls}-left`}>{left}</div>}
      <div className={`${prefixCls}-middle`}>{children}</div>
      {right && <div className={`${prefixCls}-right`}>{right}</div>}
    </div>
  );
};

export default Header;
