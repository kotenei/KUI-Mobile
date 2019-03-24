export interface TabsProps extends KUI.BaseProps {
  activeIndex?: number;
  defalutActiveIndex?: number;
  type?: 'line' | 'card';
  onTabClick?: (activeIndex: number) => void;
}

export interface TabsState {
  activeIndex?: number;
}

export interface TabPanelProps {
  tab?: string | React.ReactNode;
  isActive?: boolean;
}

export interface TabNavProps {}

export interface TabNavItemProps {
  index?: number;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (index: number) => void;
}
