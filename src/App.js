
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import RequireAuth from './pages/Auth/RequireAuth';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';

import Navber from './pages/Shared/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyItems from './pages/Dashboard/MyItems';
import Payments from './pages/Dashboard/Payments';
import NotFound from './pages/Shared/NotFound';
import User from './pages/Dashboard/User';
import RequireAdmin from './pages/Dashboard/RequirAdmin';
import Blog from './pages/Blog/Blog';
import Review from './pages/Dashboard/Review';
import Myprofile from './pages/Dashboard/Myprofile';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MyPortfolio from './pages/PortFolio/MyPortfolio';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navber/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/product/:id" element={<RequireAuth><Purchase/></RequireAuth>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/blog" element={<Blog/>}></Route>
       <Route path="/register" element={<Registration/>}></Route>
       <Route path='/portfolio' element={<MyPortfolio/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}>
         <Route path='myitem' element={<MyItems/>}></Route>
         <Route path='review' element={<Review/>}></Route>
         <Route index  element={<Myprofile/>}></Route>
         <Route path='addproduct' element={<AddProduct/>}></Route>
         <Route path='manageproduct' element={<ManageProduct/>}></Route>
         <Route path='manageorder' element={<ManageOrder/>}></Route>
         <Route path="user" element={<RequireAdmin><User/></RequireAdmin>}></Route>
         <Route path="payment/:id" element={<Payments/>}></Route>
       </Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
      <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
