import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { DatePickerProps, DatePickerState } from './typing';
import { Picker } from '../Picker';
import { addYears, getDaysInMonth } from 'date-fns';
import { Column } from '../Picker/typing';

const prefixCls = 'k-datepicker';

class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
  private static defaultProps = {
    mode: 'date',
    minDate: new Date('1900-01-01'),
    maxDate: addYears(new Date(new Date().getFullYear(), 0, 1), 10),
    defalutValue: new Date(),
    show: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: props.value || props.defalutValue || new Date(),
    };
  }

  public componentDidMount() {}

  public render() {
    const { title, show } = this.props;
    const data = this.getPickerData();
    return (
      <Picker
        title={title}
        data={data}
        show={show}
        showHeader
        onCancel={this.handleCancel}
        onOK={this.handleOK}
        onChange={this.handleChange}
      />
    );
  }

  private handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = (value, selected) => {
    const { onOK } = this.props;
    if (onOK) {
      onOK(new Date());
    }
  };

  private handleChange = (value, selected) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(new Date());
    }
  };

  private getPickerData() {
    const { mode, minDate, maxDate, formatter, hourStep, minuteStep, secondStep } = this.props;
    const { date } = this.state;
    const now = new Date();
    const tmpMinDate = minDate || new Date('1900-01-01');
    const tmpMaxDate = maxDate || addYears(new Date(now.getFullYear(), 0, 1), 10);
    const data: Column[][] = [];
    const years: Column[] = [];
    const months: Column[] = [];
    const days: Column[] = [];
    const hours: Column[] = [];
    const minutes: Column[] = [];
    const seconds: Column[] = [];
    const startYear = tmpMinDate.getFullYear();
    const endYear = tmpMaxDate.getFullYear();
    const allDays = getDaysInMonth(date);
    const tmpHourStep = hourStep || 1;
    const tmpMinuteStep = minuteStep || 1;
    const tmpSecondStep = secondStep || 1;

    for (let i = startYear; i <= endYear; i++) {
      years.push({ label: formatter ? formatter('year', i) : i, value: i.toString() });
    }

    for (let i = 1; i <= 12; i++) {
      const text = i.toString().padStart(1, '0');
      months.push({ label: formatter ? formatter('month', text) : text, value: i.toString() });
    }

    for (let i = 1; i <= allDays; i++) {
      const text = i.toString().padStart(1, '0');
      days.push({ label: formatter ? formatter('day', text) : text, value: i.toString() });
    }

    for (let i = 0; i <= 23; i++) {
      const text = i.toString().padStart(1, '0');
      hours.push({ label: formatter ? formatter('year', text) : text, value: i.toString() });
    }

    switch (mode) {
      default:
        data.push(years);
        data.push(months);
        data.push(days);
        break;
    }

    return data;
  }
}

export default DatePicker;
