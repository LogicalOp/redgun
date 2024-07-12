import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card,CardHeader} from "@ui5/webcomponents-react";

class DonutChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div style={{width:"25%",display:"flex"}}>
                <Card header={<CardHeader titleText="Learnings" />}>
              
                
            
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
                </div>
                <div id="html-dist"></div>
                </Card>
            </div>
          
        );
    }
}

export default DonutChart;
