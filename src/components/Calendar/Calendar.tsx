import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { addYears, addMonths, format, differenceInCalendarMonths } from 'date-fns';
import { CalendarProps, CalendarState } from './typing';
import CalendarHeader from './CalendarHeader';
import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';
import { Drawer } from '../Drawer';
import { Scroller } from '../Scroller';
import { PullRefresh } from '../PullRefresh';

const prefixCls = 'k-calendar';
const now = new Date();

class Calendar extends PureComponent<CalendarProps, CalendarState> {
  public static defaultProps = {
    open: false,
    title: '日期选择',
    cancelText: '取消',
    okText: '确定',
    minDate: new Date(now.getFullYear(), 0, 1),
    maxDate: addYears(now, 1),
  };

  constructor(props) {
    super(props);
    const { maxDate } = props;
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const value = props.value || props.defaultValue;
    const viewData = [firstDayOfMonth];
    const num = 5;
    let len = maxDate ? Math.abs(differenceInCalendarMonths(firstDayOfMonth, maxDate)) : num;
    len = len >= num ? num : len;

    for (let i = 1; i < len; i++) {
      viewData.push(addMonths(firstDayOfMonth, i));
    }

    this.state = {
      value,
      tmpValue: value,
      viewData,
      canPullDown: true,
      canPullUp: true,
    };
  }

  public renderViews() {
    const { viewData, value } = this.state;
    return viewData.map((date, index) => {
      return <CalendarMonth key={index} date={date} value={value} onChange={this.handleChange} />;
    });
  }

  public render() {
    const { className, style, open, cancelText, okText, title } = this.props;
    const { canPullDown, canPullUp } = this.state;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <Drawer position="bottom" open={open} mask={false} className={classString} style={style}>
        <div className={`${prefixCls}__top`}>
          <CalendarHeader
            prefixCls={prefixCls}
            title={title}
            cancelText={cancelText}
            okText={okText}
            onCancel={this.handleCancel}
            onOK={this.handleOK}
          />
          <CalendarWeek prefixCls={prefixCls} />
        </div>
        <div className={`${prefixCls}__main`}>
          <PullRefresh
            style={{
              height: '100%',
            }}
            pullDownWrapperProps={{
              pullingText: '加载上一个月',
              loosingText: '释放加载',
              successText: '加载成功',
            }}
            pullDownRefresh={canPullDown}
            pullUpload={canPullUp}
            onPullingDown={this.handlePullingDown}
            onPullingUp={this.handlePullingUp}
          >
            <div className={`${prefixCls}__wrapper`}>{this.renderViews()}</div>
          </PullRefresh>
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
  };

  private handleChange = date => {
    console.log(date);
  };

  private handlePullingDown = callback => {
    const { minDate } = this.props;
    const { viewData } = this.state;
    const date = viewData[0];
    const newDate = addMonths(date, -1);
    if (minDate && newDate >= minDate) {
      const canPullDown = format(newDate, 'YYYYMM') !== format(minDate, 'YYYYMM');

      this.setState(
        {
          viewData: [newDate, ...viewData],
          canPullDown,
        },
        () => {
          callback({
            status: canPullDown ? 'success' : 'close',
          });
        },
      );
    }
  };

  private handlePullingUp = callback => {
    const { maxDate } = this.props;
    const { viewData } = this.state;
    const date = viewData[viewData.length - 1];
    const newDate = addMonths(date, 1);
    if (maxDate && newDate <= maxDate) {
      const canPullUp = format(newDate, 'YYYYMM') !== format(maxDate, 'YYYYMM');
      this.setState(
        {
          viewData: [...viewData, newDate],
          canPullUp,
        },
        () => {
          callback({
            status: canPullUp ? 'success' : 'close',
          });
        },
      );
    }
  };
}

export default Calendar;
