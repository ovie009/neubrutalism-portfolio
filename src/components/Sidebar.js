import '../css/Sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar = ({darkMode}) => {
    return (
        <div className="sidebar" style={{
            backgroundColor: `${darkMode ? '#000000' : '#FFCC80'}`,
            border: `${darkMode ? '1px solid #FFFFFF' : '1px solid #000000'}`,
            boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
        }}>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/">About</Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/">Tutorials</Link>
                </li>
                <li className="sidebar-list-item" style={{
                        backgroundColor: `${darkMode ? '#A1077E' : '#E10089'}`,
                        border: `${darkMode ? '1px solid #FFFFFF' : '1px solid #000000'}`,
                        boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
                    }}>
                    <Link to="/">Download Resumé</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;