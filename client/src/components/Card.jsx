/* eslint-disable react/prop-types */


const Card = ({bg_color, children}) => {
  return (
    <div className={`${bg_color} rounded-lg shadow-md p-6`} >
        {children}
    </div>
  )
}

export default Card