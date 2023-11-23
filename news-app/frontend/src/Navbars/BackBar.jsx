import { FaArrowLeft } from "react-icons/fa6";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
const BackBar = ({pageLabel}) => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate(-1)
  }
  return (
    <div className="w-full bg-gray-900 flex justify-between px-5 items-center h-12">
        <div className="flex gap-3 items-center">
            <button className="text-gray-100 h-[100%]">
              <FaArrowLeft />
            </button>
           <h3 className="text-lg text-gray-100 font-bold">{pageLabel}</h3>
        </div>
     <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-2 py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleNavigate}>Logout</button>
    </div>
  )
}
BackBar.propTypes={
  pageLabel:PropTypes.string
}
export default BackBar