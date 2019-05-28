import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerProps, PickerState, Column } from './typing';
import { ActionSheet } from '../ActionSheet';
import { Drawer } from '../Drawer';
import PickerSelect from './PickerSelect';
import { Scroller } from '../Scroller';

const prefixCls = 'k-picker';

class Picker extends PureComponent<PickerProps, PickerState> {
  public static getDerivedStateFromProps(nextProps, nextState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }
  private static defaultProps = {
    cancelText: '取消',
    okText: '确认',
    loading: false,
    defaultValue: [],
    showHeader: false,
  };

  private tmpValue: string[];

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  public componentDidMount() {
    // console.log('mount');
  }

  public componentDidUpdate(prevProps, prevState) {
    // const { show, value } = this.props;
    // console.log(prevProps.value, prevState.value);
    // if(prevProps.value!==this.props.value)
  }

  public renderSelect() {
    const { data } = this.props;
    const { value } = this.state;
    const items: any = [];
    if (data && data.length > 0) {
      data.forEach((columns: Column[], index: number) => {
        const val = value && value[index];
        items.push(
          <PickerSelect
            key={index}
            columnIndex={index}
            columns={columns}
            value={val}
            onChange={this.handleChange}
          />,
        );
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
    if ('value' in this.props) {
      this.tmpValue = this.props.value || [];
    }
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = () => {
    const { onOK } = this.props;

    if (onOK) {
      onOK(this.tmpValue);
    }
  };

  private handleChange = (column, columnIndex) => {
    const { value } = this.state;
    const newValue = [...value];
    newValue[columnIndex] = column.value;
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
    this.tmpValue = newValue;
  };
}

export default Picker;
