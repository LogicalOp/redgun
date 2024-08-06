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
        },
        labels: ['A','B', 'C', 'D', 'E'],
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
      series: [69, 55, 41, 17, 15]
      
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
