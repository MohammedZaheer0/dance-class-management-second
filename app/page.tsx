'use clients';
import React from 'react';
import Image from 'next/image';

const Home = () => {
    // DanceNames Array
  const Dances = ['Hip-Hop','Contemporary','Bharatanatyam','Ballet','Lorem','Epsum','Dolor','Lorem'];


  return (
    <div>   
       <div className='py-4 sm:px-5 px-3 sm:text-2xl font-semibold flex-1 h-screen max-w-[100%]'>
       {/* DashBoard Overview Header */}
            <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl'>Dashboard Overview</h1> 
            <div className='grid lg:grid-cols-2 grid-cols-1 my-7 gap-4'>
                
                {/* Class Today Div */}
                <div className='shadow-lg rounded sm:pb-3 pb-5'>
                    <h1 className='sm:pl-7 pl-5 py-5 '>Classes Today</h1>
                    <div>

                        <div className='sm:max-w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2>Contemporary</h2>
                                <h3 className='sm:text-[15px] text-[13px] text-[#A686AD] sm:my-0 my-2'>21 Students</h3>
                            </div>
                            <p className='sm:text-[15px] text-[13px] text-[#A686AD] ml-5'>10 AM - 11.30 AM</p>
                        </div>

                        <div className='sm:max-w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2 className=''>Ballet</h2>
                                <h3 className='sm:text-[15px] text-[13px] text-[#A686AD] sm:my-0 my-2'>12 Students</h3>
                            </div>
                            <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>3 PM - 4.30 PM</p>
                        </div>


                        <div className='sm:max-w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2>Hip-Hop</h2>
                                <h3 className='sm:text-[15px] text-[13px] text-[#A686AD] sm:my-0 my-2'>37 Students</h3>
                            </div>
                            <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>6.30 PM - 7.30 PM</p>
                        </div>
                    </div>
                </div>

                
                {/* Student Status Div */}
                <div className='shadow-lg rounded'>
                    <h1 className='pl-7 py-5'>Student Status</h1>
                <div className='sm:max-w-[90%] max-w-[80%] mx-auto mb-5 relative' style={{ aspectRatio: '16/9', position: 'relative' }}>
                    <Image src="/graph.png"
                    fill
                    sizes='(max-width: 1500px) 90%, 80%'
                    style={{ objectFit: 'contain' }}
                    priority
                    alt='image'
                />
                </div>
                </div>

            </div>



            <div className='max-w-[100%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3  grid-cols-1 justify-between gap-7'>

            {/* Revenue Div     */}
            <div className='shadow-lg px-5 mb-5'>
                <h2 className='text-xl pt-4'>Revenue</h2>

                <div className='py-5'>
                <h1 className='sm:text-4xl text-3xl'> <i className="fa-solid fa-indian-rupee-sign"></i> 10,500</h1>
                <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>This months revenue so far</p>
                </div>

                <div className='pb-5'>
                    <h1 className='sm:text-4xl text-3xl'><i className="fa-solid fa-indian-rupee-sign"></i> 75,000</h1>
                    <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>Previous month</p>
                </div>

                <div className='flex mb-2 mt-3 '>
                    <div className='mr-[0%] bg-[#FEF7FF] rounded px-5 py-3'>
                        <h1 className='sm:text-5xl text-3xl'>35</h1>
                        <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>Student</p>
                        <p className='sm:text-[15px] text-[13px] text-[#04BC00]'>Have Paid</p>
                    </div>
                    <div className='bg-[#FEF7FF] px-5 py-3 rounded'>
                        <h1 className='sm:text-5xl text-3xl'>108</h1>
                        <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>Students <br /> Yet to Pay</p>
                    </div>
                </div>
                
            </div>


            {/* Top Dance Div                 */}
            <div className='shadow-lg px-5 mb-5'>
                <h3 className='text-xl pt-4'>Top Dance forms</h3>
                <div className='px-5'>
                <ol style={{listStyleType:'decimal'}}>
                    {Dances.map((item, index) => (
                        <li key={index} typeof='number' className='sm:text-xl text-1xl  sm:my-3 my-4 text-[#A686AD]'>{item}</li>
                    ))}
                </ol>
                </div>
            </div>


            {/* Classes Hours Div */}
            <div className='shadow-lg px-5 h-fit pb-5 mb-5'>
                <h2 className='text-xl pt-4'>Class Hours</h2>
                <p className='my-3 text-[#A686AD] sm:text-xl text-[12px]'><span className='sm:text-5xl text-3xl text-black'>31</span>hr <span className='text-black sm:text-5xl text-3xl ml-5'> 45</span>min</p>
                <p className='sm:text-[15px] text-[13px] text-[#A686AD]'>Of dance classes taken <br /> this month so far</p>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Home