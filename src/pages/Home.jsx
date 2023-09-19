import React from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import { LuLogOut } from 'react-icons/lu';
import {Link} from 'react-router-dom'

export default function Home() {
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
            <h1>Customer's Dashboard</h1>
        </div>
        <div className='flex mr-10 mt-6'>
        <LuLogOut className='mt-1'/> 
        <div>
       < Link to='/Login'> Logout </Link>
        </div>
        </div>
        </div>
    <div className='w-full h-full mt-[5rem]'>
        <div className='grid grid-cols-2 gap-2.5 auto-rows-[minmax(100, auto)] justify-center items-center m-4'>
          <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'><Link to='/deposit'>
          <Link to='/deposit'> Deposit</Link>
          </Link></div> 
             <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'><Link to='/balance'>
            <Link to='/balance'> Balance </Link>
            </Link></div> 
         <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'><Link to='/withdrawal'>
       <Link to='/withdrawal'> Withdrawal </Link>
       </Link></div> 
        </div>
    </div>
    </div>
  )
}
