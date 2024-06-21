'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faFileInvoice, faCalendarDays, faUserTie, faCommentDots, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        // the below div used to have flex class
        <div className=''> 
            <div className='h-screen bg-white fixed z-50'>
                <div className={`${open ? 'w-64' : 'w-12'} duration-300 relative flex items-center`}>
                    <div className={`${open ? 'pl-7 top-5 absolute' : 'hidden'}`}>
                        <h2 className='text-4xl font-bold text-[#CE00FF]'>icon</h2>
                        <p className='text-[12px] text-[#A686AD]'>placeholder subtext</p>
                    </div>
                    <FontAwesomeIcon icon={faGripLines} className={`absolute cursor-pointer right-1 top-7 w-7 text-3xl text-[#CE00FF] ${open ? 'rotate-90' : ''}`} onClick={() => setOpen(!open)} />
                </div>

                <div className={`pt-[100px] ${open ? 'w-64' : 'w-12'}`}>
                    <Link href='/' activeClassName='active'>
                        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
                            <FontAwesomeIcon icon={faFileInvoice} className="mr-5 text-2xl" />
                            <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Overview</h2>
                        </div>
                    </Link>
                    <Link href='/schedule' activeClassName='active'>
                        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
                            <FontAwesomeIcon icon={faCalendarDays} className="mr-5 text-2xl" />
                            <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Schedule</h2>
                        </div>
                    </Link>
                    <Link href='/studentlist' activeClassName='active'>
                        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
                            <FontAwesomeIcon icon={faUserTie} className="mr-5 text-2xl" />
                            <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Student List</h2>
                        </div>
                    </Link>
                    <Link href='/message' activeClassName='active'>
                        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
                            <FontAwesomeIcon icon={faCommentDots} className="mr-5 text-2xl" />
                            <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Messages</h2>
                        </div>
                    </Link>
                    <Link href='/payment' activeClassName='active'>
                        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
                            <FontAwesomeIcon icon={faSackDollar} className="mr-5 text-2xl" />
                            <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Payment Info</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`ml-12 sm:ml-20 duration-300 ${open ? 'ml-64' : 'ml-16'}`}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
