
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {

    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
        {
            data: [3000, 8000, 4000, 4500, 5000, 5500, 6000, 12000, 6500, 15000, 7000],
            backgroundColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 10,
        },
        {
            data: [1500, 6000, 3000, 2500, 7000, 3500, 4500, 9000, 15000, 14000, 3000],
            backgroundColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 10,
        },
        {
            data: [7500, 9500, 11500, 13500, 15500, 2500, 4500, 6500, 8500, 10500, 12500],
            backgroundColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 10,
        },
        {
            data: [12000, 8000, 5000, 2000, 11000, 10000, 13000, 4000, 16000, 6000, 10000],
            backgroundColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 10,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 15000,
        },
    },
};

const ActivityChart = () => {
    return (
        <div className="p-4 bg-gray-900 rounded-lg w-2/5">
            <p className='text-white text-sm pb-5'>Activity</p>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ActivityChart;
