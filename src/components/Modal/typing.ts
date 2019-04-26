export interface ModalProps extends KUI.BaseProps {
  title?: React.ReactNode | string;
  content?: React.ReactNode | string;
  mask?: boolean;
  maskClose?: boolean;
  open?: boolean;
  okText?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  showCancel?: boolean;
  onCancel?: () => void;
  onOK?: () => void;
}

export interface ModalState {
  open: boolean;
}
