import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class lineChart extends React.Component {

    getPassedCountArray(data) {
        var passedCount = [];
        for (var key in data) {
            passedCount.push(data[key].statistic.passed);
        }
        return passedCount;
    }

    constructor(props) {
        super(props);
    }
    render() {
        this.viewLimit = 20;
        this.testSuiteKeys = Object.keys(this.props.data[this.props.activeJob]);
        this.passingCount = this.getPassedCountArray(this.props.data[this.props.activeJob]);
        this.myLabels = (Array.from(Array(this.testSuiteKeys.length).keys())).map(e => 'build-' + e);

        var parentData = {
            labels: this.myLabels.slice(1, this.viewLimit),
            datasets: [
                {
                    label: 'Number of passed testcases',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.passingCount.slice(1, this.viewLimit)
                }
            ]
        };
        return (
            <div>
                <h2>{this.props.activeJob}</h2>
                <Line ref="chart" data={parentData} />
            </div>
        );
    }
}