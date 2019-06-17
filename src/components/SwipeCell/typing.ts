import { Button } from '../Button';
import { CellProps } from '../Cell/typing';

export interface SwipeCellProps extends KUI.BaseProps {
  autoClose?: boolean;
  cellProps?: CellProps;
  disabled?: boolean;
  left?: SwipeCellButtonProps[];
  right?: SwipeCellButtonProps[];
  onClose?: (type: 'left' | 'right') => void;
  onOpen?: (type: 'left' | 'right') => void;
}

export interface SwipeCellButtonProps {
  text?: React.ReactNode | string;
  color?: KUI.ColorTypes;
  onClick?: (e) => void;
}

export interface SwipeCellState {
  translateX: number;
}
