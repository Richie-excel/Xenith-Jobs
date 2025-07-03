/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaMapMarker } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const JobListing = ({job}) => {

    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    const toggleDescription = () =>{
        setShowFullDescription(prev => !prev);
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
            </div>
                
                {showFullDescription ? (
                    <>
                        <div className="mb-5">
                            {description}
                        </div>
                        <button onClick={()=>toggleDescription()} className="w-fit h-fit bg-gray-100 p-1 hover:bg-indigo-200 rounded-md shadow-lg">
                            less
                        </button>
                    </>
                ) : (
                    <>
                        <div className="mb-5">
                            { `${description.substring(0,90) + "..."}`}
                        </div>
                        <button onClick={()=>toggleDescription()} className="w-fit h-fit bg-gray-100 p-1 hover:bg-indigo-200 rounded-md shadow-lg">
                            more
                        </button>
                    </>
                   
                )}

            <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                    <FaMapMarker className="text-lg inline mx-1"/>
                    {job.location}
                </div>
                <NavLink
                    to={`/jobs/${job.id}`}
                    className="h-fit bg-[#fe2712] hover:bg-[#f08080] text-white px-3 py-1 rounded-lg text-center text-sm"
                >
                    Read More
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default JobListing