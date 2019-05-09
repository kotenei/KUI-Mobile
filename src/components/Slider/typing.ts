export interface SliderProps extends KUI.BaseProps {
  disabled?: boolean;
  range?: boolean;
  step: number;
  min: number;
  max: number;
  value?: number | number[];
  defaultValue?: number | number[];
  vertical?: boolean;
  tipFormatter?: (value) => string;
  onChange?: (value) => void;
}

export interface SliderState {
  value?: number | number[];
  activeValue?: number;
}

export interface SliderHandleProps extends KUI.BaseProps {
  title?: React.ReactNode;
  value: number;
  disabled?: boolean;
  onStart?: (e) => void;
  onChange?: (e) => void;
  onEnd?: (e) => void;
}
