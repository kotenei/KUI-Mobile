export type ThemeType = 'outline' | 'filled';

export interface IconProps extends KUI.BaseProps {
  fontSize?: number;
  theme?: ThemeType;
  type?: string;
  color?: string;
  size?: KUI.SizeTypes;
  spin?: boolean;
  state?: KUI.Primary | KUI.StateTypes;
  viewBox?: string;
  onClick?: () => void;
}

export interface SvgIconProps extends KUI.BaseProps {
  color?: string;
  fontSize?: number;
  title?: string;
  viewBox?: string;
}
