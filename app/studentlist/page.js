import React from 'react'
import Image from 'next/image';

const StudentList = () => {
  // Dance Names
  const Dances = ['Dance From','Hip-Hop','Contemporary','Bharatanatyam','Ballet','Lorem','Epsum','Dolor','Lorem'];


  // Student Data
  const StudentData = [
    {
      id:1,
      img : '/jake-nackos-IF9TK5Uy-KI-unsplash 1.png',
      name : 'Mirabel',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:2,
      img : '/vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png',
      name : 'Zachary Erza',
      danceForm : 'Ballet',
      joiningDate : '31th August, 2020',
      feeStatus : 'Paid'
    },
    {
      id:3,
      img : '/austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Love Rawlins',
      danceForm : 'Bharatanatyam',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:4,
      img : '/shannon-vandenheuvel-Z9p4M58Hdyo-unsplash 1.png',
      name : 'Katrina Hawkins',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:5,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Dorian',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:6,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Firstname LastName',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:7,
      img : '/austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Hamnet Piercer',
      danceForm : 'Contemporary',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:8,
      img : '/austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Firstname LastName',
      danceForm : 'Contemporary',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:9,
      img : '/vince-fleming-j3lf-Jn6deo-unsplash 1.png',
      name : 'Firstname LastName',
      danceForm : 'Ballet',
      joiningDate : '31th August, 2020',
      feeStatus : 'Paid'
    },
  ]

  return (
    <div>   
   <div className={`py-4 sm:px-5 px-4  flex-1 h-screen max-w-full`}>

        <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl max-w-[100%] font-semibold'>Student List</h1>


        {/* Dance Names List */}
      <div className='max-w-[100%] grid sm:grid-cols-2 grid-cols-1 justify-between  my-5 items-center p-4 shadow-md mb-5'>

        <div className='max-w-[100%]'>

          <h1 className='md:text-4xl text-2xl font-bold text-[#CE00FF]'>143 <span className='sm:text-[15px] text-[#A686AD] text-[13px'>Students</span></h1>

        </div>
        <div className='text-[#A686AD]  flex items-center my-5 sm:my-0 md:justify-end'>
          <span className='font-semibold mr-5'>Sort By:</span>
          <select className='shadow outline-none py-2 px-2 rounded '>
          {Dances.map((dance,index) => {
                  return(
              <option value={dance} key={index} className='font-semibold py-3 '>{dance}</option>
              )
            })}
          </select>
        </div>
      </div>


        {/* Student Data Table     */}
        <div className='max-w-full mb-10 overflow-x-auto'>

          <table className='min-w-full border-none '>
            <thead className='hidden sm:table-header-group'>
              <tr className='shadow-lg text-[#A686AD]'>
                <th className='py-1'>Student</th>
                <th>Dance Form</th>
                <th>Joining Date</th>
                <th>Fee Status</th>
              </tr>
            </thead>
            <tbody className='block sm:table-row-group'>
              {StudentData.map((student,index) => {
                return(
                <tr className='shadow-lg my-5 block sm:table-row' key={index} >
                <td className='py-3 flex items-center relative'>
                <Image src={student.img}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
                sizes='80%'
                priority
                className='mr-2 h-7 sm:h-9'
                alt="studentimg" />
                <span className='font-semibold my-3 text-[13px] md:text-[18px]'>{student.name}</span>
                </td>
                <td className='text-[#A686AD] font-medium text-[13px] md:text-[18px]'>{student.danceForm}</td>
                <td className='text-[#A686AD] font-medium text-[13px] md:text-[18px]'>{student.joiningDate}</td>
                <td className={`${student.feeStatus ===  'Paid' ? 'text-[#04BC00]' : 'text-[#A686AD] '} font-medium text-[13px] md:text-[18px]`}>{student.feeStatus}</td>
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

export default StudentList