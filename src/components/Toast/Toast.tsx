import React from 'react';
import classnames from 'classnames';
import ToastContent from './ToastContent';
import { Notification } from '../Notification';
import { ToastType } from './typing';
import { guid } from '../../utils';

const key = 'toast';
const defaultDuration = 1500;
let instance;

interface Settings {
  key?: string;
  duration?: number;
  onClose?: () => void;
  mask?: boolean;
}

const notice = (
  content: React.ReactNode,
  type,
  settings: Settings = { key, duration: defaultDuration, mask: true, onClose: () => {} },
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
    key: settings.key || key,
    className: classnames({
      [strMask]: settings.mask,
      [`${strMask}--hide`]: !settings.mask,
    }),
    content: container,
    duration: settings.duration || defaultDuration,
    onClose() {
      if (settings.onClose) {
        settings.onClose();
      }
      instance.destory();
      instance = null;
    },
  });

  return {
    remove() {
      instance.remove(key);
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
