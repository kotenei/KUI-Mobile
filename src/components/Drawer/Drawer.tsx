import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Mask } from '../Mask';
import { DrawerProps, DrawerState } from './typing';

const prefixCls = 'k-drawer';

class Drawer extends PureComponent<DrawerProps, DrawerState> {
  private static defaultProps = {
    mask: true,
    maskClose: true,
    open: false,
    position: 'left',
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: nextProps.open,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }
  public render() {
    const { children, className, position, style, onMaskClick } = this.props;
    const { open } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${position}`]: true,
      },
      className,
    );
    const classNames = `${prefixCls}--${position}`;

    return (
      <React.Fragment>
        <CSSTransition in={open} timeout={300} classNames={classNames} unmountOnExit>
          <div className={classString} style={style}>
            {children}
          </div>
        </CSSTransition>
        <Mask show={open} onClick={onMaskClick} />
      </React.Fragment>
    );
  }
}

export default Drawer;
