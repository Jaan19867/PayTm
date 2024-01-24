import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import { useState ,useEffect} from 'react'
import SendMoney from './SendMoney'

function Dashboard() {
const [users, setUsers] = useState()
const [user, setUser] = useState()
const [account,setAccount]=useState()
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5vb3IiLCJwYXNzd29yZCI6IjEyMzQiLCJmaXJzdE5hbWUiOiJOb29yICIsImxhc3ROYW1lIjoiTW9oYW1tYWQgIiwiaWF0IjoxNzA2MTA5MDg0fQ.rlfqXAFnTOPT98vf95x3DloRbRTqVoUqhvy6gyrOHLE"

useEffect(() => {
  fetch("http://localhost:3002/api/v1/user/bulk")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setUsers(data)
      setUser(data.user)
    })
}, [])

useEffect(()=>{
fetch("http://localhost:3002/api/v1/transact/account/balance",{
  method:'GET',
  headers:{
    'Authorization':"Bearer "+token,
  }
})
.then(res=>res.json())
.then(response=> {setAccount(response)
 
})
.catch((err)=>console.error("error has been occur",err))

},[])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row bor  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="w-5/6 text-7xl p-2">Payment App </div>
        <div className="w-1/6 text-2xl p-2">Hello , User </div>
      </div>

      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-4xl p-3">
        Your Balance is{" "}
        <div> {account ? Math.floor(account.balance) : <p> Loading </p>}</div>
      </div>

      <div className="text-4xl p-3">Users</div>
      <div className="p-2">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search users "
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {user ? (
        user.map((userInfo) => (
          <UserCard userInfo={userInfo} key={userInfo._id} />
        ))
      ) : (
        <p> Loading ..</p>
      )}


    </div>
  )
}

export default Dashboard
