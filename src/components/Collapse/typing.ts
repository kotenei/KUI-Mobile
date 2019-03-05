export interface CollapseProps extends KUI.BaseProps {
  activeIds?: string[];
  defaultActiveIds?: string[];
  accordion?: boolean;
  onChange?: (id: string) => void;
}

export interface CollapseState {
  activeIds?: string[];
}
