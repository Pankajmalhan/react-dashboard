import React from "react";
import "../css/home.css";

export default class websites extends React.Component {
  constructor() {
    super();
    this.state = {
      websiteList: [
        { name: "space.com", lastRun: "4:00pm 08-08-2019", status: "98.5" },
        {
          name: "livescience.com",
          lastRun: "4:21pm 08-08-2019",
          status: "93.3"
        },
        {
          name: "androidcentral.com",
          lastRun: "4:24pm 08-08-2019",
          status: "92.5"
        },
        { name: "tftus.com", lastRun: "5:45pm 08-08-2019", status: "98" },
        { name: "myworld.com", lastRun: "5:50pm 08-08-2019", status: "95" },
        { name: "jokingworl.com", lastRun: "6:40pm 08-08-2019", status: "93" }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Website</th>
            <th>Last run</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.websiteList.map((website, key) => {
            return (
              <tr key={key}>
                <td>{website.name}</td>
                <td>{website.lastRun}</td>
                <td>{website.status} %</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
