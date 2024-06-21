'use client'
import React from 'react'
// Schedule Data
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


// Importing Registerlicense from Syncfusion
import { registerLicense } from '@syncfusion/ej2-base';
// Adding Registerlicense from Syncfusion website
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx3R3xbf1x0ZFZMZFtbRXdPMyBoS35RckVlWH1edHRWQmheUUZy');


const Schedule = () => {

  

  return (
    <div>
        <div>   
       <div className={`py-4 sm:px-5 px-3 sm:text-2xl font-semibold flex-1 h-screen max-w-full`}>
          {/* Scheduling Heading */}
            <h1 className='shadow py-3 pl-5 lg:rounded-full rounded mb-3 text-[18px] sm:text-2xl max-w-[100%]'>Scheduling</h1>

            {/* Schedule Component */}
          <div id='calendar'>
                <ScheduleComponent currentView='Week'>
                <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
                </ScheduleComponent>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Schedule;