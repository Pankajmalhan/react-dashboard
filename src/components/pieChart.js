import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';

export default class pieChart extends React.Component {

    getTestcasesCountArray(data) {
        var passedCount = 0;
        var failedCount = 0;
        var brokenCount = 0;
        var skippedCount = 0;
        var unknownCount = 0;

        for (var key in data) {
            passedCount = passedCount + (data[key].statistic.passed);
            failedCount = failedCount + (data[key].statistic.failed);
            brokenCount = brokenCount + (data[key].statistic.broken);
            skippedCount = skippedCount + (data[key].statistic.skipped);
            unknownCount = unknownCount + (data[key].statistic.unknown);

        }

        var cdata = {
            'passedCount': passedCount,
            'failedCount': failedCount,
            'brokenCount': brokenCount,
            'skippedCount': skippedCount,
            'unknownCount': unknownCount,
        };

        return cdata;
    }

    constructor(props) {
        super(props);
    }

    render() {

        this.viewLimit = 20;
        this.testSuiteKeys = Object.keys(this.props.data[this.props.activeJob]);
        this.countData = this.getTestcasesCountArray(this.props.data[this.props.activeJob]);
        this.passedCount = this.countData.passedCount
        this.failedCount = this.countData.failedCount
        this.brokenCount = this.countData.brokenCount
        this.skippedCount = this.countData.skippedCount
        this.unknownCount = this.countData.unknownCount


        var parentData = {
            labels: ["PASSED", "FAILED", "BROKEN", "SKIPPED", "UNKNOWN"],
            datasets: [
                {
                    label: 'Number of passed testcases',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: ['rgba(75,192,192,1)', 'rgba(194, 46, 46, 1)', 'rgba(140, 99, 99, 1)', 'rgba(222, 209, 69, 1)', 'rgba(117, 26, 26, 1)'],
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointHoverRadius: 5,
                    pointHitRadius: 10,
                    data: [this.passedCount, this.failedCount, this.brokenCount, this.skippedCount, this.unknownCount]
                }
            ]
        };

        return (
            <div>
                <h2>{'Status for ' + this.props.activeJob}</h2>
                <Pie ref="chart" data={parentData} height='150%' />
            </div>
        );
    }
}