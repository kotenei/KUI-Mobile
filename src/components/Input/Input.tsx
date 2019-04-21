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
    return (
      <div className={`${prefixCls}__wrap`}>
        <textarea
          ref="textarea"
          className={`${prefixCls}__control`}
          rows={1}
          onChange={this.handleChange}
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
    const el = this.refs.textarea as HTMLElement;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  private handleChange = e => {
    const { target } = e;
    const { onChange, type } = this.props;
    const value = target.value;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
      if (type === 'textarea') {
        this.adpHeight();
      }
    }
    if (onChange) {
      onChange(value);
    }
  };
}

export default Input;
