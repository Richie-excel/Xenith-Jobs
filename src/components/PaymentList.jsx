/* eslint-disable react/prop-types */
import { FaPhone, FaCreditCard} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import GetStatusIcon from "../utils/GetStatusIcon";
import GetStatusColor from "../utils/GetStatusColor";
import GetMethodColor from "../utils/GetMethodColor";

const PaymentsList = () => {
  const staticPayments = [
    {
      id: 1,
      name: "John Doe",
      senderNumber: "677123456",
      recipientNumber: "677654321",
      amount: 50000,
      paymentMethod: "MTN MOMO",
      status: "completed",
      date: "2024-07-03",
      time: "14:30"
    },
    {
      id: 2,
      name: "Marie Tankou",
      senderNumber: "699876543",
      recipientNumber: "677234567",
      amount: 25000,
      paymentMethod: "Orange Money",
      status: "pending",
      date: "2024-07-03",
      time: "13:15"
    },
    {
      id: 3,
      name: "Paul Mbarga",
      senderNumber: "677445566",
      recipientNumber: "699887766",
      amount: 100000,
      paymentMethod: "MTN MOMO",
      status: "completed",
      date: "2024-07-02",
      time: "16:45"
    },
    {
      id: 4,
      name: "Sarah Nkomo",
      senderNumber: "699123789",
      recipientNumber: "677998877",
      amount: 15000,
      paymentMethod: "Orange Money",
      status: "failed",
      date: "2024-07-02",
      time: "10:20"
    },
    {
      id: 5,
      name: "David Fotso",
      senderNumber: "677556677",
      recipientNumber: "699445566",
      amount: 75000,
      paymentMethod: "MTN MOMO",
      status: "completed",
      date: "2024-07-01",
      time: "09:30"
    },
    {
      id: 6,
      name: "Grace Biya",
      senderNumber: "699334455",
      recipientNumber: "677223344",
      amount: 30000,
      paymentMethod: "Orange Money",
      status: "pending",
      date: "2024-07-01",
      time: "11:00"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment History</h1>
              <p className="text-gray-600">Track all your mobile money transactions</p>
            </div>
            <NavLink
              to='/payments/make_payment'
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
            >
              <FaCreditCard className="w-5 h-5" />
              New Payment
            </NavLink>
          </div>

          <div className="space-y-4">
            {staticPayments.map((payment) => (
              <div
                key={payment.id}
                className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {<GetStatusIcon status={payment.status}/>}
                    <div>
                      <h3 className="font-semibold text-gray-800">{payment.name}</h3>
                      <p className="text-sm text-gray-600">{payment.date} at {payment.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">{payment.amount.toLocaleString()} XAF</p>
                    <div className="flex gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${GetStatusColor(payment.status)}`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${GetMethodColor(payment.paymentMethod)}`}>
                        {payment.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">From:</span>
                    <span className="font-medium">{payment.senderNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium">{payment.recipientNumber}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">Showing {staticPayments.length} transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsList;