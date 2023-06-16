import './App.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// pages
import Home from "./pages/Home/Home"
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;