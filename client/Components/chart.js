import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineStylesDemo( props ) {
    const [chartData, setChartData] = useState({});


    useEffect(() => {

        const data = {
            labels: ['', '', '', '', '', '', '','','',''],
            datasets: [
                
                {
                    label: '',
                    data: props.data,
                    fill: true,
                    borderColor: props.borderColor,
                    tension: 0.4,
                    backgroundColor: props.backgroundColor
                    
                }
            ]
        };

        setChartData(data);
    }, [props.backgroundColor , props.borderColor , props.data]);

    const chartOptions = {
        scales: {
            x: {
                display: false 
            },
            y: {
                display: false 
            }
        }
    };

    return (
  <div className="card" style={{borderRadius:'22px'}}>
    <Chart type="line" data={chartData} options={chartOptions} height="150px" width="200px" />
  </div>
    );
}
