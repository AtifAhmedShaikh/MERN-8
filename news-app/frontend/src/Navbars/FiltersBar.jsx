const filters=Array(20).fill("",0);
const FiltersBar = () => {
  return (
    <div className="filters w-[100%] overflow-x-scroll overflow-y-hidden flex justify-center py-2 px-10 ps-11">
    {
      filters.map(filter=>{
        return <button key={filter+1} className="border border-gray-800 text-gray-800 rounded-[4px] px-3 ml-4 py-1 hover:bg-gray-800 hover:text-gray-100">
        Latest
      </button>
      })
    }
  </div>

  )
}

export default FiltersBar