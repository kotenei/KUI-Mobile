import React from 'react';
import classnames from 'classnames';
import ToastContent from './ToastContent';
import { Notification } from '../Notification';
import { ToastType } from './typing';
import { guid } from '../../utils';

const defaultSettings: Settings = {
  key: 'toast',
  duration: 1500,
  mask: true,
  onClose: () => {},
};
let instance;

interface Settings {
  key?: string;
  duration?: number;
  mask?: boolean;
  onClose?: () => void;
}

const notice = (content: React.ReactNode, type, settings?: Settings) => {
  const container = <ToastContent type={type}>{content}</ToastContent>;
  const strMask = 'k-toast-mask';
  const options = { ...defaultSettings, ...settings };

  if (!content) {
    return;
  }

  if (!instance) {
    instance = Notification.newInstance();
  }

  instance.notice({
    key: options.key,
    className: classnames({
      [strMask]: options.mask,
      [`${strMask}--hide`]: !options.mask,
    }),
    content: container,
    duration: options.duration,
    onClose: options.onClose,
  });

  return {
    remove() {
      instance.remove(options.key);
    },
  };
};

export default {
  loading(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'loading', settings);
  },
  info(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'info', settings);
  },
  success(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'success', settings);
  },
  warning(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'warning', settings);
  },
  fail(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'error', settings);
  },
};
