import React, { PureComponent, Children } from 'react';
import classnames from 'classnames';
import { NoticeProps } from './typing';

const prefixCls = 'k-notice';

class Notice extends PureComponent<NoticeProps> {
  private static defaultProps = {
    duration: 1500,
  };

  private timer: any = null;

  public componentDidMount() {
    this.startCloseTimer();
  }

  public componentWillUnmount() {
    this.clearCloseTimer();
  }

  public render() {
    const { content, className, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <div className={classString} style={style}>
        {content}
      </div>
    );
  }

  private clearCloseTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  private startCloseTimer = () => {
    if (this.props.duration) {
      this.timer = setTimeout(() => {
        this.close();
      }, this.props.duration);
    }
  };

  private close = () => {
    const { onClose } = this.props;
    this.clearCloseTimer();
    if (onClose) {
      onClose();
    }
  };
}

export default Notice;
