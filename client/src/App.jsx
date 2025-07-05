
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import JobsPage from "./pages/JobsPage"
import JobDetailPage, {JobLoader} from "./pages/JobDetailPage"
import PaymentPage from './pages/PaymentPage'
import PaymentForm from "./pages/PaymentForm"
import AddJobPage from "./pages/AddJobPage"
import { toast } from "react-toastify"
import EditJobPage from "./pages/EditJobPage"
import { BASE_URL } from "../api"



const App = () => {

  const deleteJob = async(id) => {
    const res = await fetch(`${BASE_URL}/jobs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    
    console.log("status: ", res.status, res.statusText);
    
    // Fix the status check
    if (res.status !== 200 && res.status !== 204) {
      throw new Error('Delete failed');
    }
    
  }

  const handlePaymentFormSubmit = (formData) => {
    // In a real app, this would send to backend
    console.log('Payment submitted:', formData);
    toast.success('Payment submitted successfully!');
  };

  const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/jobs" element={<JobsPage/>}/>z
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/jobs/:id" element={<JobDetailPage deleteJob={deleteJob} />} loader={JobLoader}/>
      <Route path="/jobs/edit/:id" element={<EditJobPage/>} loader={JobLoader}/>

      <Route path="/add-job" element={<AddJobPage/>}/>
      <Route path="/payments" element={<PaymentPage/>}/>
      <Route path="/payments/make_payment" element={<PaymentForm onSubmit={handlePaymentFormSubmit}/>}/>
      
    </Route>
  )
)
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
