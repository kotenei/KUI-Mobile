import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Cell } from '../Cell';
import { RadioProps, RadioState } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-radio';

class Radio extends PureComponent<RadioProps, RadioState> {
  public static displayName = 'Radio';
  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('checked' in nextProps) {
      return {
        checked: nextProps.checked,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked,
    };
  }
  public render() {
    const { label, desc, className, disabled } = this.props;
    const { checked } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <Cell
        disabled={disabled}
        className={classString}
        title={label}
        label={desc}
        value={checked ? <Icon className={`${prefixCls}__icon`} type="check" /> : null}
        onClick={this.handleClick}
      />
    );
  }
  private handleClick = () => {
    const { value, onChange } = this.props;
    const { checked } = this.state;
    if (onChange) {
      onChange(value !== undefined ? value : checked ? 'true' : 'false');
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: true,
      });
    }
  };
}

export default Radio;
