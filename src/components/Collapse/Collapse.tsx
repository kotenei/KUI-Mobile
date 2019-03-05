import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CollapseProps, CollapseState } from './typing';

const prefixCls = 'k-collapse';

class Collapse extends PureComponent<CollapseProps, CollapseState> {
  private static defaultProps = {
    defaultActiveIds: [],
  };
  public state = {
    activeIds: this.props.activeIds || this.props.defaultActiveIds,
  };
  public render() {
    const { children, className } = this.props;
    const { activeIds } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <div className={classString}>
        {React.Children.map(children, (child: any, index) => {
          if (!child || !child.type || child.type.displayName !== 'CollapsePanel') {
            return null;
          }
          return React.cloneElement(child, {
            ...child.props,
            activeIds,
            onClick: this.handleChange,
          });
        })}
      </div>
    );
  }
  private handleChange = (e, id) => {
    // const { onChange, accordion } = this.props;
    // const { activeIds } = this.state;
    // let newActiveIds = accordion ? [] : activeIds ? [...activeIds] : [];
    // if (onChange) {
    //   onChange(id);
    // }
    // if (!('activeIds' in this.props)) {
    //   const index = activeIds.indexOf(id);
    //   if (index === -1) {
    //     newActiveIds.push(id);
    //   } else {
    //     newActiveIds.splice(index, 1);
    //   }
    //   this.setState({
    //     activeIds: newActiveIds,
    //   });
    // }
  };
}

export default Collapse;
