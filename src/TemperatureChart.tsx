import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";
import * as moment from 'moment';

export default class TemperatureChart extends React.Component<{ data: hydra.detailsDatum[] }, { chartData: Chart.LinearChartData }> {

    data: Chart.LinearChartData;
    options: Chart.ChartOptions;

    constructor(props) {
        super(props);
        this.state = { chartData: [] };

        this.options = {
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

    generateChartData(rawData: hydra.detailsDatum[]) {
        if (!rawData) {
            this.setState({ chartData: null });
            return;
        }

        rawData = rawData.sort((a, b) => (moment(a.courant.dateJourConso).toDate() as any) - (moment(b.courant.dateJourConso).toDate() as any));
        const data =
            {
                labels: rawData.map(val => val.courant.dateJourConso),
                datasets: [
                    {
                        type: 'line',
                        data: rawData.map(val => val.courant.tempMoyenneQuot),
                        borderColor: hydra.colors.accentColor,
                        label: 'Average temperature',
                        yAxisID: 'y-axis-2',
                        fill: false,
                    },
                    {
                        type: 'bar',
                        data: rawData.map(val => val.courant.consoTotalQuot),
                        backgroundColor: hydra.colors.defaultPrimaryColor,
                        label: "Consumption in kw/h",
                        yAxisID: 'y-axis-1'
                    } as Chart.ChartDataSets,
                ],

            } as Chart.LinearChartData;

        this.setState({ chartData: data });
    }

    render() {
        if (this.state.chartData) {
            return (<div>
                <ChartReact.Bar data={this.state.chartData} options={this.options} />
            </div>
            );
        }
        else {
            return <div className="chart-loading">Loading...</div>;
        }
    }
}