import React from 'react'
import { CgLoadbarSound } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { RiNotification4Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
function SideBar() {
  return (
    <div className='sidebar'>
  <div >
    <img src="https://i.ibb.co/gjrzrzL/mainlogo.png" alt="mainlogo" />
    <p>Base</p>
  </div>
<div className='sidebar_mid'>
    <div className='main1' >
        <div>
        <RxDashboard size={24} />
        </div>
        <div>Dashboard</div>
    </div>
    <div className='main1 ' >
        <div className='main2'>
        <CgLoadbarSound size={24}/>
        </div>
        <div className='upload'>Upload</div>
    </div>
    <div className='main1' >
        <div>
        <FaFileInvoice size={24}/>
        </div>
        <div>Invoice</div>
    </div>
    <div className='main1' >
        <div>
        <AiFillSchedule size={24}/>
        </div>
        <div>Schedule</div>
    </div>
    <div className='main1' >
        <div>
        <SlCalender size={24}/>
        </div>
        <div>Calender</div>
    </div>
    <div className='main1' >
        <div>
        <RiNotification4Fill size={24}/>
        </div>
        <div>Notification</div>
    </div>
    <div className='main1' >
        <div>
        <IoSettingsOutline size={24}/> 
        </div>
        <div>Setting</div>
    </div>
</div>
    </div>
  )
}

export default SideBar
