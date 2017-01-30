import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";
import * as moment from 'moment';

export default class MoneyChart extends React.Component<any, any> {

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
                        // type: 'logarithmic',
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
                        data.datasets.forEach(dataset => {
                            cost += dataset.data[item.index] as number;
                        });

                        return `$${data.datasets[item.datasetIndex].label}: ${data.datasets[item.datasetIndex].data[item.index] as number}. Total cost for the day: $${this.round(cost)}.`
                    }
                }
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
                type: 'bar',
                labels: rawData.map(val => val.courant.dateJourConso),
                datasets: [
                    {
                        label: 'Fixed cost',
                        data: rawData.map(val => this.round(hydra.eletricityCost.fixed)),
                        backgroundColor: "#9E9E9E", //grey
                    },
                    {
                        label: 'Cost for electricity under 30kw/h',
                        data: rawData.map(val => this.round(this.getEnergyQuantity(val.courant.consoTotalQuot, 0, 30) * hydra.eletricityCost.energyUntil30Kwh)),
                        backgroundColor: "#4CAF50", //green
                    },
                    {
                        label: 'Cost for electricity above 30kw/h',
                        data: rawData.map(val => this.round(this.getEnergyQuantity(val.courant.consoTotalQuot, 30) * hydra.eletricityCost.energyAfter30Until50Kwh)),
                        backgroundColor: "#FDD835", //yellow
                    },
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
            return (<div>
                <ChartReact.Bar data={this.state.chartData} options={this.options} />
            </div>
            );
        }
        else {
            return <div className="chart-loading spinner"></div>;
        }
    }
}