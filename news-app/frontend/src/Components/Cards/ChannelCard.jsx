
const ChannelCard = () => {
  return (
    <div className='lg:w-[23%] h-[18rem] rounded-md border relative flex justify-between flex-col pb-2 overflow-hidden'>
    <div className='h-[45%] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1697617279806-f151d25022ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D")] w-100 relative flex items-end justify-center'>
        <img className=' bottom-0 w-20 h-20 rounded-[50%]' src="https://images.unsplash.com/photo-1697617279806-f151d25022ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className='flex justify-center flex-col items-center px-2'>
      <p className="font-bold">Bol News</p>
      <p className='font-semibold text-xs text-center'>
        Lorem ipsum, dolor sit  consectetur Lorem ipsum, dolor sit  consectetur Lorem ipsum, dolor sit..
      </p>
      <div className='flex justify-around items-center w-[100%] mt-3'>
        <div className='flex flex-col items-center'>
          <span className='text-[13px] font-bold'>5660</span>
          <span className='text-[9px]'>Followers</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[13px] font-bold'>5660</span>
          <span className='text-[9px]'>Followers</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[13px] font-bold'>5660</span>
          <span className='text-[9px]'>Followers</span>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-5 py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
    </div>
  </div>
  )
}

export default ChannelCard