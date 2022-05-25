
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import RequireAuth from './pages/Auth/RequireAuth';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';
import Footer from './pages/Shared/Footer';
import Navber from './pages/Shared/Navber';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navber/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/purchase/:id" element={<RequireAuth><Purchase/></RequireAuth>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/register" element={<Registration/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
