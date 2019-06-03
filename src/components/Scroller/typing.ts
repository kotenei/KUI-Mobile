export interface ScrollerProps extends KUI.BaseProps {
  probeType?: number;
  click?: boolean;
  listenScroll?: boolean;
  listenBeforeScroll?: boolean;
  listenScrollEnd?: boolean;
  direction?: 'vertical' | 'horizontal';
  scrollbar?: any;
  pullDownRefresh?: any;
  pullUpLoad?: any;
  startY?: number;
  refreshDelay?: number;
  freeScroll?: boolean;
  mouseWheel?: boolean;
  bounce?: boolean;
  zoom?: boolean;
  wheel?: any;
  pullDownWrapperProps?: ScrollerPullDownWrapperProps;
  onInit?: (instance) => void;
  onBeforeScrollStart?: () => void;
  onScrollStart?: () => void;
  onScroll?: (pos) => void;
  onScrollEnd?: (pos) => void;
  onPullingDown?: (callback: (status: 'success' | 'error', message?: string) => void) => void;
  onPullingUp?: () => void;
}

export interface ScrollerState {
  beforePullDown?: boolean;
  isPullingDown?: boolean;
}

export interface ScrollerPullDownWrapperProps {
  beforePullDown?: boolean;
  isPullingDown?: boolean;
  pullingText?: React.ReactNode | string;
  loosingText?: React.ReactNode | string;
  loadingText?: React.ReactNode | string;
  successText?: React.ReactNode | string;
}
