import React, { useEffect, useState } from 'react'
import OrderCard from '../components/orderCard';

export default function Orders() {
  let [orderData,setOrderData]=useState()
let getOrderData= async ()=>{
   try{
    let res= await fetch("http://localhost:8080/get-orders-data")
    let data= await res.json()
    setOrderData(data);
    console.log(data[0].status);
   }catch(err){
    console.log(err)
   }

}

  useEffect(()=>{
     getOrderData()
  },[]);
  return (
    <div className="flex justify-center items-center">
      <div className="w-[74rem] h-[40rem] bg-slate-500 ml-16  rounded-2xl flex  flex-col items-center">
        <h1 className="text-white text-[40px] uppercase font-sans font-semibold mt-2">
          Orders
        </h1>
        <hr className="w-[65rem] h-1 mx-auto my-4 bg-slate-100 border-0 rounded " />
        <div className=" gap-16 justify-center items-center overflow-scroll grid pb-14  w-[57rem] ">
          {orderData && orderData.map((data)=>(
               <OrderCard value={data}/>
          ))}
          
          
        </div>
      </div>
    </div>
  );
}
