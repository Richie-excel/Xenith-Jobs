/* eslint-disable react/prop-types */
import {useState} from 'react'
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

const JobDetailPage = ({deleteJob}) => {
    const {id} = useParams()
    const job = useLoaderData()
    const [showFullDescription, setShowFullDescription] = useState(false); 

    const toggleDescription = ()=>{
        setShowFullDescription(prev => !prev);
    }

    const navigate = useNavigate()

    const handleDelete = async () => {
      console.log("job id: ", id);
      
      try {

        const confirm = window.confirm('Are you sure you wanna delete this job?')

        if(!confirm){
          return;
        }else{
          await deleteJob(id);
          toast.success("Job deleted successfully")
          navigate('/jobs');
        }
        
      } catch (err) {
        console.error('Error deleting job:', err);
        toast.error("Error deleting toast")
      }
    };

  return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <NavLink
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
            <FaArrowLeft className='mr-2'/>
            Back to Job Listings
        </NavLink>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >

                <FaMapMarker
                  className="text-lg text-orange-700 mr-2"
                />
                <p className="text-orange-700">Boston, MA</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              {showFullDescription ? (
                <>

                    <p className="mb-4">
                        {job.description}
                    </p>
                    <button onClick={toggleDescription} className='w-fit h-fit px-2 py-1 bg-gray-200 hover:bg-gray-500 rounded-xl text-sm '>show less</button>
                </>
              ) : (
                <>
                    <p className="mb-4">
                        {job.description.slice(0,78)}
                    </p>
                    <button onClick={toggleDescription} className='w-fit h-fit px-2 py-1 bg-gray-200 hover:bg-gray-500 rounded-xl text-sm '>show more</button>
                </>
              )}


              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary} / Year</p>
            </div>
          </main>

          {/* <!-- Sidebar --> */}
          <aside>
            {/* <!-- Company Info --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company.name}</h2>

              <p className="my-2">
                {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <NavLink
                to={`/jobs/edit/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Edit Job
                </NavLink>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  )
}

const JobLoader = async({params}) =>{ 
    try {
        const res = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error fetching job: ", error);
    }
       
}

export  {JobDetailPage as default, JobLoader}