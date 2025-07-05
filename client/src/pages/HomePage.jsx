import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import CustomButton from '../components/CustomButton'


const HomePage = () => {
  return (
    <>
      <Hero title="Become a React developer" subtitle="Find the job that suit your skills"/>
      <HomeCards/>
      <JobListings isHome={true}/>
      <CustomButton title='All jobs' path='/jobs'/>
    </>
  )
}

export default HomePage