import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CellGroupProps } from './typing';

const prefixCls = 'k-cell-group';

class CellGroup extends PureComponent<CellGroupProps> {
  private static defaultProps = {
    border: false,
  };
  public render() {
    const { children, border } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--border`]: !!border,
    });
    return (
      <div className={classString}>
        {/* {React.Children.map(children, (child: any) => {
          console.log(child);
          if (!child || !child.type || child.type.displayName !== 'Cell') {
            return null;
          }
          return child;
        })} */}
        {children}
      </div>
    );
  }
}

export default CellGroup;
