import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { jobsList } from "../../reducers/appReducer";
import { getSelectedJobData,changeLoadingStatus } from "../../actions/appActions";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeJobId: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.activeJobId == 0 && props.jobsList.length > 0) {
      return {
        activeJobId: props.jobsList[0].id
      }
    } else {
      return null
    }
  }
  onHandleJobClick(jobId) {
    this.props.changeLoadingStatus(true)
    this.props.getSelectedJobData(jobId)
    this.setState({activeJobId:jobId})
  }

  renderMenuItem = (job) => {
    return <li className="nav-item" key={job.id}>
      <div
        id={job.id}
        className={this.state.activeJobId == job.id ? "nav-link active" : "nav-link"}
        onClick={e => {
          this.onHandleJobClick(job.id);
        }}>
        <span>
          <div>{job.name}</div>
        </span>
      </div>
    </li>
  }

  render() {
    return (
      <div className="sidebar-sticky">
        <ul className="nav  nav-tabs flex-column ">
          {this.props.jobsList.map((job, index) => this.renderMenuItem(job))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobsList: jobsList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSelectedJobData,
      changeLoadingStatus
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
