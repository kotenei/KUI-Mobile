export interface RadioProps extends KUI.BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label: string | React.ReactNode;
  desc?: string | React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export interface RadioState {
  checked?: boolean;
}

export interface RadioGroupProps extends KUI.BaseProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export interface RadioGroupState {
  value?: string;
}
