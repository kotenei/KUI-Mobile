import React, { PureComponent } from 'react';
import classnames from 'classnames';

const prefixCls = 'k-cell-group';

class CellGroup extends PureComponent {
  public render() {
    const { children } = this.props;
    return (
      <div className={prefixCls}>
        {React.Children.map(children, (child: any) => {
          if (!child || !child.type || child.type.displayName !== 'Cell') {
            return null;
          }
          return child;
        })}
      </div>
    );
  }
}

export default CellGroup;
