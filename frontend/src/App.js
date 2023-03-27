import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css';
import {Routes, Route} from 'react-router-dom';
import CustomerHome from './pages/CustomerHome';
import CustomerCreate from './pages/CustomerCreate';
import CustomerUpdate from './pages/CustomerUpdate';
import CustomerNavbar from './pages/CustomerNavbar';
import CustomerDetail from './pages/CustomerDetail';

function App() {
  return (
    <>
      <CustomerNavbar />
      <div className="justify-content-center">
        <Routes> 
          <Route path="/" element={<CustomerHome />}/>
          <Route path="/create" element={<CustomerCreate />}/>
          <Route path="/details/:ids" element={<CustomerDetail />}/>
          <Route path="/update/:ids" element={<CustomerUpdate />}/>          
        </Routes>
    </div>
    </>    
  );
}

export default App;
