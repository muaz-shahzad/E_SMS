import React from 'react'
import { useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler, BarElement, ArcElement
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

const PieChart4 = () => {
  const [data, setdata] = useState({
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Purple',
      'green',
      'indigo'
    ],
    datasets: [
      {
        label: "Messages",
        data: [0, 60, 30, 40, 55, 70],

        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'purple',
          'green',
          'indigo'
        ],
        borderColor: "black",
        pointBackgroundColor: "blue",
        pointStyle: "rect"
      }
    ]
  })
  return (
    <>
      <div className='' style={{height: "37vh",width:"18vw",margin: "auto"}}>
                <Pie className='' data={data} options={options}></Pie>
      </div>
    </>
  )
}

export default PieChart4