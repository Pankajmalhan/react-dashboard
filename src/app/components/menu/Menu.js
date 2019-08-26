import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: props.data.jobs
    };
  }

  componentDidMount() {}

  onHandleClick(e, id) {
    this.props.onClick(id);
    console.log("onhandleCLICK()", id);
  }

  onHandleJobClick(target, e, jobTittle) {
    this.props.onClick(jobTittle);
  }

  render() {
    console.log("render menu" + this.props.data.activeJob);
    return (
      <div className="sidebar-sticky">
        <ul className="nav  nav-tabs flex-column ">
          {this.state.jobs.map((job, id) => (
            <li className="nav-item" key={job.tittle}>
              {this.props.data.activeJob == job.tittle ? (
                <div
                  id={job.tittle}
                  className="nav-link active"
                  onClick={e => {
                    this.onHandleJobClick(e, this, job.tittle);
                  }}
                >
                  <span>
                    <div>{job.tittle + "-job"}</div>
                  </span>
                </div>
              ) : (
                <div
                  id={job.tittle}
                  className="nav-link"
                  onClick={e => {
                    this.onHandleJobClick(e, this, job.tittle);
                  }}
                >
                  <span>
                    <div>{job.tittle + "-job"}</div>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
