import React from "react"

function Signup() {
  return (
    <div className="bg-slate-400 flex justify-center p-10 w-full">
      <div className="bg-white flex flex-col rounded-lg w-96 h-3/4 w-3/4">
        <div className="text-lg  font-bold text-center  m-5 p-7 text-2xl"> Sign Up </div>
        <div className="m-5 text-xl">Enter you information to create an account </div>

        <div className="flex flex-col  border-black  text-black p-1 text-lg">
          FirstName
          <input
            type="text"
            id="success"
            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="FirstName"
          />
        </div>

        <div className="flex flex-col p-1 text-lg">
          LastName
          <input
            type="text"
            id="success"
            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="LastName"
          />
        </div>

        <div className="flex flex-col p-1 text-lg">
          UserName
          <input
            type="text"
            id="success"
            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="UserName"
          />
        </div>
        <div className="flex flex-col p-1 text-lg">
          Password
          <input
            type="text"
            id="success"
            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center">
         
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign Up 
          </button>
        </div>

        <div className="text-lg flex justify-center">
          Already have an account ? Login
        </div>
      </div>
    </div>
  )
}

export default Signup
