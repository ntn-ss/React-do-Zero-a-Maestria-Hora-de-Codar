import './App.css';

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Components
import Navbar from "./components/Navbar"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  
  return(
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com React Router */}
        {/* Como  o componente tem conteúdo, vai dentro do BrowserRouter*/}
        
        <Navbar></Navbar>
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - Nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirecionamento de uma página antiga chamada "company" para o atual "about"*/}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - No match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;