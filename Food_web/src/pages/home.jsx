import React, { useEffect, useState } from 'react'
import Food_card from '../components/food_card'

export default function Home() {

  let api = "http://localhost:8080/menu";
  let [items, setItems] = useState([]);
  let [mainc ,setMainc]=useState([]);
  let [Appetizer ,setAppetizer]=useState([]);
  let [Dessert , setDessert]=useState([]);
  let [Drinks,setDrinks ]=useState([]);
  // console.log(items);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      let data = await res.json();
      let filterArr=data.slice(0,7)
      setItems(filterArr);

      let cat=data.filter((data)=>{
         return data.Category == 'Main Course'
      })
      setMainc(cat)


      let ap=data.filter((data)=>{
        return data.Category == 'Appetizer'
     })
     setAppetizer(ap)


     let des=data.filter((data)=>{
      return data.Category == 'Dessert'
   })
   setDessert(des)

   let drin=data.filter((data)=>{
    return data.Category == 'drink'
 })
 setDrinks(drin)
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(api);
  }, []);
// ---------------------------------toast notification---------------------------


// ------------------------------------------------------

  return (
    <div className="bg-gray-300 h-auto flex flex-col items-center">
      <div className="w-[80rem] mt-10 rounded-[40px] bg-black h-[25rem] overflow-hidden">
        <div>
          <img className="w-[80rem] -mt-10" src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101282760/101282760.jpg" alt="no image" />
        </div>
        </div>

        <div className="w-[80rem]  h-32 font-mono  justify-between flex items-center px-5 ">
          <h1 className="font-semibold font-mono text-[40px] text-slate-700">Popular Items</h1>
          <div>
          <input className="text-xl bg-white px-6 py-2 rounded-2xl outline-none" type="text" placeholder="Search by name.."/>
          <button className="bg-red-500 text-white ml-2 h-[3rem] w-[5rem] rounded-3xl" >Search</button></div>
        </div>

         <hr className="w-[80rem] h-1 bg-gray-400 mb-10 -mt-5"/>
        <div className="mt-5 w-[83rem] h-auto  flex flex-wrap gap-3 gap-y-5 mb-10 items-start justify-start ">
         
         {items && items.map((data) => <Food_card items={data} />)}
        </div>
          
        <h1 className="font-semibold mt-12  font-mono text-[40px] text-slate-700">Main Course</h1>
        <hr className="w-[82rem] h-1 bg-gray-400 mb-10 mt-5"/>
        <div className="mt-1 w-[83rem] h-auto  flex flex-wrap gap-3 gap-y-5 mb-10 items-start justify-start ">
         {mainc && mainc.map((data) => <Food_card items={data} />)}
        </div>
    
        <h1 className="font-semibold mt-12  font-mono text-[40px] text-slate-700">Appetizer</h1>
        <hr className="w-[82rem] h-1 bg-gray-400 mb-10 mt-5"/>
        <div className="mt-1 w-[83rem] h-auto  flex flex-wrap gap-3 gap-y-5 mb-10 items-start justify-start ">
         {Appetizer && Appetizer.map((data) => <Food_card items={data} />)}
        </div>

         
        <h1 className="font-semibold mt-12  font-mono text-[40px] text-slate-700">Dessert</h1>
        <hr className="w-[82rem] h-1 bg-gray-400 mb-10 mt-5"/>
        <div className="mt-1 w-[83rem] h-auto  flex flex-wrap gap-3 gap-y-5 mb-10 items-start justify-start ">
         {Dessert && Dessert.map((data) => <Food_card items={data} />)}
        </div>

        <h1 className="font-semibold mt-12  font-mono text-[40px] text-slate-700">Drinks</h1>
        <hr className="w-[82rem] h-1 bg-gray-400 mb-10 mt-5"/>
        <div className="mt-1 w-[83rem] h-auto  flex flex-wrap gap-3 gap-y-5 mb-10 items-start justify-start ">
         {Drinks && Drinks.map((data) => <Food_card items={data} />)}
        </div>

       
        
        
      </div>
  )
}
