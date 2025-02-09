import { Link,useLocation} from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
  return (
      <div>
          <ul>
              <li><Link to='/' className={location.pathname === "/" ? "active" : ""}> Home </Link> </li>
              <li><Link to='/about' className={location.pathname === "/about" ? "active" : ""}> About </Link> </li>
              <li><Link to='/contactUs' className={location.pathname === "/contactUs" ? "active" : ""}> Contact Us </Link> </li>
              
          </ul>
    </div>
  )
}

export default Navbar