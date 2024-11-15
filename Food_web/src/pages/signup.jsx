import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Signup() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [password2, setPassword2] = useState();
  const navigate=useNavigate()

  let userData= async()=>{
    
    axios.post("http://localhost:8080/sign-up-data",{email,password}) 

    .then (response => {
      // Handle the response data here
      let result=response.data;
      console.log(result)
      localStorage.setItem('user',JSON.stringify(result));
      if(result){
       navigate('/sign-in')
      }
    })
    .catch(error => {
      console.error(error);
    });
}
  
useEffect(()=>{
  const auth =localStorage.getItem('user')

  if(auth){
    navigate('/')
  }
})

  return (
    <div className="h-screen w-full">
      <section class="bg-teal-500">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    class=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                  {password2 &&
                   <div>
                       {password!=password2 &&<p className="text-red-500 ml-[25%] mt-2"> Password Not Matched</p>}
                  </div>
                  }
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-blue-400"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                </form>
                <button class="w-full text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={userData} disabled={password!=password2}>
                  Create an account
                </button>

                <p class="text-sm font-light text-black">
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    class="font-medium text-blue-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
