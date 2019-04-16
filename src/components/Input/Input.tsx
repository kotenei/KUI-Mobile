import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { InputProps } from './typing';
import { Icon } from '../Icon';
import { Cell } from '../Cell';

const prefixCls = 'k-input';

class Input extends PureComponent<InputProps> {
  private static defaultProps = {
    type: 'text',
    disabled: false,
  };
  public renderInput() {
    const { type, placeholder, prefix, suffix, disabled, extra, defaultValue } = this.props;
    return (
      <React.Fragment>
        <div className={`${prefixCls}__wrap`}>
          {prefix && <span className={`${prefixCls}__prefix`}>{prefix}</span>}
          <input
            type={type}
            className={`${prefixCls}__control`}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
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
        <textarea className={`${prefixCls}__control`} />
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
}

export default Input;
