import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@ui5/webcomponents-react";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "donut",
          width: props.width || '50%', // Use props.width or default to 100%
          height: props.height || '50%' // Use props.height or default to 100%
        },
        labels: props.labels || ['A', 'B', 'C', 'D', 'E'], // Use props.labels or default labels
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: props.series || [69, 55, 41, 17, 15] // Use props.series or default series
    };
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Card header={<CardHeader titleText="Learnings" />}>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
            />
          </div>
          <div id="html-dist"></div>
        </Card>
      </div>
    );
  }
}

export default DonutChart;