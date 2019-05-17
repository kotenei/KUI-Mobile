import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerSelectProps, PickerSelectState, Column } from './typing';
import PickerItem from './PickerItem';

const prefixCls = 'k-picker-select';

class PickerSelect extends PureComponent<PickerSelectProps, PickerSelectState> {
  public static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  public renderItems() {
    const { columns } = this.props;
    const { activeIndex } = this.state;
    const items: any = [];
    if (columns && columns.length > 0) {
      items.push(<PickerItem prefixCls={prefixCls} key="-2" />);
      items.push(<PickerItem prefixCls={prefixCls} key="-1" />);
      columns.forEach((item: Column, index: number) => {
        items.push(
          <PickerItem
            key={index}
            prefixCls={prefixCls}
            {...item}
            selected={index === activeIndex}
          />,
        );
      });
      items.push(<PickerItem prefixCls={prefixCls} key={`${columns.length + 1}`} />);
      items.push(<PickerItem prefixCls={prefixCls} key={`${columns.length + 2}`} />);
    }
    return items;
  }
  public render() {
    return <ul className={`${prefixCls}`}>{this.renderItems()}</ul>;
  }
}

export default PickerSelect;
