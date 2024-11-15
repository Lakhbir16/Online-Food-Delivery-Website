import React, { useEffect, useState } from 'react'

export default function MyOrder() {
    
    let [orderData,setOrderData]=useState()

   let getOrderData=async()=>{
        try{
             let res = await fetch('http://localhost:8080/get-orders-data');
             let data= await res.json()
             setOrderData(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
          getOrderData()
    },[])
  return (
    <div className='h-auto w-full bg-slate-100 flex justify-center pb-20'>
        <div className='h-auto w-[90rem]  bg-slate-500 mt-10 rounded-2xl flex flex-col items-center pb-12'>
            <div className='text-white text-4xl flex justify-center -ml-[70rem] mt-6'><p>My Order</p></div>
            { orderData && orderData.map((data)=>(
            <div className='bg-lime-100 w-[80rem] h-16 mt-8 rounded-lg flex  items-center gap-10 -mb-2 justify-evenly '>
                <img src="https://static.vecteezy.com/system/resources/previews/024/212/031/non_2x/cardboard-box-with-check-mark-confirmed-order-delivery-concept-return-parcel-to-courier-shipment-checklist-cartoon-free-png.png" alt="not found" className='h-20 -ml-8' />
                <p>{data.name[0]} and more..</p>
                <p>Item: {data.name.length}</p>
                <p>Price: {data.price}</p>
                <li className='ml-32 marker:text-red-400 '>{data.status}</li>
                <button className='bg-orange-300 w-28 h-9 rounded-md'>Track Order</button> 
                </div>
                ))
            }
            
        
        </div></div>
  )
}
