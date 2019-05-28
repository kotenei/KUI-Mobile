export interface PickerProps extends KUI.BaseProps {
  data?: Column[][];
  cancelText?: React.ReactNode | string;
  defaultValue?: string[];
  value?: string[];
  okText?: React.ReactNode | string;
  loading?: boolean;
  title?: React.ReactNode | string;
  showHeader?: boolean;
  show?: boolean;
  onChange?: (value: string[]) => void;
  onCancel?: () => void;
  onOK?: (value: string[]) => void;
}

export interface PickerState {
  value: string[];
}

export interface PickerSelectProps extends KUI.BaseProps {
  columnIndex: number;
  columns?: Column[];
  value?: string;
  onChange?: (column: Column, columnIndex: number) => void;
}

export interface PickerSelectState {
  activeIndex?: number;
  value?: string;
}

export interface PickerItemProps extends KUI.BaseProps {
  prefixCls: string;
  label?: React.ReactNode | string;
  value?: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: (value: string) => void;
}

export interface Column {
  label: React.ReactNode | string;
  value: string;
  disabled?: boolean;
}
