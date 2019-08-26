import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default function pieChart(props) {
  let getTestcasesCountArray = data => {
    var passedCount = 0;
    var failedCount = 0;
    var brokenCount = 0;
    var skippedCount = 0;
    var unknownCount = 0;

    for (var key in data) {
      passedCount = passedCount + data[key].statistic.passed;
      failedCount = failedCount + data[key].statistic.failed;
      brokenCount = brokenCount + data[key].statistic.broken;
      skippedCount = skippedCount + data[key].statistic.skipped;
      unknownCount = unknownCount + data[key].statistic.unknown;
    }

    var cdata = {
      passedCount: passedCount,
      failedCount: failedCount,
      brokenCount: brokenCount,
      skippedCount: skippedCount,
      unknownCount: unknownCount
    };

    return cdata;
  };

  let viewLimit = 20;
  let testSuiteKeys = Object.keys(props.data[props.activeJob]);
  let countData = getTestcasesCountArray(props.data[props.activeJob]);
  let passedCount = countData.passedCount;
  let failedCount = countData.failedCount;
  let brokenCount = countData.brokenCount;
  let skippedCount = countData.skippedCount;
  let unknownCount = countData.unknownCount;

  var parentData = {
    labels: ["PASSED", "FAILED", "BROKEN", "SKIPPED", "UNKNOWN"],
    datasets: [
      {
        label: "Number of passed testcases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgba(194, 46, 46, 1)",
          "rgba(140, 99, 99, 1)",
          "rgba(222, 209, 69, 1)",
          "rgba(117, 26, 26, 1)"
        ],
        borderDash: [],
        borderDashOffset: 0.0,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        data: [
          passedCount,
          failedCount,
          brokenCount,
          skippedCount,
          unknownCount
        ]
      }
    ]
  };

  return (
    <div>
      <h2>{"Status for " + props.activeJob}</h2>
      <Pie data={parentData} height="150%" />
    </div>
  );
}
