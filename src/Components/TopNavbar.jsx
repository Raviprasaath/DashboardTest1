
import useScreenSize from "../Helper/useScreenSize";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../Slice/helperSlice";
import { FaBars } from "react-icons/fa";
import useFilters from "../Helper/useFilters";

const TopNavbar = () => {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();

  const {totalSales,totalEarning,totalOrders,totalMargin,marginRate,quantityReturned} = useFilters();

  const handlerToggler = () => {
    dispatch(toggleNavbar(true));
  };

  return (
    <>
      <div className=" flex flex-col justify-center relative">
        <div className="flex items-center gap-4 px-2 fixed top-0 bg-white w-full z-1">
          {screenSize < 900 && (
            <p onClick={handlerToggler} className="cursor-pointer">
              <FaBars />
            </p>
          )}
          <h2 className="uppercase font-bold py-2">Monthly Data</h2>
        </div>
        <div className="flex gap-4 flex-wrap bg-white p-4 justify-center mt-10">
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2 justify-center items-center rounded-md bg-blue-100`}
          >
            <p>Total Sales</p>
            <p className="font-bold w-full text-center">₹ {totalSales}</p>
          </div>
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2  justify-center items-center rounded-md bg-violet-100`}
          >
            <p>Total Earnings</p>
            <p className="font-bold w-full text-center">₹ {totalEarning}</p>
          </div>
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2  justify-center items-center rounded-md bg-green-100`}
          >
            <p>Total Orders</p>
            <p className="font-bold w-full text-center">{totalOrders}</p>
          </div>
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2  justify-center items-center rounded-md bg-orange-100`}
          >
            <p>Total Margin</p>
            <p className="font-bold w-full text-center">₹ {totalMargin}</p>
          </div>
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2  justify-center items-center rounded-md bg-teal-100`}
          >
            <p>Margin Rate</p>
            <p className="font-bold w-full text-center">{marginRate}%</p>
          </div>
          <div
            className={` ${
              screenSize < 900
                ? "text-sm w-36 h-16 px-2"
                : "text-md w-44 h-20 px-3"
            } flex gap-2  justify-center items-center rounded-md bg-yellow-100`}
          >
            <p>Quantity Returned</p>
            <p className="font-bold w-full text-center">{quantityReturned}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
