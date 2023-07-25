import React from 'react'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarController } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler, BarController
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
const LineChart3 = () => {
    const [data, setdata] = useState({
        labels: ["12-Sep", "13-Sep", "14-Sep", "15-Sep", "16-Sep", "17-Sep", "18-Sep"],
        datasets: [
            {
                label: "",
                data: [0, 50, 25, 55, 45, 58, 70],
                // backgroundColor: "Yellow",
                borderColor: "blue",
                pointBackgroundColor: "blue",
                pointStyle: "rect"
            }
        ]
    })
    return (
        <>
                <Line style={{ width: "100%",height: "90%",marginBottom: "0px"}} data={data} options={options}></Line>
        </>
    )
}

export default LineChart3