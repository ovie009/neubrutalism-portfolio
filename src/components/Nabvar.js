import '../css/Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../icons/ovie-logo.svg';

const Navbar = ({darkMode, handleDarkMode}) => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Link to='/' className='logo' style={{
                    backgroundColor: `${darkMode ? '#404040' : '#000000'}`,
                }}>
                    <img src={logo} alt="ovie logo" />
                </Link>
                <div className="nav-right-side">
                    {
                        darkMode ? (
                            <button className="change-theme" type="button" onClick={handleDarkMode} style={{color: '#FFFFFF'}}>
                                Lights on 🌝
                            </button>
                        ) : (
                            <button className="change-theme" type="button" onClick={handleDarkMode}>
                                Lights out 🌚
                            </button>
                        )
                    }
                    <button className="open-sidebar" type="button">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1.5" x2="25" y2="1.5" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="3"/>
                            <line y1="10.5" x2="25" y2="10.5" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="3"/>
                            <line y1="19.5" x2="25" y2="19.5" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="3"/>
                        </svg>
                    </button>
                </div>    
            </div>
        </div>
    );
}
 
export default Navbar;