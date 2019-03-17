import React from 'react';
import classnames from 'classnames';

// tslint:disable-next-line:variable-name
const ButtonGroup = props => {
  const { className, children, ...others } = props;
  return (
    <div className={classnames('k-btn-group', className)} {...others}>
      {React.Children.map(children, (child: any) => {
        if (child && child.type && child.type.displayName === 'Button') {
          return child;
        }
        return null;
      })}
    </div>
  );
};

export default ButtonGroup;
