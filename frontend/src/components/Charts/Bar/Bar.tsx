import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, ChartOptions } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip);

interface Props {
  data: {
    labels: string[];
    datasets: { label: string; data: number[]; borderColor: string }[];
  };
}

export const BarChart = ({ data }: Props) => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: false,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
};
