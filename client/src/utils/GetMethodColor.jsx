
const GetMethodColor = (method) => {
 
    switch (method) {
      case 'MTN MOMO':
        return 'bg-yellow-100 text-yellow-800';
      case 'Orange Money':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
}

export default GetMethodColor