import React, { PureComponent } from 'react';
import classnames from 'classnames';
import BScroll from 'better-scroll';
import { ScrollerProps } from './typing';

const prefixCls = 'k-scroller';

class Scroller extends PureComponent<ScrollerProps> {
  private static defaultProps = {
    probeType: 1,
    click: true,
    listenScroll: false,
    listenBeforeScroll: false,
    listenScrollEnd: false,
    direction: 'vertical',
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false,
    startY: 0,
    refreshDelay: 20,
    freeScroll: false,
    mouseWheel: false,
    bounce: true,
    zoom: false,
  };

  private elScroll: HTMLDivElement;

  private scroll: any;

  public componentDidMount() {
    setTimeout(() => {
      this.init();
    }, 20);
  }

  public render() {
    const { children, className, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <div ref={this.handleRef} className={classString} style={style}>
        {children}
        {/* <div className={`${prefixCls}__content`}>{children}</div> */}
        {/* <div className={`${prefixCls}__pulldown`}></div> */}
      </div>
    );
  }
  private handleRef = (elm: HTMLDivElement) => {
    this.elScroll = elm;
  };

  private init() {
    if (!this.elScroll) {
      return;
    }
    const {
      probeType,
      click,
      freeScroll,
      direction,
      scrollbar,
      pullDownRefresh,
      pullUpLoad,
      startY,
      mouseWheel,
      bounce,
      zoom,
    } = this.props;

    const options = {
      probeType,
      click,
      scrollY: freeScroll || direction === 'vertical',
      scrollX: freeScroll || direction === 'horizontal',
      scrollbar,
      pullDownRefresh,
      pullUpLoad,
      startY,
      freeScroll,
      mouseWheel,
      bounce,
      zoom,
    };

    this.scroll = new BScroll(this.elScroll, options);
  }
}

export default Scroller;
