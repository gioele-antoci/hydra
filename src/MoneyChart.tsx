import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";
import * as moment from 'moment';

import "./css/MoneyChart.css";
import restHelper from './restHelper';

export default class MoneyChart extends React.Component<{ data: hydra.detailsDatum[] }, { chartData: Chart.LinearChartData, fullCost?: number, averageTemperature?: number }> {

    data: Chart.LinearChartData;
    options: Chart.ChartOptions;

    constructor(props) {
        super(props);
        this.state = { chartData: null };

        this.options = {
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
                        id: 'y-axis-1',
                        position: 'left',
                        stacked: true,
                        ticks: {
                            callback: (cost: number) => {
                                if (cost < 1) {
                                    return "c$ " + this.round(cost);
                                }
                                else {
                                    return "$" + this.round(cost);
                                }
                            },
                            beginAtZero: 0
                        }
                    } as Chart.ChartYAxe,

                ],
                xAxes: [{ stacked: true }]
            },
            tooltips: {
                callbacks: {
                    label: (item, data: Chart.LinearChartData) => {
                        let cost = 0;
                        data.datasets.filter(dataset => (dataset as any).type === "bar").forEach(dataset => {
                            cost += dataset.data[item.index] as number;
                        });

                        if ((data.datasets[item.datasetIndex] as any).type === "bar") {
                            return `$${data.datasets[item.datasetIndex].label}: ${data.datasets[item.datasetIndex].data[item.index] as number}. Total cost for the day: $${this.round(cost)}.`
                        }

                        else {
                            return `${data.datasets[item.datasetIndex].label}: ${data.datasets[item.datasetIndex].data[item.index] as number}˚`;
                        }
                    }
                }
            }
        }
    }

    componentDidMount() {
        if (!this.props.data) {
            this.setState({ chartData: null });
            return;
        }

        this.generateChartData(this.props.data)
        this.calculateFullCost(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.data) {
            this.setState({ chartData: null });
            return;
        }

        else if (nextProps.data === this.props.data) {
            return;
        }
        this.generateChartData(nextProps.data);
        this.calculateFullCost(nextProps.data);
    }

    calculateFullCost(rawData: hydra.detailsDatum[]) {
        let fullCost = 0;
        let averageTemp = 0;
        rawData.forEach(x => {
            fullCost += hydra.eletricityCost.fixed +
                (this.getEnergyQuantity(x.courant.consoTotalQuot, 0, 30) * hydra.eletricityCost.energyUntil30Kwh) +
                (this.getEnergyQuantity(x.courant.consoTotalQuot, 30) * hydra.eletricityCost.energyAfter30Until50Kwh);

            averageTemp += restHelper.temperatureSanitizer(x);
        });

        this.setState({ fullCost: this.round(fullCost), averageTemperature: this.round(averageTemp / rawData.length) });
    }

    generateChartData(rawData: hydra.detailsDatum[]) {
        rawData = rawData.sort((a, b) => (moment(a.courant.dateJourConso).toDate() as any) - (moment(b.courant.dateJourConso).toDate() as any));
        const data =
            {
                type: 'bar',
                labels: rawData.map(val => val.courant.dateJourConso),
                datasets: [
                    {
                        type: 'line',
                        data: rawData.map(val => restHelper.temperatureSanitizer(val)),
                        borderColor: hydra.colors.accentColor,
                        label: 'Average temperature',
                        yAxisID: 'y-axis-2',
                        fill: false,
                    },
                    {
                        type: 'bar',
                        yAxisID: 'y-axis-1',
                        label: 'Fixed cost',
                        data: rawData.map(val => this.round(hydra.eletricityCost.fixed)),
                        backgroundColor: "#9E9E9E", //grey
                    },
                    {
                        type: 'bar',
                        yAxisID: 'y-axis-1',
                        label: 'Cost for electricity under 30kw/h',
                        data: rawData.map(val => this.round(this.getEnergyQuantity(val.courant.consoTotalQuot, 0, 30) * hydra.eletricityCost.energyUntil30Kwh)),
                        backgroundColor: "#4CAF50", //green
                    },
                    {
                        type: 'bar',
                        yAxisID: 'y-axis-1',
                        label: 'Cost for electricity above 30kw/h',
                        data: rawData.map(val => this.round(this.getEnergyQuantity(val.courant.consoTotalQuot, 30) * hydra.eletricityCost.energyAfter30Until50Kwh)),
                        backgroundColor: "#FDD835", //yellow
                    } as Chart.ChartDataSets
                    // {
                    //     label: 'Cost for eletricity above 50kw/h',
                    //     data: rawData.map(val => this.round(this.getEnergyQuantity(val.courant.consoTotalQuot, 50) * hydra.eletricityCost.energyAfter50KwhWinter)),
                    //     backgroundColor: "#E64A19", //red
                    // },
                ]
            } as Chart.LinearChartData;

        this.setState({ chartData: data });
    }

    private getEnergyQuantity(energy: number, lowerLimit: number, upperLimit?: number): number {
        if (energy < lowerLimit) {
            return 0;
        }

        else {
            return energy > upperLimit && upperLimit ? upperLimit : energy - lowerLimit;
        }
    }

    private round(num: number): number {
        return Math.round(num * 1000) / 1000;
    }

    render() {
        if (this.state.chartData) {
            return (
                <div>
                    <div className="money-chart-info">
                        <span className="total-cost card"><i className="material-icons">attach_money</i>Cost for the period selected: ${this.state.fullCost}</span>
                        <span className="average-temperature card"><i className="material-icons">ac_unit</i>Average temperature for the period selected: {this.state.averageTemperature}˚</span>
                    </div>
                    <div className="card chart-wrapper"><ChartReact.Bar data={this.state.chartData} options={this.options} /></div>
                </div>

            );
        }
        else {
            return <div className="chart-loading spinner"></div>;
        }
    }
}