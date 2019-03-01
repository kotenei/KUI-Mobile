export type Primary = 'primary';

export type StateTypes = 'info' | 'success' | 'warning' | 'danger';

export type SizeTypes = 'xs' | 'sm' | 'md' | 'lg';

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export as namespace KUI;
