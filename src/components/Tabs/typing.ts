export interface TabsProps extends KUI.BaseProps {
  activeIndex?: number;
  defalutActiveIndex?: number;
  type?: 'line' | 'card';
  onTabClick?: (activeIndex: number) => void;
}

export interface TabsState {
  activeIndex?: number;
}
