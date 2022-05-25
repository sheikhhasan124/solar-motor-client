
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navber from './pages/Shared/Navber';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navber/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
