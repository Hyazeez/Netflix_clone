import './Navbar.css';
import logo from '../../assets/netflex2.png';
import searchicon from '../../assets/search.png';
import bellicon from '../../assets/notification.png';
import profileimg from '../../assets/user.png';
import cartimg from '../../assets/add-to-cart.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt='netflix' className='logo'/>
            <ul>
                <li>HOME</li>
                <li>FILMS</li>
                <li>TV</li>
                <li>MOVIE COLLECTION</li>
                <li>TV COLLECTION</li>
                <li>MY LISTS</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={searchicon} alt='search' className='search'/>
            <img src={bellicon} alt='notification' className='bell'/>
            <div className="navbar-profile">
                <img src={cartimg} alt='add-to-cart' className='cart'/>
                <img src={profileimg} alt='profile' className='profile'/>
                <div className="dropdown">
                    <button> ▾</button>
                    <div className="dropdown-content">
                    <a href='#profile'>My profile</a>
                    <a href='#log'>Logout</a>
                    <a href='#settings'>Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar