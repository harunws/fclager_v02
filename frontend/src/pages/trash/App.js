import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Update from './pages/Update';
import Navbar from './pages/Navbar';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <>
      <Navbar />
      <div className="justify-content-center">
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/insert" element={<Insert />}/>
          <Route path="/details/:ids" element={<UserDetail />}/>
          <Route path="/update/:ids" element={<Update />}/>          
        </Routes>
    </div>
    </>    
  );
}

export default App;
