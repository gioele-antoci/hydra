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
    detailsData?: hydra.detailsDatum[]
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
        this.state = {
            type: hydra.selectorType.temperatureChart,
            start,
            end: moment(),
            minStart: start
        };
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.start !== this.state.start || prevState.end !== this.state.end) {
            this.loadData();
        }
    }


    loadData() {
        //redirect to login page
        if (!restHelper.isLoggedIn()) {
            this.props.router.replace("/");
        }

        // make request for summary data and details data
        // when all data is ready render components
        else {
            this.setState({ detailsData: null });

            restHelper.details(this.state.start.toDate(), this.state.end.toDate())
                .then((response: hydra.detailsResponse) => {
                    if (response.success) {
                        this.setState({ detailsData: response.results });
                    }
                });

            restHelper.summary()
                .then((response: hydra.summaryResponse) => {
                    if (response.success) {
                        this.summaryData = response.results;
                        this.setState({ minStart: moment(response.results[response.results.length - 1].dateDebutPeriode) });
                    }
                });

        }
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
                        <DatePicker minStart={this.state.minStart} start={this.state.start} end={this.state.end} onChange={(start, end) => this.onDatesChange(start, end)} />
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
                return "Consumption and temperature are here grouped by week day. Do you spend more time at home during the weekend? Does this reflect on your consumption? And why wednesdeys are colder than any other day?";

            case hydra.selectorType.moneyChart:
                return "TIL: Did you know Hydro Quebec applyes a different rate per kw/h when you consume more than 30kw/h in a day?. Check how much you spend per day";
        }
    }
}

export default Home;
