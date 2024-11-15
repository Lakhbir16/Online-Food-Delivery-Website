import React, { useState } from 'react'
import  axios from 'axios'
export default function OrderCard({value}) {
 
  let data=[value.name];
  console.log(value.price)

 function complected(id){
  axios.post('http://localhost:8080/delete-order',{id})
  setTimeout(() => {
    window.location.reload();
  }, "200");
 }

 function updateStatus(e){
      let status=e.target.value
      let id=value.id
      axios.post('http://localhost:8080/update-order-status',{id,status})
 }
 
  return (
    <div>
          <div className="bg-sky-800 w-[55rem] h-[16rem] rounded-xl overflow-hidden">
            <div className='  text-[20px] flex flex-col  text-white ml-3 mt-10'>
              <h1>Customer:- Lakhbir Singh</h1>
              <h1>Number:- 9835779072</h1>
              <h1 className='w-[20rem] h-auto'>Address:- Laxmi Nagar East Delhi,110092,Delhi,India</h1>
            </div>
            <div className='flex flex-col -mt-36 items-end mr-10 relative'>
            <select id="status" className='w-40 p-1 rounded-lg pl-3' defaultValue={value.status} onChange={updateStatus}>
              <option value="Processing">Processing</option>
              <option value="Ready for Pickup">Ready for Pickup</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered" className='bg-green-400'>Delivered </option>
              <option value="Cancelled">Cancelled</option>
              <option value="Refunded">Refunded</option>
            </select>
          
            </div>
            <div className=' text-white text-[35px] bg-orange-600 w-[16rem] ml-[45rem] mt-10 rounded-xl'><p className='ml-6'>₹ {value.price}</p></div>
            <button className='bg-yellow-400 w-40 p-2 rounded-lg mt-12 ml-5 hover:bg-yellow-200' onClick={()=>complected(value.id)}>Order Complected</button>
          </div>
            <div className=' w-[45rem] h-[12rem] ml-1 -mt-[15rem] overflow-hidden text-wrap'>
            <div className='ml-[18rem] text-white text-[20px] justify-start flex flex-col w-[23rem] flex-wrap  h-64  px-3 '>
              {data && data[0].map((item)=>(
                 <li>{item}</li>
                 
              ))}
            </div>
            </div>
    </div>
  )
}
