import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import SliderHandle from './SliderHandle';
import { SliderProps, SliderState } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-slider';

class Slider extends PureComponent<SliderProps, SliderState> {
  private static defaultProps = {
    disabled: false,
    min: 0,
    max: 100,
    range: false,
    step: 1,
    vertical: false,
    defaultValue: 0,
    tipFormatter(value) {
      return value;
    },
  };
  //   private static getDerivedStateFromProps(nextProps, prevState) {
  //       return null
  //   }

  private elmSlider: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
      activeValue: -1,
    };
  }

  public componentDidMount() {
    this.init();
  }

  public renderHandles() {
    const { vertical, tipFormatter, range } = this.props;
    const { value, activeValue } = this.state;
    if (range) {
      return (
        Array.isArray(value) &&
        value.map((val, index) => {
          return this.getSliderHandle(val, index);
        })
      );
    } else {
      return this.getSliderHandle(value);
    }
  }
  public render() {
    const { disabled, vertical } = this.props;
    const { value } = this.state;
    const trackStyle = this.getTrackStyle();

    return (
      <div
        ref={this.handleRef}
        className={classnames({
          [prefixCls]: true,
          [`${prefixCls}--vertical`]: !!vertical,
          [`${prefixCls}--disabled`]: !!disabled,
        })}
      >
        <div className={`${prefixCls}__rail`} />
        <div className={`${prefixCls}__track`} style={trackStyle} />
        {this.renderHandles()}
      </div>
    );
  }

  private handleRef = (element: HTMLDivElement) => {
    this.elmSlider = element;
  };

  private handleStart = e => {};

  private handleChange = e => {
    const { onChange, disabled, range } = this.props;
    const activeValue = this.getValue(e);
    // let value = activeValue;
    // if (range) {
    //   let newValue = [...this.state.value];
    //   newValue[this.tmpDragIndex] = activeValue;
    //   value = newValue;
    // }
    // this.setState({
    //   value,
    //   activeValue,
    // });
    // if (onChange) {
    //   let returnValue = range
    //     ? [...value].sort((a, b) => {
    //         return a - b;
    //       })
    //     : value;

    //   onChange(returnValue);
    // }
  };

  private handleEnd = e => {};

  private toValue(percentage) {
    const { min, max, step } = this.props;
    let value = (percentage / 100) * (max - min);
    value = min + Math.round(value / step) * step;
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    return value;
  }

  private toPercentage(value) {
    const { min, max } = this.props;
    return (100 * (value - min)) / (max - min);
  }

  private getValue(event) {
    const sliderInfo = this.getSliderInfo();
    console.log(sliderInfo);
    // let mouseCoord = getMouseCoord(mouseEvent);
    // let percentage = this.getPercentage(mouseCoord, sliderInfo);
    // let value = this.toValue(percentage);
    // return value;
  }

  private getValueRange(value = this.state.value) {
    const { min, max } = this.props;
    const range = {};
    let next;
    let mid;

    if (value && Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const first = value[i];
        const second = i + 1 === value.length ? max : value[i + 1];
        mid = parseInt(((second - first) / 2).toString(), 10);
        next = first + mid;
        if (i === 0) {
          range[i] = [min, next];
        } else {
          range[i] = [range[i - 1][1] + 1, next];
        }
        if (i === value.length - 1) {
          range[i][1] = max;
        }
      }
    }

    return range;
  }

  private getPercentage(mouseCoord, sliderInfo) {
    const { vertical, min, max, step } = this.props;
    const num = (step * 100) / (max - min);
    let distanceToSlide, percentage;

    if (vertical) {
      distanceToSlide = mouseCoord.y - sliderInfo.offsetTop;
      percentage = (distanceToSlide / sliderInfo.height) * 100;
    } else {
      distanceToSlide = mouseCoord.x - sliderInfo.offsetLeft;
      percentage = (distanceToSlide / sliderInfo.width) * 100;
    }
    if (vertical) {
      percentage = 100 - percentage;
    }
    percentage = Math.max(0, Math.min(100, percentage));
    return percentage;
  }

  private getSliderInfo() {
    const position = domUtils.position(this.elmSlider);
    const offset = domUtils.offset(this.elmSlider);
    return {
      left: position.left,
      top: position.top,
      offsetLeft: offset.left,
      offsetTop: offset.top,
      width: domUtils.outerWidth(this.elmSlider),
      height: domUtils.outerHeight(this.elmSlider),
    };
  }

  private getSliderHandle = (value, key = 0) => {
    const { tipFormatter, vertical, disabled } = this.props;
    const { activeValue } = this.state;
    const title = tipFormatter && typeof tipFormatter === 'function' ? tipFormatter(value) : null;
    const percentage = this.toPercentage(value);
    const style = vertical ? { bottom: `${percentage}%` } : { left: `${percentage}%` };

    return (
      <SliderHandle
        key={`slider-handle-${key}`}
        // ref={`slider-handle-${value}`}
        disabled={disabled}
        title={title}
        style={style}
        value={value}
        // showTooltip={value === activeValue}
        onStart={this.handleStart}
        onChange={this.handleChange}
        onEnd={this.handleEnd}
        // onDragStop={this.handleDragStop}
        // onMouseEnter={this.handleMouseEnter}
        // onMouseLeave={this.handleMouseLeave}
      />
    );
  };

  private getTrackStyle() {
    const { value } = this.state;
    const { vertical } = this.props;
    let min, max, num1, num2;
    if (Array.isArray(value)) {
      min = Math.min(...value);
      max = Math.max(...value);
    } else {
      min = this.props.min;
      max = value;
    }
    num1 = this.toPercentage(min) + '%';
    num2 = this.toPercentage(max) - this.toPercentage(min) + '%';
    return vertical
      ? {
          bottom: num1,
          height: num2,
        }
      : {
          left: num1,
          width: num2,
        };
  }

  private init(props = this.props) {
    const { range, min, max, step } = props;
    let val: any = props.value || props.defaultValue;
    const stepArr: number[] = [];
    let stepRange;

    for (let i = min; i <= max; i += step) {
      stepArr.push(i);
    }
    if (stepArr[stepArr.length - 1] < max) {
      stepArr.push(max);
    }
    stepRange = this.getValueRange(stepArr);

    if (range && Array.isArray(val)) {
      const arrVal: number[] = [];
      val = val.sort((a, b) => {
        return a - b;
      });
      val.forEach(item => {
        if (item <= min) {
          arrVal.push(min);
        } else if (item >= max) {
          arrVal.push(max);
        } else {
          for (const k in stepRange) {
            if (item >= stepRange[k][0] && item <= stepRange[k][1]) {
              arrVal.push(stepArr[k]);
              break;
            }
          }
        }
      });
      val = arrVal;
    } else {
      if (val <= min) {
        val = min;
      }
      if (val >= max) {
        val = max;
      }
      for (const k in stepRange) {
        if (val >= stepRange[k][0] && val <= stepRange[k][1]) {
          val = stepArr[k];
          break;
        }
      }
      val = range ? [val] : val;
    }

    this.setState({
      value: val,
    });
  }
}

export default Slider;
