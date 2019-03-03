export type StateTypes = 'info' | 'success' | 'warning' | 'danger';

export type SizeTypes = 'xs' | 'sm' | 'md' | 'lg';

export type ColorTypes = 'primary' | StateTypes;

// export const Colors = ['primary', 'info', 'success', 'warning', 'danger'];

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export as namespace KUI;
