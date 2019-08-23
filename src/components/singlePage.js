import React from 'react';
import Menu from '../components/menu'
import LineChart from '../components/lineChart'
import PieChart from './pieChart';
import livescienceData from '../data/livescienceTestResult';
export default class singlePage extends React.Component {

    constructor() {
        super();

        this.state = {
            jobs: [
                { tittle: 'livescience' },
                { tittle: 'space' },
                { tittle: 'tomsguide' },
            ],
            activeJob: 'livescience',
            results: {
                livescience: livescienceData
            },
            savedReports: [
                { tittle: 'Current month' },
            ],
        };
    }

    menuClickHandler(e) {
        alert('menu clicked' + e.target.id);
        this.setState({
            activeJob: e.target.id
        })

    }

    handleClick(event) {
        event.currentTarget.style.backgroundColor = '#ccc';
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">PURCH</a>
                </nav>
                <div class="container-fluid">
                    <div class="row">
                        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                            <Menu jobs={this.state.jobs} onClick={this.menuClickHandler} />
                        </nav>

                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 class="h2">DashBoard</h1>
                                <div class="btn-toolbar mb-2 mb-md-0">
                                    <div class="btn-group mr-2">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar"></span>
                                        This week
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <LineChart data={this.state.results} activeJob={this.state.activeJob} />
                                </div>
                                <div class="col-6">
                                    <PieChart data={this.state.results} activeJob={this.state.activeJob} />

                                </div>
                            </div>
                            <h2>Test Reports</h2>
                            <div class="table-responsive">
                                <table class="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>BuildID</th>
                                            <th>BuildNumber</th>
                                            <th>Passed</th>
                                            <th>Failed</th>
                                            <th>Broken</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
                <script src="/docs/4.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
            </div>
        );
    }
}