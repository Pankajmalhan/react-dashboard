import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class AboutUsScreen extends Component {
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

      },
      savedReports: [
        { tittle: 'Current month' },
      ],
      listData: []
    }
    this.handleJobClick = this.handleJobClick.bind(this);
  }

  handleJobClick(tittle) {
    this.setState({ activeJob: tittle });
    console.dir(this);
  }

  newList = (input) => {
      var newData=new Array(1000).fill(input.target.value?input.target.value:'dummy')
      this.setState({listData:[...this.state.listData,...newData]})
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">About Us</a>
        </nav>
        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              {/* <Menu data={this.state} onClick={this.handleJobClick} /> */}
            </nav>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <input type="text" onChange={this.newList} style={{marginTop:10,backgroundColor:'yellow'}}/>
              {this.state.listData.map((item, index) => <p key={index}>{item}</p>)}
            </main>
          </div>
        </div>

      </div>
    );
  }
}

export default AboutUsScreen;