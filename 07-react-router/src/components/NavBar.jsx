import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar