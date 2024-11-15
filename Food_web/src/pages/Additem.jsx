import React, { useState } from 'react'
import axios from 'axios';
import Food_card_3 from '../components/food_card_3.jsx';

export default function Additem() {

  let[name,setName]=useState('');
  let[price,setPrice]=useState('');
  let[catogary,setCatagory]=useState('');
  let[rating,setRating]=useState('');
  let[img,setImg]=useState('');
  let[hide, setHide]=useState('')
   
  let data=[{
    name:name,
    price:price , 
    catogary:catogary, 
    rating:rating,
    img:img

  }];

  function Hd(){
    setHide(1);
  }
 

  function handleSubmit(event){
         event.preventDefault();
         axios.post('http://localhost:8080/additem',{name,price,catogary,rating,img})

        
  }
  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center z-40">
      <div className="bg-slate-600 w-[75rem] h-[35rem] mt-8 rounded-xl justify-center flex flex-col">
        <form >
        <h1 className='text-white text-[35px] font-semibold ml-[28rem] -mt-72'>ADD NEW ITEMS </h1>
        <div className="h-10  gap-5 mt-10 flex justify-center text-[20px]  ">
        <input className='px-5 w-80 rounded-lg outline-none' type="text" placeholder="Dishname " 
        onChange={e =>setName(e.target.value)}/>
        <input className='px-5 w-32 rounded-lg outline-none' type="number" placeholder="Price"
        onChange={e =>setPrice(e.target.value)}/>
        <input className='px-5 w-60 rounded-lg outline-none' type="text" placeholder='Catagory'
        onChange={e =>setCatagory(e.target.value)}/>
        <input className='px-5 w-20 rounded-lg outline-none' type="number" placeholder='Rating' 
        onChange={e =>setRating(e.target.value)}/>
        </div>
        <div className=" h-10  gap-5 mt-4 flex justify-center text-[20px]">
        <input className='px-5 w-[51.8rem] rounded-lg outline-none' type="text" placeholder="Image Url " 
        onChange={e =>setImg(e.target.value)}/>
        </div>
        <div className='flex '>
        {/* <button className='bg-sky-300 w-[20rem] h-10 mt-[2rem] uppercase ml-[16rem] rounded-lg' onClick={Hd} >Preview</button> */}
        <button className='bg-green-300 w-[20rem] h-10 mt-[2rem]  ml-[25rem] rounded-lg' type='submit' onClick={handleSubmit}>ADD TO MENU</button>
        </div>
        </form>
       {/* {hide && <div className='absolute ml-48 mt-[16rem]' >
        {data && data.map((data) => <Food_card_3 value={data} />)} */}
         {/* </div>} */}
      </div>
      
    </div>
  )
}
