import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

const LineChart=React.memo(function(props) {
    let getPassedCountArray=(data)=> {
        var passedCount = [];
        for (var key in data) {
            passedCount.push(data[key].statistic.passed);
        }
        return passedCount;
    }

        let viewLimit = 20;
        let testSuiteKeys = Object.keys(props.data[props.activeJob]);
        let passingCount = getPassedCountArray(props.data[props.activeJob]);
        let myLabels = (Array.from(Array(testSuiteKeys.length).keys())).map(e => 'build-' + e);

        let parentData = {
            labels: myLabels.slice(1, viewLimit),
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
                    data: passingCount.slice(1, viewLimit)
                }
            ]
        };
        return (
            <div>
                <h2>{props.activeJob}</h2>
                <Line  data={parentData} />
            </div>
        );   
})

export default LineChart;