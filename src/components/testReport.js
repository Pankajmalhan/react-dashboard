import React, { Component } from 'react'

export default class testReport extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var jobData = this.props.data[this.props.activeJob];
        var jobDataKeys = Object.keys(jobData);


        return (
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>BuildID</th>
                            <th>Passed</th>
                            <th>Failed</th>
                            <th>Broken</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobDataKeys.map((id) =>
                            <tr>
                                <td>{id}</td>
                                <td>{jobData[id].statistic.passed}</td>
                                <td>{jobData[id].statistic.failed}</td>
                                <td>{jobData[id].statistic.broken}</td>
                                <td>{jobData[id].statistic.total}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}