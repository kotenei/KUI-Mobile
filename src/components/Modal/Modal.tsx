import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { ModalProps, ModalState } from './typing';
import { Button, ButtonGroup } from '../Button';
import { CSSTransition } from 'react-transition-group';

let seed = 1;
let zIndex = 1000;

const prefixCls = 'k-modal';

class Modal extends PureComponent<ModalProps, ModalState> {
  private static defaultProps = {
    mask: true,
    maskClose: false,
    open: false,
    okText: '确定',
    cancelText: '取消',
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open) {
      zIndex += 2;
    } else {
      zIndex -= 2;
    }

    if (prevState.open !== nextProps.open) {
      return {
        open: nextProps.open,
      };
    }

    return null;
  }

  private id: number;

  constructor(props) {
    super(props);
    this.id = seed++;
    this.state = {
      open: false,
    };
  }

  public componentDidMount() {
    const { open } = this.props;
    if (open) {
      zIndex += 2;
      setTimeout(() => {
        this.setState({
          open,
        });
      });
    }
  }

  public componentWillUnmount() {
    this.setState({
      open: false,
    });
    seed--;
  }

  public render() {
    const { className, mask, title, content, cancelText, okText, style } = this.props;
    const { open } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--in`]: open,
      },
      className,
    );
    const maskClassString = classnames({
      [`${prefixCls}-mask`]: true,
      [`${prefixCls}-mask--in`]: !!mask && open,
    });
    const _style = { zIndex, ...style };

    return ReactDOM.createPortal(
      <React.Fragment>
        <CSSTransition in={open} timeout={300} classNames="modal" unmountOnExit>
          <div className={classString} ref="modal" style={_style}>
            <div className={`${prefixCls}__header`} ref="header">
              {title}
            </div>
            <div className={`${prefixCls}__body`} ref="body">
              {content}
            </div>
            <div className={`${prefixCls}__footer`} ref="footer">
              <Button className={`${prefixCls}__cancel`} onClick={this.handleCnacel}>
                {cancelText}
              </Button>
              <Button className={`${prefixCls}__ok`} onClick={this.handleOK}>
                {okText}
              </Button>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={open} timeout={300} classNames="fade" unmountOnExit>
          <div
            className={maskClassString}
            style={{ zIndex: zIndex - 1 }}
            onClick={this.handleMaskClick}
          />
        </CSSTransition>
      </React.Fragment>,
      document.body,
    );
  }

  private handleCnacel = e => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = e => {
    const { onOK } = this.props;
    if (onOK) {
      onOK();
    }
  };

  private handleMaskClick = e => {
    const { maskClose, onCancel } = this.props;
    if (maskClose) {
      this.handleCnacel(e);
    }
  };

  private close = () => {
    if (!this.state.open) {
      return;
    }
    this.setState({
      open: false,
    });
  };

  private open = () => {
    if (this.state.open) {
      return;
    }
    this.setState({
      open: true,
    });
  };
}

export default Modal;
