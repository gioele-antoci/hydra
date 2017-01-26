import * as React from 'react';
import hydra from './interfaces';
import * as ChartReact from 'react-chartjs-2';
import * as Chart from "@types/chart.js";

export default class TemperatureChart extends React.Component<{ data: hydra.detailsDatum[] }, any> {

    data: Chart.LinearChartData;

    constructor(props) {
        super(props);
        this.state = { data: null };
    }


    componentWillMount() {
        const rawData = this.props.data;
        this.data =
            {
                labels: rawData.map(val => val.courant.dateJourConso),
                datasets: [
                    {
                        type: 'bar',
                        data: rawData.map(val => val.courant.consoTotalQuot),
                        label: "Consumption in kw/h"
                    } as any,
                    {
                        type: 'line',
                        data: rawData.map(val => val.courant.tempMoyenneQuot),
                        label: 'Average temperature',
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