import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Food_card({ items }) {
  function addToCart(data) {
    axios.post("http://localhost:8080/add-to-cart", { data });
   

    toast.success("Added To Cart");
  }
  return (
    <div className="h-[22rem] w-80 bg-white rounded-2xl overflow-hidden flex justify-center flex-col p-1.5 shadow-lg">
      <div className="h-[12rem]  -mt-[46px] rounded-t-xl bg-yellow-700 overflow-hidden">
        <img
          className="h-[13rem] w-full object-cover transition duration-300 ease-in-out hover:scale-110 "
          src={items.img_url}
          alt="food img"
        />
      </div>
      <div className="text-slate-700 font-semibold text-[25px] ml-3 mt-2">
        <h1>{items.DishName}</h1>
        <div>
          <p className="text-[16px] font-normal text-slate-700">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <p className="text-[15px] text-white font-normal mt-2 bg-yellow-500 flex justify-center w-24 items-center rounded-xl">
          {items.Category}
        </p>
      </div>
      <div className="absolute mt-52 flex gap-24 justify-between items-center mx-3">
        <h1 className="mt-[80px] text-[32px] ">₹ {items.Price}</h1>
        <button
          className="bg-orange-500 hover:bg-sky-400 text-white p-2 rounded-2xl mt-16 ml-3  "
          onClick={() => {
            addToCart(items);
          }}
        >
          Add to cart
        </button>
        <ToastContainer
          position="top-center"
          autoClose={200}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}
