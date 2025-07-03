import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const linkClass = ({isActive}) => isActive 
        ? 'text-white bg-[#fe2712] hover:bg-[#f08080] hover:text-white rounded-md px-2 py-1' 
        : 'text-white hover:bg-[#f08080] hover:text-white rounded-md px-2 py-1'
  return (

    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div
                    className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                >
                    <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                        <img
                            className="h-16 w-16 bg-white rounded-full"
                            src={logo}
                        />
                        <span className="hidden md:block text-white text-2xl font-bold ml-2">
                            Xenith Jobs
                        </span>
                    </NavLink>
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <NavLink
                                to="/"
                                className={linkClass}>
                                    Home
                            </NavLink>
                            <NavLink
                                to="/jobs"
                                className={linkClass}
                            >
                                Jobs
                            </NavLink>
                            <NavLink
                                to={`/add-job`}
                                className={linkClass}
                            >
                                Add Job
                            </NavLink>
                            <NavLink
                                to="/payments/make_payment"
                                className={linkClass}
                            >
                                Payment
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
  );
}

export default Navbar