import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const API = "http://203.122.22.229:8080";

export default function lineChart(props) {

  function getPassedCountArray(data) {
    var passedCount = [];
    for (var key in data) {
      passedCount.push(data[key].passed);
    }
    return passedCount;
  }
  var parentData;
  var viewLimit = 20;
  var passingCount = getPassedCountArray(props.data);
  var myLabels = Array.from(Array(props.data.length), (x, i) => 'build-' + (i));

  var parentData = {
    labels: myLabels,
    datasets: [
      {
        label: 'Number of passed testcases',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: passingCount
      }
    ]
  }
  return (
    <div>
      <div>
        <h2>{props.activeJobName}</h2>
        {props.isLoading ? <p>Loading...</p> : <Line data={parentData} />}
      </div>
    </div>
  );
}