import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { InputNumberProps, InputNumberState } from './typing';
import { Icon } from '../Icon';
import { Button } from '../Button';

const prefixCls = 'k-inputnumber';

class InputNumber extends PureComponent<InputNumberProps, InputNumberState> {
  private static defaultProps = {
    min: 1,
    max: 10,
    step: 1,
    defaultValue: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }
  public render() {
    const { className, style, disabled, disableInput } = this.props;
    const { value } = this.state;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--disabled`]: !!disabled,
    });
    return (
      <div className={classString} style={style}>
        <Button size="sm" className={`${prefixCls}__minus`} onClick={this.handleMinus}>
          <Icon type="minus" />
        </Button>
        <input className={`${prefixCls}__input`} type="text" value={value} />
        <Button size="sm" className={`${prefixCls}__plus`} onClick={this.handlePlus}>
          <Icon type="plus" />
        </Button>
      </div>
    );
  }

  private handleMinus = () => {
    const { value } = this.state;
    const { step, min } = this.props;
    let newValue = value - step;
    if (newValue <= min) {
      newValue = min;
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
  };

  private handlePlus = () => {
    const { value } = this.state;
    const { step, max } = this.props;
    let newValue = value + step;
    if (newValue >= max) {
      newValue = max;
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
  };
}

export default InputNumber;
