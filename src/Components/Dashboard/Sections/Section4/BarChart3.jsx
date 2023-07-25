import React from 'react'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler, BarElement
)
const options = {
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false,
                min: 0,
                stepSize: 1,
            },
            grid: {
                display: false
            }
        }],
        x: {
            grid: {
                display: false
            }
        },
    },
};


const BarChart3 = () => {
    const [data, setdata] = useState({
        labels: ["12-Sep", "13-Sep", "14-Sep", "15-Sep", "16-Sep", "17-Sep", "18-Sep"],
        datasets: [
            {
                label: "Messages",
                data: [5, 10, 15, 30, 15, 10, 5],
                backgroundColor: "blue",
                borderColor: "blue",
                pointBackgroundColor: "blue",
                pointStyle: "rect"
            }
        ]
    })
    return (
        <>
           
                <Bar style={{ width: "100%",height: "90%",marginBottom: "0px"}}  data={data} options={options}></Bar>
        </>
    )
}

export default BarChart3