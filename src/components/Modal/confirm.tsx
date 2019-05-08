import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { ModalProps } from './typing';

export default function confirm(config: ModalProps) {
  let instance;
  const props: ModalProps = {
    ...config,
    onCancel: () => {
      closeModal(config.onCancel);
    },
    onOK: () => {
      closeModal(config.onOK);
    },
  };
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    instance.close();
    instance = null;
    setTimeout(() => {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }, 300);
  }

  function closeModal(callback) {
    if (callback && callback() !== false) {
      close();
    } else {
      close();
    }
  }

  instance = ReactDOM.render(<Modal {...props} open />, div);

  return {
    destory: close,
  };
}
