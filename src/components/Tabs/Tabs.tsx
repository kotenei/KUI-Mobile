import React, { PureComponent } from 'react';
import classnames from 'classnames';
import omit from 'object.omit';
import TabNav from './TabNav';
import TabContent from './TabContent';
import { TabsProps, TabsState } from './typing';

const prefixCls = 'k-tabs';

class Tabs extends PureComponent<TabsProps, TabsState> {
  private static defaultProps = {
    defaultActiveIndex: 0,
    type: 'line',
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || props.defaultActiveIndex,
    };
  }
  public componentDidMount() {
    const { activeIndex } = this.state;
    const { children } = this.props;
    let hasMatch = false;
    React.Children.map(children, (child: any, index: number) => {
      if (child) {
        const { disabled } = child.props;
        if (disabled && index === activeIndex) {
          hasMatch = true;
        }
      }
    });
    if (hasMatch) {
      this.setState({
        activeIndex: 0,
      });
    }
  }
  public renderTabNav() {
    // const { children } = this.props;
    // const { activeIndex } = this.state;
    // if (!children) {
    //   return null;
    // }
    // return <TabNav panels={children} {...this.props} activeIndex={activeIndex} />;
    return null;
  }
  public renderTabContent() {
    // const { children } = this.props;
    // const { activeIndex } = this.state;
    // if (!children) {
    //   return null;
    // }
    // return <TabContent panels={children} {...this.props} activeIndex={activeIndex} />;
    return null;
  }
  public render() {
    const { className, type, style } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--line`]: type === 'line',
      [`${prefixCls}--card`]: type === 'card',
    });
    return (
      <div className={classString} style={style}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;
