import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { NoticeBarProps, NoticeBarState } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-noticebar';

class NoticeBar extends PureComponent<NoticeBarProps, NoticeBarState> {
  private static defaultProps = {
    delay: 1,
    mode: 'closable',
    icon: 'sound',
    speed: 50,
  };
  private marqueeTimer: number;
  private firstRound: boolean = true;
  private duration: number = 5;
  private wrapWidth: number = 0;
  private contentWidth: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      loop: false,
    };
  }
  public componentDidMount() {
    this.measureText();
  }
  public render() {
    const { children, className, icon, mode, action } = this.props;
    const { loop } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );

    const contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.props.delay : 0) + 's',
      animationDuration: this.duration + 's',
    };

    return (
      <div className={classString} ref="container">
        <div className={`${prefixCls}__icon`} ref="icon">
          {typeof icon === 'string' ? <Icon type={icon} /> : icon}
        </div>
        <div className={`${prefixCls}__wrap`} ref="wrap">
          <div
            className={classnames({
              [`${prefixCls}__content`]: true,
              [`${prefixCls}__content--loop`]: loop,
            })}
            ref="content"
            style={contentStyle}
          >
            {children}
          </div>
        </div>
        <div className={`${prefixCls}__operation`} ref="operation">
          {!action && mode === 'closable' && <Icon type="close" />}
          {action}
        </div>
      </div>
    );
  }

  private measureText() {
    const { speed } = this.props;
    this.wrapWidth = domUtils.width(this.refs.wrap);
    this.contentWidth = domUtils.width(this.refs.content);
    if (this.contentWidth > this.wrapWidth) {
      this.duration = this.contentWidth / (speed || 0);
      this.setState({
        loop: true,
      });
    }
  }
}

export default NoticeBar;
