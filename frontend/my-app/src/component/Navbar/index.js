import {Link} from 'react-router-dom'
import { PiHandbagFill } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./index.css";

const Navbar = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <PiHandbagFill className='nav-logo'/>
      <ul className="nav-menu">
        <li>
            <Link className='nav-link' to='/'>
            Home
            </Link>
        </li>
        <li>
            <Link className='nav-link' to='/product'>
            Product
            </Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
            <button>Login</button>
        </Link>
        <AiOutlineShoppingCart className='cart-logo' />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  </nav>
)

export default Navbar;