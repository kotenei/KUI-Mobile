import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Icon from '../Icon';
import { CollapsePanelProps } from './typing';

const prefixCls = 'k-collapse-panel';

class CollapsePanel extends PureComponent<CollapsePanelProps> {
  public static defaultProps = {
    activeIds: [],
    disabled: false,
  };
  public renderBody() {
    return null;
  }
  public render() {
    const { activeIds, id, children, header, disabled, icon } = this.props;
    const isShow = activeIds ? activeIds.indexOf(id) > -1 : false;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <div className={classString}>
        <div
          className={classnames({
            [`${prefixCls}-header`]: true,
            [`${prefixCls}-header--disabled`]: disabled,
          })}
        >
          {header}
          <Icon className={`${prefixCls}-icon`} type={icon || isShow ? 'down' : 'right'} />
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

export default CollapsePanel;
