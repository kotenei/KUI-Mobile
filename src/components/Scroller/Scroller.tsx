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

  public componentWillUnmount() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
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
      wheel,
      onInit,
      onBeforeScrollStart,
      onScrollStart,
      onScroll,
      onScrollEnd,
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
      wheel,
    };

    this.scroll = new BScroll(this.elScroll, options);

    if (onBeforeScrollStart) {
      this.scroll.on('beforeScrollStart', onBeforeScrollStart);
    }

    if (onScrollStart) {
      this.scroll.on('scrollStart', onScrollStart);
    }

    if (this.props.onScroll) {
      this.scroll.on('scroll', onScroll);
    }

    if (onScrollEnd) {
      this.scroll.on('scrollEnd', onScrollEnd);
    }

    if (onInit) {
      onInit(this.scroll);
    }
  }
}

export default Scroller;
