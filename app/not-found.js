'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const Redirect  = useRouter();
  return (
    <div className=''>
    <div className='flex justify-center items-center w-full left-1/2 mt-[150px]'>
        <h1 className='text-center w-[100%] text-6xl font-bold'>404 Error Page</h1>
        <Image src='/etienne-girardet-OA0qcP6GOw0-unsplash.jpg'
         width={600}
         height={600}   
         sizes='80%'
         priority
         alt='img'
        />
    </div>
    <div className='ml-9'>
    <button onClick={()=>Redirect.push('/')} className='border-[1px] bg-cyan-500 px-7 py-2 font-bold cursor-pointer rounded-full text-white text-2xl'>Back To Home Page</button>
    </div>
    </div>
  )
}

export default NotFound
