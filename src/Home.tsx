import * as React from 'react';
import * as moment from 'moment';

import Selector from './Selector';
import TemperatureChart from './TemperatureChart';
import DailyConsumptionChart from './DailyConsumptionChart';
import MoneyChart from './MoneyChart';
import Header from './Header';
import DatePicker from './DatePicker';

import restHelper from './restHelper';
import hydra from './interfaces';

import "./css/Home.css";

class Home extends React.Component<any, {
    type: hydra.selectorType,
    start?: moment.Moment,
    end?: moment.Moment,
    minStart?: moment.Moment,
    maxEnd?: moment.Moment,
    detailsData?: hydra.detailsDatum[],
    disabled?: boolean
}> {

    // detailsData?: hydra.detailsDatum[] = [];
    summaryData?: hydra.summaryDatum[] = [];

    options: hydra.selectorOption[] = [
        {
            type: hydra.selectorType.temperatureChart,
            value: "kw/h-Temperature",
            callback: () => { this.setState({ type: hydra.selectorType.temperatureChart }) }
        },
        {
            type: hydra.selectorType.dailyConsumption,
            value: "Daily consumption",
            callback: () => { this.setState({ type: hydra.selectorType.dailyConsumption }) }
        },
        {
            type: hydra.selectorType.moneyChart,
            value: "$ cost break down",
            callback: () => { this.setState({ type: hydra.selectorType.moneyChart }) }
        }
    ];

    constructor(props) {
        super(props);
        const start = moment().subtract(30, "days");
        const end = moment();
        this.state = {
            type: hydra.selectorType.temperatureChart,
            start,
            end,
            minStart: start,
            maxEnd: end,
            disabled: true
        };
    }

    componentDidMount() {
        const promise = this.loadData();
        // the very first load, read the latest value and set it as the maximum the date range can ever go.
        // during the first load we in fact try to render until today's date. HydroQuebec will return the last day available
        // add a day because react.dates is implemented in an exclusive way
        promise.then(() =>
            this.setState({ maxEnd: moment(this.state.detailsData[this.state.detailsData.length - 1].courant.dateJourConso).add(1, "days") }));

    }

    componentDidUpdate(prevProps, prevState) {
        //only if different
        if (prevState.start !== this.state.start || prevState.end !== this.state.end) {
            this.loadData();
        }
    }

    loadData(): Promise<void> {
        // make request for summary data and details data
        // when all data is ready render components
        this.setState({ detailsData: null, disabled: true });

        const promises = [];
        promises.push(restHelper.details(this.state.start.toDate(), this.state.end.toDate())
            .then((response: hydra.detailsResponse) => {
                if (response.success) {
                    this.setState({ detailsData: response.results });
                    Promise.resolve();
                }
            }));

        promises.push(restHelper.summary()
            .then((response: hydra.summaryResponse) => {
                if (response.success) {
                    this.summaryData = response.results;
                    this.setState({ minStart: moment(response.results[response.results.length - 1].dateDebutPeriode) });
                    Promise.resolve();
                }
            }));

        return Promise.all(promises).then(x => {
            this.setState({ disabled: false });
            Promise.resolve();
        });
    }

    onDatesChange(start: moment.Moment, end: moment.Moment) {
        this.setState({
            start,
            end
        });
    }

    render() {
        return (
            <div className="page-root">
                <Header />
                <div className="content">
                    <div className="left-column">
                        <Selector options={this.options} active={this.state.type} />
                    </div>
                    <div className="center-column">
                        <DatePicker disabled={this.state.disabled} minStart={this.state.minStart} maxEnd={this.state.maxEnd} start={this.state.start} end={this.state.end}
                            onChange={(start, end) => this.onDatesChange(start, end)} />
                        <div className="chart-label">{this.renderActiveChartLabel()}</div>
                        <div className={`chart-content ${this.state.detailsData ? "" : "loading"}`}>
                            <div className={`chart-container ${this.state.detailsData ? "card" : ""}`}>{this.renderActiveChartComponent()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderActiveChartComponent() {
        switch (this.state.type) {
            case hydra.selectorType.temperatureChart:
                return (<TemperatureChart data={this.state.detailsData} />)

            case hydra.selectorType.dailyConsumption:
                return (<DailyConsumptionChart data={this.state.detailsData} />)

            case hydra.selectorType.moneyChart:
                return (<MoneyChart data={this.state.detailsData} />)
        }
    }

    renderActiveChartLabel() {
        switch (this.state.type) {
            case hydra.selectorType.temperatureChart:
                return "Analyze the correlation between the falling temperature and the raising consumption. Note that during the winter the temperature axis is reversed for an easier visual correlation";

            case hydra.selectorType.dailyConsumption:
                return "Consumption and temperature are here grouped by week day. Do you spend more time at home during the weekend? Does this reflect on your consumption? And why Wednesdey is the warmest day?";

            case hydra.selectorType.moneyChart:
                return "TIL: Did you know Hydro Quebec applies a different rate per kw/h when you consume more than 30kw/h? Check how much you spend per day, how much/often are you exceeding the 30kw/h threshold";
        }
    }
}

export default Home;
