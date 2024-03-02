import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useFilters from '../Helper/useFilters';

ChartJS.register(ArcElement, Tooltip, Legend);

const BottomPieChart = () => {

  const { saleDetail } = useFilters();

  let dataMerge;
  let labelArray = [];
  let dataArray = [];

  let randomNumber = Math.floor(Math.random()*5 );

  if (saleDetail) {
    if (saleDetail.length === 10 ){
      dataMerge = saleDetail[randomNumber];
    } else if (saleDetail.length === 8) {
      dataMerge = saleDetail;
    } else if (saleDetail.length === 7) {
      dataMerge = saleDetail;
    } else {
      dataMerge = saleDetail;
    }
  }
  
  for (let i in dataMerge) {
    labelArray.push(dataMerge[i].category);
    dataArray.push(dataMerge[i].percentage);
  }

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: '# of Votes',
        data: dataArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div className='flex flex-col'>
      <h2 className='uppercase font-bold my-2'>Sales Details</h2>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[35vw] h-[50vh] '>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
    </>
  )
}

export default BottomPieChart
