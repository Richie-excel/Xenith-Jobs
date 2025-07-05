/* eslint-disable react/prop-types */
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

const GetStatusIcon = ({status}) => {
    switch (status) {
        case 'completed':
          return <FaCheckCircle className="w-5 h-5 text-green-500" />;
        case 'pending':
          return <FaClock className="w-5 h-5 text-yellow-500" />;
        case 'failed':
          return <FiAlertCircle className="w-5 h-5 text-red-500" />;
        default:
          return null;
    }
}

export default GetStatusIcon