import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CellGroup } from '../Cell';
import { RadioGroupProps, RadioGroupState } from './typing';

class RadioGroup extends PureComponent<RadioGroupProps, RadioGroupState> {
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
    const { children } = this.props;
    const { value } = this.state;
    return (
      <CellGroup border>
        {React.Children.map(children, (child: any, index: number) => {
          const childValue = child.props.value !== undefined ? child.props.value : index;
          return React.cloneElement(child, {
            ...child.props,
            value: child.props.value !== undefined ? child.props.value : index,
            checked: value === childValue,
            onChange: this.handleChange,
          });
        })}
      </CellGroup>
    );
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

export default RadioGroup;
