export interface DrawerProps extends KUI.BaseProps {
  mask?: boolean;
  maskClose?: boolean;
  position?: 'left' | 'top' | 'right' | 'bottom';
  open?: boolean;
  onMaskClick?: () => void;
}

export interface DrawerState {
  open: boolean;
}
