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
}
