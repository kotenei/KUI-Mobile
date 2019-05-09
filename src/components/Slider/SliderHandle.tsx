import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SliderHandleProps } from './typing';

const prefixCls = 'k-slider-handle';

class SliderHandle extends PureComponent<SliderHandleProps> {
  public render() {
    const { title, style, disabled } = this.props;
    return (
      <div
        className={`${prefixCls}`}
        style={style}
        // onMouseDown={disabled ? null : this.handleMouseDown}
        // onMouseEnter={this.handleMouseEnter}
        // onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      />
    );
  }
  private handleTouchStart = e => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    this.start(e);
    // 禁止文档选择事件
    document.onselectstart = () => {
      return false;
    };
    return false;
  };

  private handleTouchMove = e => {
    this.move(e);
    return false;
  };

  private handleTouchEnd = e => {
    this.stop(e);
    // document.removeEventListener('mousemove', this.handleMouseMove);
    // document.removeEventListener('mouseup', this.handleMouseUp);
    return false;
  };

  private start(e) {
    const { target } = e;
    const { onStart } = this.props;
    // document.addEventListener('mousemove', this.handleMouseMove);
    // document.addEventListener('mouseup', this.handleMouseUp);

    if (target.setCapture) {
      target.setCapture();
    }
    if (onStart) {
      onStart(e);
    }
  }
  private move(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }
  private stop(e) {
    // const { onDragStop } = this.props;
    // if (onDragStop) {
    //   onDragStop(e);
    // }
  }
}

export default SliderHandle;
