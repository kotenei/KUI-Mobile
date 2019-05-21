import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerSelectProps, PickerSelectState, Column } from './typing';
import { Scroller } from '../Scroller';
import PickerItem from './PickerItem';
import domUtils from '../..//utils/domUtils';

const prefixCls = 'k-picker-select';

class PickerSelect extends PureComponent<PickerSelectProps, PickerSelectState> {
  public static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  private scrollInstance: any;
  private itemHeight: number;
  private arrHeight: number[];

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
    }
    return items;
  }

  public componentDidMount() {
    setTimeout(() => {
      this.init();
    });
  }

  public render() {
    const { activeIndex } = this.state;
    return (
      <Scroller
        probeType={3}
        className={`${prefixCls}__wheel`}
        wheel={{
          selectedIndex: activeIndex,
          wheelWrapperClass: prefixCls,
          wheelItemClass: `${prefixCls}__option`,
        }}
        onInit={this.handleScrollInit}
        onScrollEnd={this.handleScrollEnd}
      >
        <ul ref="select" className={`${prefixCls}`}>
          {this.renderItems()}
        </ul>
      </Scroller>
    );
  }

  private init() {
    const { columns } = this.props;
    this.arrHeight = [];
    if (columns && columns.length > 0) {
      const li = (this.refs.select as HTMLElement).querySelector('li');
      this.itemHeight = domUtils.height(li);
      columns.forEach((column, index) => {
        this.arrHeight.push((index + 1) * this.itemHeight);
      });
    }
  }

  private handleScrollInit = instance => {
    this.scrollInstance = instance;
  };

  private handleScrollEnd = pos => {
    const activeIndex = this.scrollInstance.getSelectedIndex();
    this.setState({
      activeIndex,
    });
  };
}

export default PickerSelect;
