import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const EventsInsightsWidget = () => {
    const stackedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'bar',
            label: 'Meetings',
            backgroundColor: '#42A5F5',
            data: [
                50,
                25,
                12,
                48,
                190,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Calls',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ]
        }, {
            type: 'bar',
            label: 'Tasks',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    let stackedOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="card">
            <Chart type="bar" data={stackedData} options={stackedOptions} />
        </div> 
    );
}

export default EventsInsightsWidget;