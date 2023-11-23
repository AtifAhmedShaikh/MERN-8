import React from 'react'
import { IoMdHome,IoIosSettings,IoMdNotifications } from "react-icons/io";
import { FaNewspaper,FaRegBookmark ,FaUsers } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate=useNavigate();
  return (
    <React.Fragment>
        <div className='fixed bottom-0 left-0 w-full h-9 flex justify-between items-center text-gray-100 text-lg px-5 bg-gray-800'>
            <button className='bg-transparent hover:scale-110 hover:text-green-500' onClick={()=>navigate('/')}>
            <IoMdHome />
            </button>
            <button className='bg-transparent hover:scale-110 hover:text-green-500' onClick={()=>navigate('/articles')}>
            <FaNewspaper />
            </button>
            <button className='bg-transparent hover:scale-110 hover:text-green-500' onClick={()=>navigate('/notifications')}>
            <IoMdNotifications />
            </button>
            <button className='bg-transparent hover:scale-110  hover:text-green-500' onClick={()=>navigate('/channels/all')}>
            <FaUsers />
            </button>
            <button className='bg-transparent hover:scale-110  hover:text-green-500' onClick={()=>navigate('/channels/all')}>
            <FaRegBookmark />
            </button>
            <button className='bg-transparent hover:scale-110 hover:text-green-500' onClick={()=>navigate('/settings')}>
            <IoIosSettings />
            </button>
        </div>
    </React.Fragment>
  )
}

export default BottomBar