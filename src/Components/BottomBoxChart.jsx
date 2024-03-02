import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useFilters from '../Helper/useFilters';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'X-Products and Y-Value',
    },
  },
  maintainAspectRatio : false
};


const BottomBoxChart = () => {

  const { latestOrder } = useFilters();
  
  let dataMerge;
  let labelArray = [];
  let dataArray1 = [];
  let dataArray2 = [];

  let randomNumber = Math.floor(Math.random()*5 );

  if (latestOrder) {
    if (latestOrder.length === 10 ){
      dataMerge = latestOrder[randomNumber];
    } else if (latestOrder.length === 8) {
      dataMerge = latestOrder;
    } else if (latestOrder.length === 5) {
      dataMerge = latestOrder[0];
    } else {
      dataMerge = latestOrder;
    }
  }


  
  for (let i in dataMerge) {
    labelArray.push(dataMerge[i].product);
    dataArray1.push(dataMerge[i].expectedSale);
    dataArray2.push(dataMerge[i].actualSale);
  }

  const labels = labelArray;

  const data = {
    labels,
    datasets: [
      {
        label: 'Expected Sale',
        data: dataArray1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Actual Sale',
        data: dataArray2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
    <div className='flex flex-col'>
      <h2 className='uppercase font-bold my-2'>Latest Orders</h2>
      <div className='w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[40vw] h-[50vh] bg-white'>
        <Bar options={options} data={data} />
      </div>
    </div>
    </>
  )
}

export default BottomBoxChart
