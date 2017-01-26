import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";
import * as moment from 'moment';

export default class DailyConsumptionChart extends React.Component<{ data: hydra.detailsDatum[] }, any> {

    data: Chart.LinearChartData;

    constructor(props) {
        super(props);
        this.state = { data: null };
    }


    componentWillMount() {
        const rawData = this.props.data;

        const processedData: { [day: string]: number } = {};
        rawData.map(val => {
            const key = moment(val.courant.dateJourConso).format("d");
            const y = processedData[key];
            if (!y) { processedData[key] = 0; }
            processedData[key] += val.courant.consoTotalQuot;
        });

        this.data =
            {
                labels: moment.weekdays(),
                datasets: [
                    {
                        data: Object.keys(processedData).map(key => { return Math.round(processedData[key] * 100) / 100 }),
                        label: "Consumption per day of week"
                    }
                ]
            } as Chart.LinearChartData;
    }

    render() {
        return (<div>
            <ChartReact.Bar data={this.data} />
        </div>
        );
    }
}