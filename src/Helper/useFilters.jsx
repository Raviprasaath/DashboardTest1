import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const useFilters = () => {
    const { filteredItems, fetchedData, isLoading } = useSelector((state) => state.helperReducer);

    const [totalSales, setTotalsSales] = useState();
    const [totalEarning, setTotalEarning] = useState();
    const [totalOrders, setTotalOrders] = useState();
    const [totalMargin, setTotalMargin] = useState();
    const [marginRate, setMarginRate] = useState();
    const [quantityReturned, setQuantityReturned] = useState();
    const [latestOrder, setLatestOrder] = useState();
    const [saleDetail, setSaleDetail] = useState();
    const [topSoldProduct, setTopSoldProduct] = useState();
    const [totalRevenue, setTotalRevenue] = useState();

    console.log(filteredItems)
    
    useEffect(() => {
      let time = setTimeout(()=> {
        if (filteredItems?.includes("lastMonth") && filteredItems?.length === 1) {
          const storeTotalSales = Object?.values(fetchedData?.lastMonth?.store)
            .map((method) =>
              Object?.values(method)
                .map((city) => city?.totalSales)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales = fetchedData?.lastMonth?.website ? 
            Object?.values(fetchedData?.lastMonth?.website)
              .map((method) =>
                Object?.values(method)
                  .map((city) => city?.totalSales)
                  .reduce((acc, totalSales) => acc + totalSales, 0)
              )
              .reduce((acc, methodTotal) => acc + methodTotal, 0) : 0;
        
          setTotalsSales(storeTotalSales + websiteTotalSales);
  
          const storeTotalSales1 = Object.values(fetchedData.lastMonth.store)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalEarnings)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales1 = Object.values(fetchedData.lastMonth.website)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalEarnings)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          setTotalEarning(storeTotalSales1 + websiteTotalSales1);
  
          const storeTotalSales2 = Object.values(fetchedData.lastMonth.store)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalOrders)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales2 = Object.values(fetchedData.lastMonth.website)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalOrders)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          setTotalOrders(storeTotalSales2 + websiteTotalSales2);
  
  
          const storeTotalSales3 = Object.values(fetchedData.lastMonth.store)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalMargin)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales3 = Object.values(fetchedData.lastMonth.website)
          .map((method) =>
            Object.values(method)
              .map((city) => city.totalMargin)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          setTotalMargin(storeTotalSales3 + websiteTotalSales3);
  
          const storeTotalSales4 = Object.values(fetchedData.lastMonth.store)
          .map((method) =>
            Object.values(method)
              .map((city) => city.marginRate)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales4 = Object.values(fetchedData.lastMonth.website)
          .map((method) =>
            Object.values(method)
              .map((city) => city.marginRate)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          setMarginRate(storeTotalSales4 + websiteTotalSales4);
  
          const storeTotalSales5 = Object.values(fetchedData.lastMonth.store)
          .map((method) =>
            Object.values(method)
              .map((city) => city.quantityReturned)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          const websiteTotalSales5 = Object.values(fetchedData.lastMonth.website)
          .map((method) =>
            Object.values(method)
              .map((city) => city.quantityReturned)
              .reduce((acc, totalSales) => acc + totalSales, 0)
          )
          .reduce((acc, methodTotal) => acc + methodTotal, 0);
        
          setQuantityReturned(storeTotalSales5 + websiteTotalSales5);
        }

        setLatestOrder(Object.values(fetchedData.lastMonth.store).map((item)=>Object.values(item))[4][4].latestOrders);
        setSaleDetail(Object.values(fetchedData.lastMonth.store).map((item)=>Object.values(item))[4][4].saleDetails);
        setTopSoldProduct(Object.values(fetchedData.lastMonth.store).map((item)=>Object.values(item))[4][4].topSoldProducts);
        setTotalRevenue(Object.values(fetchedData.lastMonth.store).map((item)=>Object.values(item))[4][4].totalRevenueArray);


        let StoreWebSiteId;
        if (filteredItems.includes("store")) {
            StoreWebSiteId = "store"
        } else if (filteredItems.includes("website")) {
            StoreWebSiteId = "website"
        }
  
        if (filteredItems.includes("lastMonth") && filteredItems.includes(StoreWebSiteId) && filteredItems.length === 2) {
          setTotalsSales(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.totalSales)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));
  
          setTotalEarning(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.totalEarnings)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));
  
          setTotalOrders(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.totalOrders)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));
  
          setTotalMargin(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.totalMargin)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));
  
          setMarginRate(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.marginRate)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));
  
          setQuantityReturned(Object.values(fetchedData.lastMonth[StoreWebSiteId])
            .map((method) =>
              Object.values(method)
                .map((city) => city.quantityReturned)
                .reduce((acc, totalSales) => acc + totalSales, 0)
            )
            .reduce((acc, methodTotal) => acc + methodTotal, 0));

            setLatestOrder(Object.values(fetchedData.lastMonth[StoreWebSiteId]).map((item)=>Object.values(item))[3][3].latestOrders);
            setSaleDetail(Object.values(fetchedData.lastMonth[StoreWebSiteId]).map((item)=>Object.values(item))[3][3].saleDetails);
            setTopSoldProduct(Object.values(fetchedData.lastMonth[StoreWebSiteId]).map((item)=>Object.values(item))[3][3].topSoldProducts);
            setTotalRevenue(Object.values(fetchedData.lastMonth[StoreWebSiteId]).map((item)=>Object.values(item))[3][3].totalRevenueArray);
        }

        if (filteredItems.includes("lastMonth") && (filteredItems.includes("applePay") || filteredItems.includes("cashOnDelivery") || filteredItems.includes("creditCard") || filteredItems.includes("debitCard") || filteredItems.includes("upi")) ) {
          let paymentMethod;
          if (filteredItems.includes("applePay")) {
            paymentMethod = "applePay"
          } else if (filteredItems.includes("cashOnDelivery")) {
            paymentMethod = "cashOnDelivery"
          } else if (filteredItems.includes("creditCard")) {
            paymentMethod = "creditCard"
          } else if (filteredItems.includes("debitCard")) {
            paymentMethod = "debitCard"
          } else if (filteredItems.includes("upi")) {
            paymentMethod = "upi"
          }
          if (filteredItems.includes("store")) {
            const dataSplit = Object.values(fetchedData?.lastMonth)[0][paymentMethod];
            setTotalsSales(Object.values(dataSplit).reduce((acc, city) => acc + city.totalSales, 0));
            setTotalEarning(Object.values(dataSplit).reduce((acc, city) => acc + city.totalEarnings, 0));
            setTotalOrders(Object.values(dataSplit).reduce((acc, city) => acc + city.totalOrders, 0));
            setTotalMargin(Object.values(dataSplit).reduce((acc, city) => acc + city.totalMargin, 0));
            setMarginRate(Object.values(dataSplit).reduce((acc, city) => acc + city.marginRate, 0));
            setQuantityReturned(Object.values(dataSplit).reduce((acc, city) => acc + city.quantityReturned, 0));

            
            setLatestOrder(Object.values(dataSplit)[0].latestOrders);
            setSaleDetail(Object.values(dataSplit)[0].saleDetails);
            setTopSoldProduct(Object.values(dataSplit)[0].topSoldProducts);
            setTotalRevenue(Object.values(dataSplit)[0].totalRevenueArray);

          } else if (filteredItems.includes("website")) {
            const dataSplit = Object.values(fetchedData?.lastMonth)[1][paymentMethod];
            setTotalsSales(Object.values(dataSplit).reduce((acc, city) => acc + city.totalSales, 0));
            setTotalEarning(Object.values(dataSplit).reduce((acc, city) => acc + city.totalEarnings, 0));
            setTotalOrders(Object.values(dataSplit).reduce((acc, city) => acc + city.totalOrders, 0));
            setTotalMargin(Object.values(dataSplit).reduce((acc, city) => acc + city.totalMargin, 0));
            setMarginRate(Object.values(dataSplit).reduce((acc, city) => acc + city.marginRate, 0));
            setQuantityReturned(Object.values(dataSplit).reduce((acc, city) => acc + city.quantityReturned, 0));
  

            setLatestOrder(Object.values(dataSplit)[0].latestOrders);
            setSaleDetail(Object.values(dataSplit)[0].saleDetails);
            setTopSoldProduct(Object.values(dataSplit)[0].topSoldProducts);
            setTotalRevenue(Object.values(dataSplit)[0].totalRevenueArray);

          } else if (filteredItems.length === 3) {
            const dataSplit1 = Object.values(fetchedData?.lastMonth)[0][paymentMethod];
            const dataSplit2 = Object.values(fetchedData?.lastMonth)[1][paymentMethod];
            let total1 = Object.values(dataSplit1).reduce((acc, city) => acc + city.totalSales, 0);
            let total2 = Object.values(dataSplit2).reduce((acc, city) => acc + city.totalSales, 0);
            setTotalsSales(total1+total2);


            let total3 = Object.values(dataSplit1).reduce((acc, city) => acc + city.totalEarnings, 0);
            let total4 = Object.values(dataSplit2).reduce((acc, city) => acc + city.totalEarnings, 0);



            setTotalEarning(total3+total4);
  
            let total5 = Object.values(dataSplit1).reduce((acc, city) => acc + city.totalOrders, 0);
            let total6 = Object.values(dataSplit2).reduce((acc, city) => acc + city.totalOrders, 0);
            setTotalOrders(total5+total6);
            
            let total7 = Object.values(dataSplit1).reduce((acc, city) => acc + city.totalMargin, 0);
            let total8 = Object.values(dataSplit2).reduce((acc, city) => acc + city.totalMargin, 0);
            setTotalMargin(total7+total8);
            
            let total9 = Object.values(dataSplit1).reduce((acc, city) => acc + city.marginRate, 0);
            let total10 = Object.values(dataSplit2).reduce((acc, city) => acc + city.marginRate, 0);
            setMarginRate(total9+total10);
            
            let total11 = Object.values(dataSplit1).reduce((acc, city) => acc + city.quantityReturned, 0);
            let total12 = Object.values(dataSplit2).reduce((acc, city) => acc + city.quantityReturned, 0);
            setQuantityReturned(total11+total12);

            setLatestOrder(Object.values(dataSplit1).map((item)=>item.latestOrders));
            setSaleDetail(Object.values(dataSplit1).map((item)=>item.saleDetails));
            setTopSoldProduct(Object.values(dataSplit1).map((item)=>item.topSoldProducts));
            setTotalRevenue(Object.values(dataSplit1).map((item)=>item.totalRevenueArray));      
            

          }
        }
  
        if (filteredItems.includes("lastMonth") && (filteredItems.includes("bangalore") ||  (filteredItems.includes("chennai") || filteredItems.includes("mumbai") || filteredItems.includes("delhi") || filteredItems.includes("gujarat")))) {
          let paymentMethod;
          if (filteredItems.includes("applePay")) {
            paymentMethod = "applePay"
          } else if (filteredItems.includes("cashOnDelivery")) {
            paymentMethod = "cashOnDelivery"
          } else if (filteredItems.includes("creditCard")) {
            paymentMethod = "creditCard"
          } else if (filteredItems.includes("debitCard")) {
            paymentMethod = "debitCard"
          } else if (filteredItems.includes("upi")) {
            paymentMethod = "upi"
          }
  
          let cityNamesRef;
          let cityNames;
          let storeWebsite;
  
          if (filteredItems.includes("bangalore")) {
            cityNamesRef = "Bangalore"
            cityNames = "bangalore"
          } else if (filteredItems.includes("chennai")) {
            cityNamesRef = "Chennai"
            cityNames = "chennai"
          } else if (filteredItems.includes("mumbai")) {
            cityNamesRef = "Mumbai"
            cityNames = "mumbai"
          } else if (filteredItems.includes("delhi")) {
            cityNamesRef = "Delhi"
            cityNames = "delhi"
          } else if (filteredItems.includes("gujarat")) {
            cityNamesRef = "Gujarat"
            cityNames = "gujarat"
          }
  
          if (filteredItems.includes("store")) {
            storeWebsite = 0;
          } else if (filteredItems.includes("website")){
            storeWebsite = 1;
          }
          let total1 = 0;
          let total2 = 0;
          let total3 = 0;
          let total4 = 0;
          let total5 = 0;
          let total6 = 0;
          let latestOrderArray = [];
          let salesDetailsArray = [];
          let topSoldArray = [];
          let totalRevenuesArray = [];

          if (filteredItems.length === 2) {
            const dataSplit1 = Object.values(fetchedData?.lastMonth)[0];
            const dataSplit2 = Object.values(fetchedData?.lastMonth)[0];
            for (let i in dataSplit1) {
                let tempArr = dataSplit1[i]
                total1 += tempArr[cityNamesRef].totalSales;
                total2 += tempArr[cityNamesRef].totalEarnings;
                total3 += tempArr[cityNamesRef].totalOrders;
                total4 += tempArr[cityNamesRef].totalMargin;
                total5 += tempArr[cityNamesRef].marginRate;
                total6 += tempArr[cityNamesRef].quantityReturned;
                latestOrderArray.push(tempArr[cityNamesRef].latestOrders)
                salesDetailsArray.push(tempArr[cityNamesRef].saleDetails)
                topSoldArray.push(tempArr[cityNamesRef].topSoldProducts)
                totalRevenuesArray.push(tempArr[cityNamesRef].totalRevenueArray)
            }
            for (let i in dataSplit2) {
              let tempArr = dataSplit2[i]
              total1 += tempArr[cityNamesRef].totalSales;
              total2 += tempArr[cityNamesRef].totalEarnings;
              total3 += tempArr[cityNamesRef].totalOrders;
              total4 += tempArr[cityNamesRef].totalMargin;
              total5 += tempArr[cityNamesRef].marginRate;
              total6 += tempArr[cityNamesRef].quantityReturned;
              latestOrderArray.push(tempArr[cityNamesRef].latestOrders)
              salesDetailsArray.push(tempArr[cityNamesRef].saleDetails)
              topSoldArray.push(tempArr[cityNamesRef].topSoldProducts)
              totalRevenuesArray.push(tempArr[cityNamesRef].totalRevenueArray)
            }
  
  
            setTotalsSales(total1);
            setTotalEarning(total2);
            setTotalOrders(total3)
            setTotalMargin(total4)
            setMarginRate(total5)
            setQuantityReturned(total6)
            setLatestOrder(latestOrderArray);
            setSaleDetail(salesDetailsArray);
            setTopSoldProduct(topSoldArray);
            setTotalRevenue(totalRevenuesArray);
  
          } else if (filteredItems.includes(cityNames) && (filteredItems.includes("store") || filteredItems.includes("website") ) && filteredItems.length === 3) {
            const dataSplit = Object.values(fetchedData?.lastMonth)[storeWebsite];
            let total1 = 0;
            let total2 = 0;
            let total3 = 0;
            let total4 = 0;
            let total5 = 0;
            let total6 = 0;
            let latestOrderArray = [];
            let salesDetailsArray = [];
            let topSoldArray = [];
            let totalRevenuesArray = [];

            for (const method in dataSplit) {
              let tempArr = dataSplit[method][cityNamesRef];
              total1 += tempArr.totalSales;
              total2 += tempArr.totalEarnings;
              total3 += tempArr.totalOrders;
              total4 += tempArr.totalMargin;
              total5 += tempArr.marginRate;
              total6 += tempArr.quantityReturned;
              latestOrderArray.push(tempArr.latestOrders)
              salesDetailsArray.push(tempArr.saleDetails)
              topSoldArray.push(tempArr.topSoldProducts)
              totalRevenuesArray.push(tempArr.totalRevenueArray)
            }
  
  
            setTotalsSales(total1);
            setTotalEarning(total2);
            setTotalOrders(total3)
            setTotalMargin(total4)
            setMarginRate(total5)
            setQuantityReturned(total6)
            setLatestOrder(latestOrderArray);
            setSaleDetail(salesDetailsArray);
            setTopSoldProduct(topSoldArray);
            setTotalRevenue(totalRevenuesArray);
  
          } else if (filteredItems.includes(paymentMethod) && filteredItems.length === 3) {
  
            const dataSplit1 = Object.values(fetchedData?.lastMonth)[0][paymentMethod][cityNamesRef];
            const dataSplit2 = Object.values(fetchedData?.lastMonth)[1][paymentMethod][cityNamesRef];
  
  
            setTotalsSales(dataSplit1.totalSales + dataSplit2.totalSales);
            setTotalEarning(dataSplit1.totalEarnings + dataSplit2.totalEarnings)
            setTotalOrders(dataSplit1.totalOrders + dataSplit2.totalOrders)
            setTotalMargin(dataSplit1.totalMargin + dataSplit2.totalMargin)
            setMarginRate(dataSplit1.marginRate + dataSplit2.marginRate)
            setQuantityReturned(dataSplit1.quantityReturned + dataSplit2.quantityReturned)
            setLatestOrder(dataSplit1.latestOrders);
            setSaleDetail(dataSplit1.saleDetails);
            setTopSoldProduct(dataSplit1.topSoldProducts);
            setTotalRevenue(dataSplit1.totalRevenueArray);

            
          } else if (filteredItems.includes(paymentMethod) && filteredItems.includes(cityNames) && filteredItems.length === 4) {
            
            const dataSplit = Object.values(fetchedData?.lastMonth)[storeWebsite][paymentMethod];
            let dataCollected = dataSplit[cityNamesRef];
            setTotalsSales(dataCollected.totalSales);
            setTotalEarning(dataCollected.totalEarnings)
            setTotalOrders(dataCollected.totalOrders)
            setTotalMargin(dataCollected.totalMargin)
            setMarginRate(dataCollected.marginRate)
            setQuantityReturned(dataCollected.quantityReturned)
            setLatestOrder(dataCollected.latestOrders);
            setSaleDetail(dataCollected.saleDetails);
            setTopSoldProduct(dataCollected.topSoldProducts);
            setTotalRevenue(dataCollected.totalRevenueArray);
          }
        }
        {
            let paymentMethodSample;
              if (filteredItems.includes("applePay")) {
                paymentMethodSample = "applePay"
              } else if (filteredItems.includes("cashOnDelivery")) {
                paymentMethodSample = "cashOnDelivery"
              } else if (filteredItems.includes("creditCard")) {
                paymentMethodSample = "creditCard"
              } else if (filteredItems.includes("debitCard")) {
                paymentMethodSample = "debitCard"
              } else if (filteredItems.includes("upi")) {
                paymentMethodSample = "upi"
              }
      
            if (filteredItems.length === 2 && filteredItems.includes(paymentMethodSample)) {
              const dataSplit1 = Object.values(fetchedData?.lastMonth)[0][paymentMethodSample];
              const dataSplit2 = Object.values(fetchedData?.lastMonth)[1][paymentMethodSample];
              
              let total1 = 0;
              let total2 = 0;
              let total3 = 0;
              let total4 = 0;
              let total5 = 0;
              let total6 = 0;
              let latestOrderArray = [];
              let salesDetailsArray = [];
              let topSoldArray = [];
              let totalRevenuesArray = [];

              for (let i in dataSplit1) {
                total1 += dataSplit1[i].totalSales;
                total2 += dataSplit1[i].totalEarnings;
                total3 += dataSplit1[i].totalOrders;
                total4 += dataSplit1[i].totalMargin;
                total5 += dataSplit1[i].marginRate;
                total6 += dataSplit1[i].quantityReturned;
                latestOrderArray.push(dataSplit1[i].latestOrders);
                salesDetailsArray.push(dataSplit1[i].saleDetails);
                topSoldArray.push(dataSplit1[i].topSoldProducts);
                totalRevenuesArray.push(dataSplit1[i].totalRevenueArray);
            }
            for (let i in dataSplit2) {
                total1 += dataSplit2[i].totalSales;
                total2 += dataSplit2[i].totalEarnings;
                total3 += dataSplit2[i].totalOrders;
                total4 += dataSplit2[i].totalMargin;
                total5 += dataSplit2[i].marginRate;
                total6 += dataSplit2[i].quantityReturned;
                latestOrderArray.push(dataSplit2[i].latestOrders);
                salesDetailsArray.push(dataSplit2[i].saleDetails);
                topSoldArray.push(dataSplit2[i].topSoldProducts);
                totalRevenuesArray.push(dataSplit2[i].totalRevenueArray);
              }
      
              setTotalsSales(total1);
              setTotalEarning(total2);
              setTotalOrders(total3)
              setTotalMargin(total4)
              setMarginRate(total5)
              setQuantityReturned(total6)
              setLatestOrder(latestOrderArray);
              setSaleDetail(salesDetailsArray);
              setTopSoldProduct(topSoldArray);
              setTotalRevenue(totalRevenuesArray);
            }
        }
      }, [100])
  
      return (()=>clearTimeout(time));
  
    }, [filteredItems, isLoading]);

    return { totalSales, totalEarning, totalOrders, totalMargin, marginRate, quantityReturned, latestOrder, saleDetail, topSoldProduct, totalRevenue }
}

export default useFilters
