import React from 'react';
import classnames from 'classnames';
import ToastContent from './ToastContent';
import { Notification } from '../Notification';
import { ToastType } from './typing';

const key = 'toast';
const defaultDuration = 1500;
let instance;

const notice = (
  content: React.ReactNode,
  type: ToastType,
  duration: number = defaultDuration,
  onClose: (() => void) | undefined,
  mask = true,
) => {
  const container = <ToastContent type={type}>{content}</ToastContent>;
  const strMask = 'k-toast-mask';

  if (!content) {
    return;
  }

  if (!instance) {
    instance = Notification.newInstance();
  }

  instance.notice({
    key,
    className: classnames({
      [strMask]: mask,
      [`${strMask}--hide`]: !mask,
    }),
    content: container,
    duration,
    onClose() {
      if (onClose) {
        onClose();
      }
      instance.destory();
      instance = null;
    },
  });
};

export default {
  loading(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  info(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'success', duration, onClose, mask);
  },
  warning(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'warning', duration, onClose, mask);
  },
  fail(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'error', duration, onClose, mask);
  },
};
