import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieCharts";
import TestReport from "../../components/reports/TestReports";
import Menu from "../../components/menu/Menu";
import { getAppDataSelector } from "../../reducers/appReducer";
import { dashboardClickHandler } from "../../actions/dashBoardActions";
export class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        { tittle: "livescience" },
        { tittle: "space" },
        { tittle: "tomsguide" }
      ],
      activeJob: "livescience",
      // data: {
      //   livescience: livescienceData,
      //   space: spaceData,
      //   tomsguide: tomsguideData

      // },
      savedReports: [{ tittle: "Current month" }]
    };
    this.handleJobClick = this.handleJobClick.bind(this);
  }

  handleJobClick(tittle) {
    this.setState({ activeJob: tittle });
    this.props.itemClickHandler(tittle);
    console.dir(this);
  }

  render() {
    console.log("render called");
    const { dashboardData, loading } = this.props;
    // const {livescience,space,tomsguide} = globalData;
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            PURCH
          </a>
          <div style={{ color: "white", marginRight: "50px" }}>
            {dashboardData.loading ? (
              <h2>Fetching</h2>
            ) : (
              <div>The Count is {dashboardData.count}</div>
            )}
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <Menu data={this.state} onClick={this.handleJobClick} />
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
                <div className="col-6">
                  {/* <LineChart data={this.state.data} activeJob={this.state.activeJob} /> */}
                  <LineChart
                    data={dashboardData}
                    activeJob={this.state.activeJob}
                  />
                </div>
                <div className="col-6">
                  {/* <PieChart  data={this.state.data} activeJob={this.state.activeJob} /> */}
                  <PieChart
                    data={dashboardData}
                    activeJob={this.state.activeJob}
                  />
                </div>
              </div>
              <h2>Test Reports</h2>
              {/* <TestReport data={this.state.data} activeJob={this.state.activeJob} /> */}
              <TestReport
                data={dashboardData}
                activeJob={this.state.activeJob}
              />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // dashboardData: {...state.chartReducer,...state.menuReducer,...state.reportReducer}
    dashboardData: getAppDataSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      itemClickHandler: dashboardClickHandler
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
