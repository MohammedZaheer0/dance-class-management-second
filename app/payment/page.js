import React from 'react';
import Image from 'next/image';

const Payment = () => {

  // Student Data
  const StudentData = [
    {
      id:1,
      img : '/jake-nackos-IF9TK5Uy-KI-unsplash 1.png',
      name : 'Mirabel',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:2,
      img : '/vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png',
      name : 'Zachary Erza',
      joiningDate : '31th August, 2020',
      feeStatus : 'Paid'
    },
    {
      id:3,
      img : '/austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Love Rawlins',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:4,
      img : '/shannon-vandenheuvel-Z9p4M58Hdyo-unsplash 1.png',
      name : 'Katrina Hawkins',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:5,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Dorian',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:6,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Firstname LastName',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:7,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Hamnet Piercer',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:8,
      img : '/austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Firstname LastName',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:9,
      img : '/vince-fleming-j3lf-Jn6deo-unsplash 1.png',
      name : 'Firstname LastName',
      joiningDate : '31th August, 2020',
      feeStatus : 'Pending'
    },
  ]

  return (
    <div>   
    <div className={`py-4 sm:px-5 px-4  flex-1 h-screen max-w-full`}>
          {/* Payment Info Header */}
         <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl max-w-[100%] font-semibold'>Payment Info</h1>

         <div className='max-w-full mb-10 overflow-x-auto py-5'>

          {/* Payment Table */}
          <table className='min-w-full border-none '>
            <thead className=''>
              <tr className='shadow-lg text-[#A686AD]'>
                <th className='py-1 text-[15px] sm:text-[17px]'>Student</th>
                <th className=' text-[13px] sm:text-[17px]'>Joining Date</th>
                <th className=' text-[13px] sm:text-[17px]'>Fee Status</th>
              </tr>
            </thead>
            <tbody className=''>
              {StudentData.map((student,index) => {
                return(
                <tr className='shadow-lg my-5 ' key={index} >
                <td className='py-3 flex items-center relative'>
                <Image
                src={student.img}
                className='mr-2 h-7 sm:h-9'
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
                priority
                alt="studentimg" /> 
                <span className='font-semibold my-3 text-[13px] md:text-[18px]'>{student.name}</span>
                </td>
                <td className='text-[#A686AD] font-medium text-[13px] md:text-[18px]'>{student.joiningDate}</td>
                <td className={`${student.feeStatus ===  'Paid' ? 'text-[#04BC00]' : 'text-[red] '} font-medium text-[13px] md:text-[18px]`}>{student.feeStatus}</td>
              </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>    
    </div>
    </div>
  )
}

export default Payment