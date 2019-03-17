export interface ButtonProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  icon?: string;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  raised?: boolean;
  fab?: boolean;
  active?: boolean;
}

export interface ButtonGroupProps extends KUI.BaseProps {}
