import React, {useEffect, useState} from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import {HiOutlineHome} from 'react-icons/hi';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Balance() {


  const [data, setData] = useState([])
// const handleSubmit = async (e) => {
//   e.preventDefault();

  const tokenData = JSON.parse(localStorage.getItem("loginData"));
  console.log("tokenData")

const balance = () => {
  try {
     axios.get("https://localhost:8080/api/transactions/"+tokenData?.user?._id,  {
      headers: {
        Authorization: `Bearer ${tokenData?.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
setData(res.data)
      // add remaining code
    });
  } catch (error) {
    console.error("An unknown error occurred:", error);
  }
};
console.log(data, "data")
// console.log(data.map((item)=> Item))
useEffect(balance, [tokenData]);


  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex mr-[31rem]'>
        <img src={ecommerceLogo} alt='Magneto Bank'  className='w-[6rem]'/>
        <div className='mt-6'>
            <p>Magneto Bank</p>
        </div>
        </div>
        <div className='mr-[37rem] mt-6'>
            <h1> Dashboard</h1>
        </div>
        <div className='flex mr-10 mt-6'>
       <Link to='/home'> <HiOutlineHome className='mt-1'/> </Link>
        <div>
        < Link to='/home'>Home</Link>
        </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <div className='w-[14rem] bg-red-600 h-[3rem] rounded pl-[3.4rem] pt-[0.5rem] text-white text-lg'>
        Balance History
        </div>
        </div>
        <section className='flex justify-center'>
          <div>
        {data?.map((item) => (
  <div key={item._id}>
    <p>{item.type}</p>
    <p>{item.amount}</p>
  </div>
))}


</div>
        </section>
    </div>
  )
}
