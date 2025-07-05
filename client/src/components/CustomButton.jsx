/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
const CustomButton = ({title, path}) => {
  return (
    <section className="m-auto max-w-sm my-10 px-6">
        <Link
          to={path}
          className="block bg-[#fe2712] text-white text-center py-3 px-4 rounded-xl hover:bg-[#f08080]">
            {title}
        </Link>
    </section>
  )
}

export default CustomButton