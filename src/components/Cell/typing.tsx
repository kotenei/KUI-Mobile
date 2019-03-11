export interface CellProps extends KUI.BaseProps {
  border?: boolean;
  disabled?: boolean;
  title?: string | React.ReactNode;
  value?: string | React.ReactNode;
  label?: string | React.ReactNode;
  url?: string;
  showArrow?: boolean;
  arrowDirection?: 'left' | 'right' | 'up' | 'down';
}
