import React, { useState } from 'react'
import ecommerceLogo from '../assets/ecommerceLogo.png';
import {HiOutlineHome} from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Withdrawal() {

    const [ inputs, setInputs ] = useState({
        amount: 0
    });

    const handleOnChange = (e) => {
        setInputs({...inputs, [e.target.id]: e.target.value })
    };

    const tokenData = JSON.parse(localStorage.getItem('loginData'));
    console.log("tokenData")

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    
      const data = {
        userId: tokenData?.user?._id,
        amount: inputs.amount
      };
    
      try {
        await axios.post("https://magneto-banking-application.onrender.com/api/withdraw", data,  {
          headers: {
            Authorization: `Bearer ${tokenData?.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.data);
          navigate('/home')
          alert("amount withdrawn successfully")
          // add remaining code
        });
      } catch (error) {
        console.error("An unknown error occurred:", error);
      }
    };
    const handleButtonClick = () => {
      alert('logged in successfully');
    };
  return (
    <div>
        <div className='flex justify-center'>
        <div className='flex mr-[31rem]'>
        <img src={ecommerceLogo} alt='Magneto Bank'  className='w-[6rem]'/>
        <div className='mt-6'>
            <p>Magneto Bank</p>
        </div>
        </div>
        <div className='mr-[36rem] mt-6'>
            <h1> Withdrawal Dashboard</h1>
        </div>
        <div className='flex mr-10 mt-6'>
       <Link to='/home'> <HiOutlineHome className='mt-1'/> </Link>
        <div>
        < Link to='/home'>Home</Link>
        </div>
        </div>
        </div>
        <div className='flex justify-center mt-[8rem]'>
            <form onSubmit={handleSubmit}>
            <div>
                <input type='number' placeholder='0.00' id='amount' value={inputs.amount} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-3 mt-[2.2rem]' />
                </div>
                <div>
                <button onClick={handleButtonClick} className='w-[14rem] h-[2.5rem] rounded bg-red-600 text-white mt-[3rem] ml-[7.2rem]'>Withdraw</button>
                </div>
            </form>
        </div>
    </div>
  )
}
