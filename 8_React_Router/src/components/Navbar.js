// 2 - Links com React Router

import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* Links comuns */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        {/* NavLink: ativa uma classe caso o link esteja ativo. O classname possibilita um nome personalizado, que não "active". */}
        <NavLink to="/" className={({isActive})=>(isActive ? 'ativo':'inativo')}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? 'ativo':'inativo')}>About</NavLink>
    </nav>
  )
}

export default Navbar