import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerProps, PickerState, Column } from './typing';
import { ActionSheet } from '../ActionSheet';
import { Drawer } from '../Drawer';
import PickerSelect from './PickerSelect';
import { Scroller } from '../Scroller';

const prefixCls = 'k-picker';

class Picker extends PureComponent<PickerProps, PickerState> {
  private static defaultProps = {
    cancelText: '取消',
    okText: '确认',
    loading: false,
    defaultValue: [],
    showHeader: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }
  public renderSelect() {
    const { data } = this.props;
    const { value } = this.state;
    const items: any = [];
    if (data && data.length > 0) {
      data.forEach((columns: Column[], index: number) => {
        const val = value && value[index];
        items.push(<PickerSelect key={index} columns={columns} value={val} />);
      });
    }
    return items;
  }
  public render() {
    const { className, style, title, cancelText, okText, showHeader, show } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <Drawer open={show} position="bottom">
        <div className={classString} style={style}>
          {showHeader && (
            <div className={`${prefixCls}__header`}>
              <div className={`${prefixCls}__cancel`} onClick={this.handleCancel}>
                {cancelText}
              </div>
              <div className={`${prefixCls}__title`}>{title}</div>
              <div className={`${prefixCls}__ok`} onClick={this.handleOK}>
                {okText}
              </div>
            </div>
          )}
          <div className={`${prefixCls}__wrapper`}>{this.renderSelect()}</div>
        </div>
      </Drawer>
    );
  }

  private handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = () => {
    const { onOK } = this.props;
    const { value } = this.state;
    if (onOK) {
      onOK(value);
    }
  };
}

export default Picker;
