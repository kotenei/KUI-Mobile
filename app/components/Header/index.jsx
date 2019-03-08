import React from 'react';
import { Icon } from 'kui-mobile';
const prefixCls = 'app-header';

const Header = props => {
  const { children, left, right, goBack } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        {left ? (
          left
        ) : goBack ? (
          <Icon
            type="left"
            onClick={() => {
              history.go(-1);
            }}
          />
        ) : (
          ''
        )}
      </div>
      <div className={`${prefixCls}-middle`}>{children}</div>
      <div className={`${prefixCls}-right`}>{right}</div>
    </div>
  );
};

export default Header;
