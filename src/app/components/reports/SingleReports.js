import React from "react";
//import Menu from '../components/menu'
// import LineChart from './LineChart'
// import PieChart from './PieChart';
import livescienceData from "../data/livescienceTestResult";
export default class SinglePage extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [
        { tittle: "livescience" },
        { tittle: "space" },
        { tittle: "tomsguide" }
      ],
      activeJob: "livescience",
      results: {
        livescience: livescienceData
      },
      savedReports: [{ tittle: "Current month" }]
    };
  }

  menuClickHandler(e) {
    alert("menu clicked" + e.target.id);
    this.setState({
      activeJob: e.target.id
    });
  }

  handleClick(event) {
    event.currentTarget.style.backgroundColor = "#ccc";
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            PURCH
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              {/* <Menu jobs={this.state.jobs} onClick={this.menuClickHandler} /> */}
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">DashBoard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-6">
                                    <LineChart data={this.state.results} activeJob={this.state.activeJob} />
                                </div>
                                <div className="col-6">
                                    <PieChart data={this.state.results} activeJob={this.state.activeJob} />

                                </div> */}
              </div>
              <h2>Test Reports</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
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
