import './App.css';
import Signin from './pages/Signin.jsx';
import Login from './pages/login.jsx';
import Home from './pages/Home.jsx';
import Deposit from './pages/deposit.jsx';
import Withdrawal from './pages/withdrawal';
import Balance from './pages/balance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/withdrawal' element={<Withdrawal />} />
      <Route path='/balance' element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
