export type NoticeBarMode = 'closable' | 'link';

export interface NoticeBarProps extends KUI.BaseProps {
  delay?: number;
  mode?: NoticeBarMode;
  icon?: React.ReactNode | string;
  action?: React.ReactNode;
  speed?: number;
  onClick?: () => void;
}

export interface NoticeBarState {
  loop?: boolean;
  firstRound?: boolean;
}
