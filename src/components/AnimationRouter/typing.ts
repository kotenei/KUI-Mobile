export interface AnimationRouterProps extends KUI.BaseProps {
  component?: React.ReactNode | string;
  enter?: boolean;
  exit?: boolean;
  fallback?: React.ReactNode;
  timeout?: number;
  [key: string]: any;
}

export interface AnimationRouterState {}
