import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import useFilters from '../Helper/useFilters';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const RightNavbar = () => {
  const { topSoldProduct } = useFilters();
  let dataMerge;
  let labelArray = [];
  let dataArray = [];

  let randomNumber = Math.floor(Math.random()*5 );

  if (topSoldProduct) {
    if (topSoldProduct.length === 10 ){
      dataMerge = topSoldProduct[randomNumber];
    } else if (topSoldProduct.length === 5) {
      dataMerge = topSoldProduct[0];
    } else {
      dataMerge = topSoldProduct;
    }
  }  
  
  for (let i in dataMerge) {
    labelArray.push(i);
    dataArray.push(dataMerge[i]);
  }

  
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: '# of Votes',
        data: dataArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <>
    <div className='flex flex-col max-w-screen-sm'>
      <h2 className='uppercase font-bold my-2'>Top Sold Products</h2>
      <div className='bg-white flex flex-col justify-center items-center w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[35vw] h-[40vh]'>
        <PolarArea data={data} />
      </div>
    </div>
    </>
  )
}

export default RightNavbar
