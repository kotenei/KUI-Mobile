import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { format, getDaysInMonth, getDay, addDays } from 'date-fns';
import { Row, Col } from '../Layout';
import { CalendarMonthProps } from './typing';

const prefixCls = 'k-calendar-month';

const Cell = props => {
  const { selected, date, onClick } = props;
  return (
    <div
      className={classnames({
        [`${prefixCls}__day`]: true,
        [`${prefixCls}__day--selected`]: !!selected,
      })}
      onClick={() => {
        onClick(date);
      }}
    >
      {props.children}
    </div>
  );
};

class CalendarMonth extends PureComponent<CalendarMonthProps> {
  public static defaultProps = {
    date: new Date(),
  };
  public renderDays() {
    const { date, value, onChange } = this.props;
    const days = getDaysInMonth(date);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const rows: any = [];
    const formatStr = 'YYYYMMDD';
    let start = '';
    let end = '';
    let cols: any = [];
    let len;

    if (value) {
      if (Array.isArray(value)) {
        start = format(value[0], formatStr);
        end = format(value[1], formatStr);
      } else {
        start = format(value, formatStr);
      }
    }

    for (let i = 0; i < days; i++) {
      const tmpDate = addDays(firstDayOfMonth, i);
      const dayOfWeek = tmpDate.getDay();
      const cur = format(tmpDate, formatStr);
      let selected = false;

      if (start && end && cur >= start && cur <= end) {
        selected = true;
      } else if (start && cur === start) {
        selected = true;
      }

      cols.push(
        <Cell key={tmpDate} selected={selected} date={tmpDate} onClick={onChange}>
          <span>{i + 1}</span>
        </Cell>,
      );
      if (dayOfWeek === 6 || (i === days - 1 && cols.length > 0)) {
        rows.push(cols);
        cols = [];
      }
    }

    len = 7 - rows[0].length;
    for (let i = 0; i < len; i++) {
      rows[0].unshift(<Cell key={`0-${i}`} />);
    }

    len = 7 - rows[rows.length - 1].length;
    for (let i = 0; i < len; i++) {
      rows[rows.length - 1].push(<Cell key={`${rows.length - 1}-${i}`} />);
    }

    return rows.map((items, index) => {
      return (
        <div key={index} className={`${prefixCls}__rows`}>
          {items}
        </div>
      );
    });
  }
  public render() {
    const { date } = this.props;

    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}__title`}>{format(date, 'YYYY年MM月')}</div>
        <div className={`${prefixCls}__days`}>{this.renderDays()}</div>
      </div>
    );
  }
}

export default CalendarMonth;
