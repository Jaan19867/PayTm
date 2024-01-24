import React from 'react';
import {useNavigate} from 'react-router-dom'

function UserCard({ userInfo}) {

  let navigate=useNavigate();
  return (
    <div
      className="w-full flex flex-row p-1 text-lg mb-2 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      style={{ border: "1px solid black" }}
    >
      <div className="w-5/6 p-1 text-lg">
        {userInfo.firstName + " " + userInfo.lastName}
      </div>
      <div className="w-1/6 p-1 text-lg hover:bg-sky-700" onClick={
        ()=>{
  navigate("/dashboard/sendmoney")
        }
      }>Send money</div>
    </div>
  )
}

export default UserCard;
