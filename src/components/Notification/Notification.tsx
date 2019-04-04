import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import omit from 'object.omit';
import Notice from './Notice';
import { NotificationProps, NotificationState, NoticeProps } from './typing';

class Notification extends PureComponent<NotificationProps, NotificationState> {
  public static newInstance: any;

  private static defaultProps = {
    transitionName: 'fade',
  };

  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
      notices: [],
    };
  }

  public render() {
    const { transitionName, className } = this.props;
    const { notices, duration } = this.state;
    const nodes = notices.map((notice, i) => {
      const onClose = key => {
        this.remove(key);
        notice.onClose();
      };
      return (
        <CSSTransition timeout={duration} key={notice.key} classNames={transitionName}>
          <Notice {...notice} onClose={onClose.bind(this, notice.key)} />
        </CSSTransition>
      );
    });

    return <TransitionGroup>{nodes}</TransitionGroup>;
  }

  public add = (noticeProps: NoticeProps): void => {
    const { notices } = this.state;
    const newNotices = [...notices];

    if (!notices.find(notice => notice.key === noticeProps.key)) {
      newNotices.push(noticeProps);
      this.setState({
        notices: newNotices,
        duration: noticeProps.duration,
      });
    }
  };

  public remove = key => {
    this.setState(prevState => {
      return {
        notices: prevState.notices.filter(notice => notice.key !== key),
      };
    });
  };
}

Notification.newInstance = props => {
  let instance;
  const container = document.createElement('div');
  const handleRef = node => {
    instance = node;
  };
  document.body.appendChild(container);
  ReactDOM.render(<Notification {...props} ref={handleRef} />, container);
  return {
    notice(noticeProps: NoticeProps) {
      instance.add(noticeProps);
    },
    remove(key) {
      instance.remove(key);
    },
    destory() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    },
  };
};

export default Notification;
