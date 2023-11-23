import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
        <div className='w-full bg-gray-800 h-12 shadow-md flex justify-between px-4 items-center'>
            <div>
                <img className="h-[100%] w-[50px]" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            </div>
            <div>
                <button className='bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700'>Join Us</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Navbar