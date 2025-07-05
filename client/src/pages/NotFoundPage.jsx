import { FaExclamationTriangle } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <>
        <section className="text-center flex flex-col justify-center items-center h-96">
            <FaExclamationTriangle className="text-yellow-400 mb-4 text-7xl"/>
            <h1 className="text-6xl font-bold mb-4">Ooopps!</h1>
            <p className="text-xl mb-5">This page does not exist</p>
            <NavLink
                to="/"
                className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
            >
                Go Back
            </NavLink>
        </section>
    </>
  )
}

export default NotFoundPage