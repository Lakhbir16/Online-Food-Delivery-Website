import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Edit() {
  
  let [item, setItem] = useState("");
  
  
  const navigate = useNavigate();

  const { id } = useParams(); //Id from url--

  const url = `http://localhost:8080/data/${id}`;

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      let data = await res.json();

      setItem(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);



  function updateData(event) {
      event.preventDefault();
      axios.post('http://localhost:8080/updatedata' ,{item});

      setTimeout(() => {
        navigate("/dashboard/All-Product");
      }, 1);
      
      
      
  }
  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center z-40 ">
      <div className="bg-slate-600 w-[75rem] h-[30rem] mt-8 rounded-xl  ">
       
        <div>
          <div className=" w-[75rem] h-[25rem]   mt-5 items-center rounded-xl flex flex-col gap-3  justify-center ">
            <h1 className="text-white text-[30px]">Edit Data</h1>
            <textarea
              name="name"
              id=""
              cols="40"
              rows="1"
              className="h-12 w-[50rem] pl-5 pt-1 text-[20px] rounded-lg "
              value={item.DishName}
              onChange={(e) => setItem({ ...item, DishName: e.target.value })}
            ></textarea>

            <textarea
              name="price"
              id=""
              cols="40"
              rows="1"
              className="h-12 w-[50rem] pl-5 pt-1 text-[20px] rounded-lg"
              value={item.Price}
              onChange={(e) => setItem({ ...item, Price: e.target.value })}
            ></textarea>
            <textarea
              name="cat"
              id=""
              cols="40"
              rows="1"
              className="h-12  w-[50rem] pl-5 pt-1 text-[20px] rounded-lg"
              value={item.Category}
              onChange={(e) => setItem({ ...item, Category: e.target.value })}
            >

            </textarea>
            <textarea
              name="rating"
              id=""
              cols="40"
              rows="1"
              className="h-12 w-[50rem] pl-5 pt-1 text-[20px] rounded-lg"
              value={item.Rating}
              onChange={(e) => setItem({ ...item, Rating: e.target.value })}
            ></textarea>
            <textarea
              name="img"
              id=""
              cols="40"
              rows="1"
              className="h-12 w-[50rem] pl-5 pt-1 text-[20px] rounded-lg"
              value={item.img_url}
              onChange={(e) => setItem({ ...item, img_url: e.target.value })}
            >
            </textarea>
            <button
              className="w-[25rem] h-[5rem] bg-green-400 rounded-xl mt-2 text-[20px]"
              onClick={updateData}
              
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
