import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterSelections } from '../Slice/helperSlice';

const SideNavbar = () => {
  const [filterSelection, setFilterSelection] = useState(["lastMonth"]);

  const dispatch = useDispatch();

  const handlerSelectPeriod = (e) => {
    let dummy = filterSelection;
    if (filterSelection.length === 0) {
      dummy.push(e.target.value);
    } else if (dummy.includes("lastQuarter")) {
      let temp = dummy.filter((item)=>item !== "lastQuarter");
      temp.push(e.target.value);
      dummy = temp;
    } else if (dummy.includes("lastMonth")) {
      let temp = dummy.filter((item)=>item !== "lastMonth");
      temp.push(e.target.value);
      dummy = temp;
    } else if (dummy.includes("currentYear")) {
      let temp = dummy.filter((item)=>item !== "currentYear");
      temp.push(e.target.value);
      dummy = temp;
    } else {
      dummy.push(e.target.value);
    }
    setFilterSelection(dummy);
  }
  
  const handlerChannel = (e) => {
    let dummy = filterSelection;

    if (e.target.value === "website" || dummy.includes("store")) {
      let temp = dummy.filter((item)=>item !== "store");
      temp.push(e.target.value);
      dummy = temp;
    } else if (e.target.value === "store" ||  dummy.includes("website")) {
      let temp = dummy.filter((item)=>item !== "website");
      temp.push(e.target.value);
      dummy = temp;
    } else {
      if (e.target.value !== "null") {
        dummy.push(e.target.value);
      }
    }
    let nullUnSelector = dummy.filter((item)=>item !== "null");
    setFilterSelection(nullUnSelector);
  }

  const handlerOrderType = (e) => {
    const selectedValue = e.target.value;
    let dummy = filterSelection.filter(item => item !== selectedValue);
    const otherOrderTypes = ["cashOnDelivery", "creditCard", "debitCard", "applePay", "upi"];
    dummy = dummy.filter(item => !otherOrderTypes.includes(item));
    dummy.push(selectedValue);
    const nullUnSelector = dummy.filter(item => item !== "null");
    setFilterSelection(nullUnSelector);
  }
  
  const handlerOrderByWarehouse = (e) => {
    const selectedValue = e.target.value;
    let dummy = filterSelection.filter(item => item !== selectedValue);
    const otherOrderTypes = ["bangalore", "chennai", "mumbai", "delhi", "gujarat"];
    dummy = dummy.filter(item => !otherOrderTypes.includes(item));
    dummy.push(selectedValue);
    const nullUnSelector = dummy.filter(item => item !== "null");
    setFilterSelection(nullUnSelector);
  }
  
  useEffect(()=> {
    dispatch(filterSelections(filterSelection));
  }, [filterSelection])


  return (
    <div className='flex flex-col gap-3 p-2 bg-white'>
      <h2 className='uppercase font-bold'>Analytics Dashboard</h2>
      <div className='flex justify-between gap-2 hidden'>
        <label htmlFor="lastMonth">Last Month</label>
        <input type="radio" defaultChecked={true} id="lastMonth" name="typeOfPeriod" value="lastMonth" onChange={handlerSelectPeriod} />
      </div>
      {/* <div className='flex justify-between gap-2'>
        <label htmlFor="lastQuarter">Last Quarter</label>
        <input type="radio" id="lastQuarter" name="typeOfPeriod" value="lastQuarter" onChange={handlerSelectPeriod} />
      </div>
      <div className='flex justify-between gap-2'>
        <label htmlFor="currentYear">Current Year</label>
        <input type="radio" defaultChecked={true} id="currentYear" name="typeOfPeriod" value="currentYear" onChange={handlerSelectPeriod} />
      </div> */}

      <div className='flex flex-col border-b-2'>
        <label>Order Channel</label>
        <select onChange={handlerChannel}>
          <option value="null">None Selected</option>
          <option value="store">Store</option>
          <option value="website">Website</option>
        </select>
      </div>
      <div className='flex flex-col border-b-2'>
        <label>Order Type</label>
        <select onChange={handlerOrderType}>
          <option value="null">None Selected</option>
          <option value="cashOnDelivery">Cash On Delivery</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="applePay">Apple Pay</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      <div className='flex flex-col border-b-2'>
        <label>Warehouses</label>
        <select onChange={handlerOrderByWarehouse}>
          <option value="null">None Selected</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="mumbai">Mumbai </option>
          <option value="delhi">Delhi</option>
          <option value="gujarat">Gujarat</option>
        </select>
      </div>
    </div>
  )
}

export default SideNavbar;