import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ChartComponent: React.FC = () => {

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [0, 1, 3, 5, 10],
                borderColor: '#000',
                fill: false,
            },
        ],
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0.4,
                cubicInterpolationMode: 'monotone',
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: false
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                },
                suggestedMin: 0,
            }
        }
    };

    return (
        <Line data={chartData} options={chartOptions} />
    );
};
export default ChartComponent;