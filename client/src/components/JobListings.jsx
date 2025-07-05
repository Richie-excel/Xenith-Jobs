/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import JobListing from "./JobListing"
import Loader from "./Loader";

const JobListings = ({isHome}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() =>{
            const fetchJobs = async () =>{

            try {
                const res = await fetch("/api/jobs");
                const data = await res.json();
                setJobs(Array.isArray(data) ? data : []);
                
            } catch (error) {
                console.log("Error fetching jobs: ", error); 
                setJobs([])               
            }finally{
                setLoading(false);
            }
        }
            fetchJobs();
        },3000)
    }, [])
  return (
    <>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "All Jobs"}
                </h2>
                        {loading 
                        ? 
                            <div className="flex justify-center items-center">
                                <Loader 
                                    loading={loading}
                                />
                            </div>
                        :                             
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {isHome ? (
                                    <>
                                    {jobs.map((job) =>(
                                        <JobListing job={job} key={job.id}/>
                                    )).slice(3)}
                                    </>
                                ):(
                                    <>
                                    {jobs.map((job) =>(
                                        <JobListing job={job} key={job.id}/>
                                    ))}
                                    </>
                                )}
                            
                            </div>
                        }
            </div>
        </section>
    </>
  )
}

export default JobListings