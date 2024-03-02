import { useEffect } from "react";
import BottomBoxChart from "./Components/BottomBoxChart"
import BottomPieChart from "./Components/BottomPieChart"
import MainChart from "./Components/MainChart"
import RightNavbar from "./Components/RightNavbar"
import SideNavbar from "./Components/SideNavbar"
import TopNavbar from "./Components/TopNavbar"
import useScreenSize from "./Helper/useScreenSize"
import { useDispatch, useSelector } from "react-redux"
import { getDataFetch, toggleNavbar } from "./Slice/helperSlice"


function App() {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();
  const { navbarToggler } = useSelector(state=>state.helperReducer);

  const handlerToggle = () => {
    dispatch(toggleNavbar(false));
  }
  
  
  useEffect(()=> {
    if (screenSize >= 900) {
      dispatch(toggleNavbar(false));
    }
  }, [screenSize])

  useEffect(()=> {
    dispatch(getDataFetch());
  }, [])

  return (
    <>
        <div className="flex gap-4">
          { screenSize < 900 && navbarToggler.payload && 
            <>
              <div className="fixed top-0 flex z-10">
                <div className={`p-4 h-dvh w-[250px] bg-slate-200  }`}>
                  <SideNavbar/>
                </div>
                {screenSize < 900 &&
                  <div onClick={handlerToggle} className={`${screenSize < 900?"w-dvw bg-slate-800 opacity-50":"" }`}></div>
                }
              </div>
            </>
          }
          {screenSize >= 900 &&
            <div className={`p-4 h-dvh bg-gray-200 fixed w-[250px] }`}>
              <SideNavbar />
            </div>
          }
          <div className={`flex flex-col pb-20 bg-gray-100  w-full ${screenSize > 900 ? "ml-[250px]":""}`}>
            <TopNavbar />
            <div className="flex flex-wrap gap-2 justify-around items-center">
              <MainChart />
              <RightNavbar />
            </div>
            <div className="flex flex-wrap gap-4 justify-around items-center">
              <BottomBoxChart />
              <BottomPieChart />
            </div>
          </div>
        </div>
    </>
  )
}

export default App;