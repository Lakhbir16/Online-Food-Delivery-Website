import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  const auth=localStorage.getItem('user');
  return (<>
<div className="bg-sky-800 flex h-20  justify-between items-center px-16">
    <div className="flex justify-center items-center bg-white w-52 h-16 rounded-[40px]">
        <img className="h-24 " src="https://1000logos.net/wp-content/uploads/2023/01/Gofood-logo.png" alt="" />
      </div>
    
    <div className="bg-sky-800 flex  gap-10 justify-end items-center text-left text-white font-semibold">
      <Link to="dashboard/admin" className='border px-4 py-1 rounded-lg'>Admin Dashboard</Link>
      <Link to="/">Home</Link>
      <Link to="menu">Menu</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About Us</Link>
      {
        auth ?<Link to="/logout" >Logout</Link> : <Link to="/sign-up" >Sign up</Link>
      }
     
      
      <Link to="cart" className='border px-4   py-1 rounded-lg  hover:bg-red-500'> <img src="https://img.pikbest.com/element_our/20230410/bg/93113689bfcf7.png!sw800" className='h-[50px] invert' alt="" /></Link>
     
      
    </div>
    </div>
    </>
  )
}
