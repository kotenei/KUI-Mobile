import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { InputProps, InputState } from './typing';
import { Icon } from '../Icon';
import { Cell } from '../Cell';

const prefixCls = 'k-input';

class Input extends PureComponent<InputProps, InputState> {
  private static defaultProps = {
    type: 'text',
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      rows: 1,
      value: props.value || props.defaultValue || '',
    };
  }
  public componentDidMount() {
    this.adpHeight();
  }
  public componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  public renderInput() {
    const { type, placeholder, prefix, suffix, disabled, extra, defaultValue } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className={`${prefixCls}__wrap`}>
          {prefix && <span className={`${prefixCls}__prefix`}>{prefix}</span>}
          <input
            type={type}
            className={`${prefixCls}__control`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={this.handleChange}
          />
          {suffix && <span className={`${prefixCls}__suffix`}>{suffix}</span>}
        </div>
        <div className={`${prefixCls}__extra`}>{extra}</div>
      </React.Fragment>
    );
  }
  public renderTextArea() {
    const { height, rows } = this.state;
    return (
      <div className={`${prefixCls}__wrap`}>
        <textarea
          ref="textarea"
          className={`${prefixCls}__control`}
          onChange={this.handleChange}
          rows={rows}
        />
      </div>
    );
  }
  public render() {
    const { label, type } = this.props;
    return (
      <Cell
        className={prefixCls}
        title={label}
        value={type !== 'textarea' ? this.renderInput() : this.renderTextArea()}
      />
    );
  }

  private adpHeight = () => {
    const { value } = this.state;
    const el = this.refs.textarea as HTMLElement;
    if (el) {
    }
  };

  private handleChange = e => {
    const { target } = e;
    const { onChange } = this.props;
    const value = target.value;
    console.log(value.length)
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

export default Input;
