import * as React from 'react';
import hydra from './interfaces';
import * as Chart from 'react-chartjs-2';

export default class TemperatureChart extends React.Component<{ data: hydra.detailsDatum[] }, any> {

    data: LinearChartData;

    constructor(props) {
        super(props);
        this.setState({ data: null });
    }


    componentWillMount() {

        const rawData = this.props.data;
        this.data;

    }

    render() {
        return (<div>
            <Chart.Bar data={this.data} />
        </div>
        );
    }
}