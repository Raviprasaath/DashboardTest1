import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useFilters from '../Helper/useFilters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'X-Days and Y-Value',
    },
  },
  maintainAspectRatio : false,
};


const MainChart = () => {
  const { totalRevenue } = useFilters();

  let data1;
  let data2;
  if (totalRevenue && totalRevenue.length > 0) {
    if (typeof(totalRevenue[0]) === "number") {
      data1 = totalRevenue;
      data2 = totalRevenue;
    } else {
      data1 = totalRevenue[2];
      data2 = totalRevenue[0];
    }
  }

  const labels = [1,4,5,7,9,10,15,18,20,25];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Expected Grow',
        data: data1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Theoretical Grow',
        data: data2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      
    ],
  };

  return (
    <div className='flex flex-col max-w-screen-sm'>
      <h2 className='uppercase font-bold my-2'>Total Revenue</h2>
      <div className={`bg-white w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[40vw] h-[40vh]`}>
        <Line options={options} data={data}  />
      </div>
    </div>
  );
};

export default MainChart;
