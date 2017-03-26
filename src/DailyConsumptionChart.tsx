import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";
import * as moment from 'moment';

import restHelper from './restHelper';

export default class DailyConsumptionChart extends React.Component<{ data: hydra.detailsDatum[] }, { chartData: Chart.LinearChartData }> {

    data: Chart.LinearChartData;
    options: Chart.ChartOptions = {
        maintainAspectRatio: true,
        responsive: true,

        scales: {
            yAxes: [
                {
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: { display: false },
                    ticks: {
                        reverse: true
                    }
                } as Chart.ChartXAxe,
                {
                    position: 'left',
                    id: 'y-axis-1'
                },
            ]
        }
    }

    constructor(props) {
        super(props);
        this.state = { chartData: null };
    }

    generateChartData(rawData: hydra.detailsDatum[]) {
        if (!rawData) {
            this.setState({ chartData: null });
            return;
        }

        const processedData: { [day: string]: { conso: number, temp: number, instances: number } } = {};
        rawData.map(val => {
            const key = moment(val.courant.dateJourConso).format("d");
            const y = processedData[key];
            if (!y) {
                processedData[key] = { conso: 0, temp: 0, instances: 0 };
            }

            processedData[key].conso += val.courant.consoTotalQuot;
            processedData[key].temp += restHelper.temperatureSanitizer(val);
            processedData[key].instances++;
        });

        const data =
            {
                labels: moment.weekdays(),
                datasets: [

                    {
                        type: 'line',
                        data: Object.keys(processedData).map(key => { return Math.round(processedData[key].temp / processedData[key].instances * 100) / 100 }),
                        borderColor: hydra.colors.accentColor,
                        label: 'Average temperature for a week/day',
                        yAxisID: 'y-axis-2',
                        fill: false,
                    },
                    {
                        data: Object.keys(processedData).map(key => { return Math.round(processedData[key].conso * 100) / 100 }),
                        backgroundColor: hydra.colors.defaultPrimaryColor,
                        label: "Consumption per day of week",
                        yAxisID: 'y-axis-1',
                    }
                ]
            } as Chart.LinearChartData;

        this.setState({ chartData: data });
    }

    componentDidMount() {
        this.generateChartData(this.props.data)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data === this.props.data) {
            return;
        }
        this.generateChartData(nextProps.data)
    }

    render() {
        if (this.state.chartData) {
            return (
                <div className="card">
                    <ChartReact.Bar data={this.state.chartData} options={this.options} />
                </div>
            );
        }
        else {
            return <div className="chart-loading spinner"></div>;
        }
    }
}