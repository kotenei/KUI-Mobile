export interface ToastProps extends KUI.BaseProps {
  duration?: number;
  icon?: React.ReactNode;
  mask?: boolean;
  maskClose?: boolean;
  message?: string;
  type?: 'loading' | 'fail' | 'success' | 'waring';
  onClose?: () => void;
}

export interface ToastState {
  open: boolean;
}
