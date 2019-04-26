import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { ModalProps, ModalState } from './typing';

let seed = 1;
let zIndex = 1000;

const prefixCls = 'k-modal';

class Modal extends PureComponent<ModalProps, ModalState> {
  private static defaultProps = {
    mask: true,
    maskClose: true,
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
    const { className, mask } = this.props;
    const { open } = this.state;
    const classString = classnames({
      [prefixCls]: true,
    });
    const maskClassString = classnames({
      [`${prefixCls}-mask`]: true,
      in: mask && open,
    });
    return ReactDOM.createPortal(
      <div id={`${this.id}`}>
        <div className={classString} ref="modal">
          <div className={`${prefixCls}__header`} ref="header" />
          <div className={`${prefixCls}__body`} ref="body" />
          <div className={`${prefixCls}__footer`} ref="footer" />
        </div>
        <div />
      </div>,
      document.body,
    );
  }
}

export default Modal;
