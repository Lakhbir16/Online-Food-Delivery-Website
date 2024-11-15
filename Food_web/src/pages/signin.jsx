import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
   
  let [email,setEmail]=useState()
  let [password,setPassword]=useState()


  function handlePassword(){
    console.log(email , password)
  }

  return (
    <div className='w-full h-screen'>

<section class="bg-teal-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-gray-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Login to your account
        </h1>
        <form class="space-y-4 md:space-y-6" >
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} class="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50"  placeholder="name@company.com" required />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="font-light text-blue-600">Remember me</label>
            </div>
            <a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" onClick={handlePassword} class="w-full text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Login
          </button>
          <p class="text-sm font-light text-black">
            Don't have an account yet? <Link to="/sign-up" class="font-medium text-blue-600 hover:underline" >Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>





    </div>
  )
}
