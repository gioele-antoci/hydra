import * as React from 'react';
import './css/DatePicker.css';
import hydra from './interfaces';
import * as ReactDates from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

export default class DatePicker extends React.Component<{ minStart: moment.Moment, start: moment.Moment, end: moment.Moment, onChange: (startDate: moment.Moment, endDate: moment.Moment) => void }, any> {

    newStart: moment.Moment;
    newEnd: moment.Moment;

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: props.start,
            endDate: props.end,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.isOutsideRange = this.isOutsideRange.bind(this);

    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
        // this.props.onChange(startDate, endDate);
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });

        //prompt closed
        if (!focusedInput) {
            this.props.onChange(this.state.startDate, this.state.endDate);
        }
    }

    isOutsideRange = (day?: moment.Moment) => {
        return !ReactDates.isInclusivelyAfterDay(day, this.props.minStart) || ReactDates.isInclusivelyAfterDay(day, this.props.end);
    }

    render() {
        const { focusedInput, startDate, endDate } = this.state;

        return (
            <div className="daterange-picker-container">
                <ReactDates.DateRangePicker className="DateRangePicker card" startDate={startDate} endDate={endDate} focusedInput={focusedInput}
                    onFocusChange={this.onFocusChange} onDatesChange={this.onDatesChange} isOutsideRange={this.isOutsideRange}
                    numberOfMonths={1} />
            </div>
        )
    }
}

