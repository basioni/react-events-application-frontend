import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const EventsStatusWidget = () => {
    const [chartData] = useState({
        labels: ['Completed','Not Held', 'Pending', 'Cancelled'],
        datasets: [
            {
                data: [100 , 100, 50, 100],
                backgroundColor: [
                    "#339933",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#339933",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
       <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '80%' }} />
        </div>
    );
}

export default EventsStatusWidget;