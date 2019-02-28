import React from 'react';

const prefixCls = 'app-header';

const Header = props => {
  const { children, left, right, goBack } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        {left ? (
          left
        ) : goBack ? (
          <a
            onClick={() => {
              history.go(-1);
            }}
          >
            {'<'}
          </a>
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
