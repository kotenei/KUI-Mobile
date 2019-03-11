import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { Icon } from '../Icon';
import { Cell } from '../Cell';
import { CollapsePanelProps } from './typing';

const prefixCls = 'k-collapse-panel';

class CollapsePanel extends PureComponent<CollapsePanelProps> {
  private static defaultProps = {
    activeIds: [],
    disabled: false,
  };
  private contentElement: HTMLDivElement;
  public componentDidMount() {
    console.log(this.getContentHeight());
  }
  public renderBody(isShow) {
    const { children } = this.props;
    return (
      <Transition
        in={isShow}
        timeout={300}
        onEnter={this.handleEnter}
        onEntering={this.handleEntering}
        onEntered={this.handleEntered}
        onExit={this.handleExit}
        onExiting={this.handleExiting}
      >
        {state => {
          return (
            <div className={`${prefixCls}__body`} ref={this.handleRef}>
              <div className={`${prefixCls}__body-inner`}>{children}</div>
            </div>
          );
        }}
      </Transition>
    );
  }
  public render() {
    const { activeIds, id, children, header, disabled, icon } = this.props;
    const isShow = activeIds ? activeIds.indexOf(id) > -1 : false;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <div className={classString}>
        <Cell
          className={classnames({
            [`${prefixCls}__header`]: true,
            // [`${prefixCls}__header--disabled`]: disabled,
          })}
          onClick={this.handleClick}
          title={header}
          showArrow
          arrowDirection={isShow ? 'down' : 'right'}
          border
          disabled={disabled}
        >
          {/* {header}
          <Icon className={`${prefixCls}__icon`} type={icon || isShow ? 'down' : 'right'} /> */}
        </Cell>

        {this.renderBody(isShow)}
      </div>
    );
  }

  private handleClick = e => {
    const { onClick, id, index, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(id);
    }
  };

  private handleRef = (element: HTMLDivElement) => {
    this.contentElement = element;
  };

  private handleEnter = (node, isAppearing) => {
    node.style.height = '0px';
  };

  private handleEntering = (node, isAppearing) => {
    node.style.height = this.getContentHeight() + 'px';
  };

  private handleEntered = (node, isAppearing) => {
    node.style.height = 'auto';
  };

  private handleExit = node => {
    node.style.height = this.getContentHeight() + 'px';
    // tslint:disable-next-line:no-unused-expression
    node.offsetHeight;
  };

  private handleExiting = node => {
    node.style.height = '0px';
  };

  private getContentHeight = (): number => {
    const el = this.contentElement;
    return el ? el.offsetHeight || el.clientHeight || el.scrollHeight : 0;
  };
}

export default CollapsePanel;
