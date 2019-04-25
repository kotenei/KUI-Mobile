import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CheckboxGroupState, CheckboxGroupProps } from './typing';

class CheckboxGroup extends PureComponent<CheckboxGroupProps, CheckboxGroupState> {
  private static defaultProps = {
    cell: false,
    defaultValue: [],
  };
  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }
  public render() {
    return null;
  }
  private handleChange = value => {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    if (onChange) {
      onChange(value);
    }
  };
}

export default CheckboxGroup;
