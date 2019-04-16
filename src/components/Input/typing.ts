export interface InputProps extends KUI.BaseProps {
  label?: React.ReactNode | string;
  name?: string;
  type?: string;
  id?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  extra?: React.ReactNode | string;
  // addonBefore: React.ReactNode;
  // addonAfter: React.ReactNode;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  onChange?: (value: string) => void;
}

export interface InputGroupProps extends KUI.BaseProps {
  addonBefore: React.ReactNode;
  addonAfter: React.ReactNode;
}
