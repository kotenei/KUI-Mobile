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
    this.init();
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

  private init(props = this.props) {
    const { value, defaultValue, data } = props;
    const newValue = value || defaultValue || [];
    if (newValue.length === 0 && data) {
      data.forEach(column => {
        column.every(item => {
          if (!item.disabled) {
            newValue.push(item.value);
            return false;
          }
          return true;
        });
      });
    }
    this.tmpValue = newValue;
  }

  private handleCancel = () => {
    const { onCancel, value, defaultValue } = this.props;
    if ('value' in this.props) {
      this.tmpValue = value || defaultValue || [];
    } else {
      this.tmpValue = this.state.value || [];
    }
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = () => {
    const { onOK } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value: this.tmpValue,
      });
    }
    if (onOK) {
      onOK(this.tmpValue);
    }
  };

  private handleChange = (column, columnIndex) => {
    const { onChange } = this.props;
    const { value } = this.state;
    const newValue = [...value];
    newValue[columnIndex] = column.value;
    this.tmpValue = newValue;
    if (onChange) {
      onChange(newValue);
    }
  };
}

export default Picker;
