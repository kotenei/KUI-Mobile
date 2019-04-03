export interface ButtonProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  icon?: string;
  disabled?: boolean;
  full?: boolean;
  type?: 'button' | 'reset' | 'submit';
  active?: boolean;
  size?: KUI.SizeTypes;
}

export interface ButtonGroupProps extends KUI.BaseProps {}
