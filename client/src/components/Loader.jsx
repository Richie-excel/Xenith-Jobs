/* eslint-disable react/prop-types */

import { PulseLoader } from 'react-spinners'

const overrideCss = {
    display: 'block',
    margin: 'auto auto',
}

const Loader = ({loading}) => {
  return (
    <PulseLoader
        loading={loading}
        size={50}
        cssOverride={overrideCss}
        color='#32cd32'
    />
  )
}

export default Loader