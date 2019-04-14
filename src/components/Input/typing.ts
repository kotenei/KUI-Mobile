export interface InputProps extends KUI.BaseProps {
  label?: React.ReactNode | string;
  name?: string;
  type?: string;
  id?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  addonBefore: React.ReactNode;
  addonAfter: React.ReactNode;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  onChange?: (value: string) => void;
}
