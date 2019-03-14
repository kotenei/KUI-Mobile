export interface CellProps extends KUI.BaseProps {
  border?: boolean;
  title?: string | React.ReactNode;
  value?: string | React.ReactNode;
  label?: string | React.ReactNode;
  to?: string;
  url?: string;
  showArrow?: boolean;
  arrowDirection?: 'left' | 'right' | 'up' | 'down';
  onClick?: () => void;
}

export interface CellGroupProps extends KUI.BaseProps {
  border?: boolean;
}
