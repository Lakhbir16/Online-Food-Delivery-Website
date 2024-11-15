import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Product() {
  let api = "http://localhost:8080/menu";

  
  const navigate = useNavigate();

  let [items, setItems] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      let data = await res.json();

      setItems(data);
     

    } catch (error) {
      console.log(error);
    }
  };

  
    
  

  useEffect(() => {
    fetchData(api);
  }, []);
// ----------------------------------------------Delete Dishes------------------------------------------
 function delet(id){
   axios.post('http://localhost:8080/itemdelete',{id}) 

    let d= items.filter((el)=>{
      return el.id !=id;
    })
   setItems(d);
}
// ---------------------Edit Item----------------------------------------------------------------------------------

function editItem(id){
   navigate(`/dashboard/edit/${id}`)
  //  console.log(id);
}

  return (
    <div className="w-full h-auto pb-20 bg-slate-400 z-40">
      <div className="overflow-scroll w-[75rem] h-[38rem] overflow-x-hidden mt-5 ">
      <table className="w-[70rem] bg-white ml-20 mt-1 ">
        <thead >
          <tr className="bg-gray-800 text-white ">
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Dishname
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Image
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Price
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Catogory
            </th>
            <th className="text-left py-3 px-2 uppercase font-semibold text-sm">
              Rating
            </th>
            <th className="text-left py-3 px-12 uppercase font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {items &&
            items.map((data) => (
              <tr className="bg-gray-200  " key={data.id}>
                <td className="text-left py-3 px-4">{data.DishName}</td>
                <td className="text-left py-3 px-4"><img className="w-20" src={data.img_url} alt="no image" /></td>
                <td className="text-left py-3 px-4">{data.Price}</td>
                <td className="text-left py-3 px-4">{data.Category}</td>
                <td className="text-left py-3 px-4">{data.Rating}</td>
                <td className="text-left py-3 px-4">
                  <div className="flex gap-2 -mr-32">
                   <button className="bg-sky-400 w-20 h-7 text-white rounded-md" onClick={()=>{editItem(data.id)}} >
                      Edit
                    </button>
                    <button className="bg-red-500 w-20 h-7 text-white rounded-md" onClick={()=>{delet(data.id)}}> 
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

// ()=>{filter(data.id)}