import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { NoticeBarProps, NoticeBarState } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-noticebar';

class NoticeBar extends React.Component<NoticeBarProps, NoticeBarState> {
  private static defaultProps = {
    delay: 1,
    mode: 'closable',
    icon: 'sound',
    speed: 100,
  };

  private duration: number = 5;
  private wrapWidth: number = 0;
  private contentWidth: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      firstRound: true,
    };
  }
  public componentDidMount() {
    this.measureText();
  }

  public componentDidUpdate() {
    console.log(this.state);
  }

  public render() {
    const { children, className, icon, mode, action } = this.props;
    const { loop, firstRound } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );

    const contentStyle = {
      paddingLeft: firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (firstRound ? this.props.delay : 0) + 's',
      animationDuration: this.duration + 's',
    };
    const contentClass = classnames({
      [`${prefixCls}__content`]: true,
      [`${prefixCls}__content--play`]: loop && firstRound,
      [`${prefixCls}__content--loop`]: loop && !firstRound,
    });

    return (
      <div className={classString} ref="container">
        <div className={`${prefixCls}__icon`} ref="icon">
          {typeof icon === 'string' ? <Icon type={icon} /> : icon}
        </div>
        <div className={`${prefixCls}__wrap`} ref="wrap">
          <div
            className={contentClass}
            ref="content"
            style={contentStyle}
            onAnimationEnd={this.animationEnd}
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

  private animationEnd = () => {
    const { speed } = this.props;
    if (!this.state.firstRound) {
      return;
    }
    this.duration = (this.contentWidth + this.wrapWidth) / (speed || 0);
    this.setState({
      firstRound: false,
    });
  };
}

export default NoticeBar;
