import React from 'react'
import { Link, Outlet } from "react-router-dom";


export default function Dashboard() {
 

  return (<>
    
        
        
        <div className="flex">
            <div className="flex flex-col w-60 h-screen bg-gray-800 text-white pl-5 text-[25px] ">
            <div className='bg' ></div>
           <Link  to="All-Product" className=" w-40 mt-10 z-20 ">All Products</Link>
           <Link  to="Add-item" className=" w-40 mt-10 z-20">Add Items</Link>
           <Link  to="orders" className=" w-40 mt-10 z-20">Orders</Link>
           <Link  to="Payment" className=" w-40 mt-10 z-20">Payment</Link>
           <Link  to="Users" className=" w-40 mt-10 z-20">Users</Link>
           </div>
           <Outlet/>

           </div>
           
           
           </>
   
  )
}
