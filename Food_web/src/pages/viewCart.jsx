import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {loadStripe} from '@stripe/stripe-js';

export default function Cart() {
  const url = `http://localhost:8080/cart-value`;
  const url2=`http://localhost:8080/cart-value-price`;

  let [cartData, setCartData] = useState("");
  let [cartTotalValue,setCartTotalValue]= useState("")
 
  let getCartData = async (api) => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      // ------------------------for price----------------------
      let res2 =await fetch(url2);   
      let data2=await res2.json();
      
      setCartData(data);
      setCartTotalValue(data2);
      console.log(data)

      GlobalPrice=data2;
    } catch (err) {
      console.log(err);
    }
  };



  function deleteItem(data){
    notify()
    let id=data.id;
    axios.post(`http://localhost:8080/cart-item-delete`,{id})
    
    let newData=cartData.filter((el)=>{
        return el.id !=id;
    })
    setCartData(newData);
    setCartTotalValue(cartTotalValue-data.price)

   
  }

 
  useEffect(() => {
    getCartData(url);
  }, []);

// --------------------------------------------------sending cart data to admin-----------------------------
  function cartOrders(){
    MakePayment()    //<---------calling payment function
    let arrayData=[];
    const filteredData = cartData.map(row => {
      const foodItem = (row);
      arrayData.push(foodItem.name)
    
    });
      axios.post(`http://localhost:8080/send-order-data`,{arrayData,cartTotalValue})
      
  }
   
    const MakePayment= async ()=>{
      const stripe = await loadStripe('pk_test_51PIm15SFFVy8rMI1ozJENyos6rKzxTOckn30aNq9BERB22O4EeUSqsO288GbOAn64c6GLWF26n6cS4kVSloYM07i00VPsE71af')

      const body ={
        products:cartData
      }


      const headers ={
        "Content-Type":"application/json"
      }
     
     
      const response = await fetch("http://localhost:8080/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)

      });


      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId:session.id
      });

      if(result.error){
           console.log(result.error)
      }
    }

    


  const notify = () => { toast.success("Added To Cart");
  console.log("working")
}

  return (
    <div className="bg-gray-400 w-full h-auto pb-20 ">
      <div className="justify-center flex   items-center">
        {/* <h1 className="text-[30px] text-white relative mt-10">Cart Value</h1> */}
      </div>

      <div className="justify-center flex mt-20 flex-col w-[70rem] ml-44 ">
        <table className="border-collapse border border-slate-100 ... text-white text-[25px] ">
          <thead className="bg-slate-500"></thead>
        </table>
        <div>
          {cartTotalValue && (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-[18px]  uppercase bg-gray-50 dark:bg-gray-900 text-white">
                  <tr>
                    <th scope="col" class="pl-6 py-3">
                      Product
                    </th>
                    <th scope="col" class="pl-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="pl-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="pl-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="pl-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartData &&
                    cartData.map((data) => (
                      <tr
                        key={data.id}
                        class="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-700 text-black text-[18px]"
                      >
                        <td class="px-6 py-1">
                          <img src={data.img} alt="" className="h-16" />
                        </td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-black whitespace-nowrap "
                        >
                          {data.name}
                        </th>
                        <td class="px-6 py-4">₹{data.price}</td>
                        <td class="px-12 py-4">{data.quantity}</td>
                        <td class="px-6 py-4">
                          <button
                            className="text-[15px]  bg-red-500 w-12 h-12 py-1 rounded-lg mb-2 text-white hover:scale-110 ease-out duration-100 flex justify-center items-center"
                            onClick={() => {
                              deleteItem(data);
                            }}
                          >
                            {" "}
                            <RiDeleteBin5Line className="text-3xl" />{" "}
                          </button>
                          <div>
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
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            
              <div>
                {cartTotalValue && (
                  <div className=" flex gap-20 text-2xl  justify-end items-center  bg-white w-[70rem] py-2 font-semibold text-black px-6">
                    <div>
                      Item In Cart :{" "}
                      <span className="text-red-600 text-[26px]">
                        {cartData.length}
                      </span>
                    </div>
                    <p className=" font-sans ">
                      Total Value :
                      <span className="text-red-600 text-[26px]">
                        {" "}
                        ₹ {cartTotalValue}
                      </span>
                    </p>{" "}
                    <button
                      className="bg-green-600 rounded-md text-xl font-normal text-white p-3 px-5 text-gray-
     800 hover:bg-green-500 "
                      onClick={cartOrders}
                    >
                      CheckOut
                    </button>
                  </div>
                )}{" "}
              </div>
            </div>
          )}
          <div>
            {" "}
            {cartTotalValue == "" ? (
              <div className="flex flex-col justify-center items-center ">
                <FaShoppingCart className="text-[6rem]  text-gray-100" />
                <p className="text-gray-100 text-4xl  h-60 mt-10">
                  Your Cart Is Empty
                </p>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* ----------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
 
}
