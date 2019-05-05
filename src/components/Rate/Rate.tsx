import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RateProps, RateState } from './typing';
import RateItem from './RateItem';
import { Icon } from '../Icon';

const prefixCls = 'k-rate';

class Rate extends PureComponent<RateProps, RateState> {
  private static defaultProps = {
    allowHalf: false,
    count: 5,
    character: <Icon type="star" theme="filled" />,
    defaultValue: 0,
    disabled: false,
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
        orgValue: nextProps.value,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    let value = props.defaultValue;
    if ('value' in props) {
      value = props.value;
    }
    this.state = {
      value,
      orgValue: value,
    };
  }

  public renderStars() {
    const { count, character, allowHalf, disabled } = this.props;
    const { value } = this.state;
    const items: any = [];
    if (count !== undefined) {
      for (let i = 0; i < count; i++) {
        items.push(
          <RateItem
            key={i}
            current={value}
            value={i + 1}
            character={character}
            allowHalf={allowHalf}
            onHover={this.handleStarHover}
            onClick={this.handleStarClick}
          />,
        );
      }
    }

    return items;
  }

  public render() {
    const { disabled, style, className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: !!disabled,
      },
      className,
    );
    return (
      <ul className={classString} onTouchEnd={this.handleLeave} style={style}>
        {this.renderStars()}
      </ul>
    );
  }

  private handleStarClick = value => {
    const { onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({
        value,
        orgValue: value,
      });
    }
    if (onChange) {
      onChange(value);
    }
  };

  private handleStarHover = value => {
    const { onHoverChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({
      value,
    });
    if (onHoverChange) {
      onHoverChange(value);
    }
  };

  private handleLeave = () => {
    this.setState({
      value: this.state.orgValue,
    });
  };
}

export default Rate;
