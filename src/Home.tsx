import * as React from 'react';
import Selector from './Selector';
import TemperatureChart from './TemperatureChart';
import DailyConsumptionChart from './DailyConsumptionChart';
import * as moment from 'moment';

import restHelper from './restHelper';
import hydra from './interfaces';

import "./css/Home.css";

class Home extends React.Component<any, { type: hydra.selectorType, summaryData?: hydra.summaryDatum[], detailsData?: hydra.detailsDatum[] }> {
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
        }
    ];

    constructor(props) {
        super(props);
        this.state = { type: hydra.selectorType.temperatureChart };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        //redirect to login page
        if (!restHelper.isLoggedIn()) {
            this.props.router.replace("/login");
        }

        // make request for summary data and details data
        // when all data is ready render components
        else {
            restHelper.summary()
                .then((response: hydra.summaryResponse) => {
                    if (response.success) {
                        this.setState({ summaryData: response.results });
                    }
                });

            const now = moment();
            restHelper.details(now.toDate(), now.subtract(30, "days").toDate())
                .then((response: hydra.detailsResponse) => {
                    if (response.success) {
                        this.setState({ detailsData: response.results });
                    }
                });
        }
    }

    render() {
        if (!this.state.summaryData || !this.state.detailsData) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="page-root">
                    <div className="left-column">
                        <Selector options={this.options} active={this.state.type} />
                    </div>
                    <div className="center-column">
                        {this.renderActiveChartComponent()}
                    </div>

                </div>
            )
        }
    }

    renderActiveChartComponent() {
        switch (this.state.type) {
            case hydra.selectorType.temperatureChart:
                return (<TemperatureChart data={this.state.detailsData} />)

            case hydra.selectorType.dailyConsumption:
                return (<DailyConsumptionChart data={this.state.detailsData}/>)
        }
    }
}

export default Home;
