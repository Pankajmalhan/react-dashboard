import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieCharts';
import livescienceData from '../../data/livescienceTestResult';
import spaceData from '../../data/spaceTestResult'
import tomsguideData from '../../data/tomsguideTestResult'
import TestReport from '../../components/reports/TestReports';
import Menu from '../../components/menu/Menu';
export class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        { tittle: 'livescience' },
        { tittle: 'space' },
        { tittle: 'tomsguide' },
      ],
      activeJob: 'livescience',
      data: {
        livescience: livescienceData,
        space: spaceData,
        tomsguide: tomsguideData

      },
      savedReports: [
        { tittle: 'Current month' },
      ],
    }
    this.handleJobClick = this.handleJobClick.bind(this);
  }

  handleJobClick(tittle) {
    this.setState({ activeJob: tittle });
    console.dir(this);
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
              <Menu data={this.state} onClick={this.handleJobClick} />
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
                  <LineChart data={this.state.data} activeJob={this.state.activeJob} />
                </div>
                <div class="col-6">
                  <PieChart  data={this.state.data} activeJob={this.state.activeJob} />
                </div>
              </div>
             <h2>Test Reports</h2>
              <TestReport data={this.state.data} activeJob={this.state.activeJob} />
            </main>
          </div>
        </div>
       
      </div>
    );
  }
}

export default DashboardScreen;