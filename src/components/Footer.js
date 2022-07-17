import '../css/Footer.css'
import {Link} from 'react-router-dom';
import linkedin from '../icons/linkedin.svg'
import whatsapp from '../icons/whatsapp.svg'
import github from '../icons/github.svg'

const Footer = ({darkMode}) => {
    return (
        <footer style={{
            backgroundColor: `${darkMode ? '#000000' : '#FFCC80'}`
        }}>
            <div className="footer-wrapper">
                <ul className="footer-list">
                    <li className="footer-list-items">
                        <Link to="/">
                            <svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M31 5C31 2.23858 33.2386 0 36 0H38C40.7614 0 43 2.23858 43 5V10H39H35H31V5ZM35 14H31V19C31 21.7614 33.2386 24 36 24H38C40.7614 24 43 21.7614 43 19V14H39V18C39 19.1046 38.1046 20 37 20C35.8954 20 35 19.1046 35 18V14Z" fill={darkMode ? '#FFFFFF' : '#000000'} />
                                <rect x="26" y="6" width="4" height="18" rx="1" fill={darkMode ? '#FFFFFF' : '#000000'} />
                                <path d="M19 24L12.9378 6H25.0622L19 24Z" fill={darkMode ? '#FFFFFF' : '#000000'} />
                                <rect width="12" height="24" rx="5" fill={darkMode ? '#FFFFFF' : '#000000'} />
                            </svg>
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to="/"  style={{
                            color: `${darkMode ? '#FFFFFF' : '#0D0D0D'}`,
                        }}>
                            home
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to="/"  style={{
                            color: `${darkMode ? '#FFFFFF' : '#0D0D0D'}`,
                        }}>
                            about
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to="/"  style={{
                            color: `${darkMode ? '#FFFFFF' : '#0D0D0D'}`,
                        }}>
                            tutorials
                        </Link>
                    </li>
                </ul>
                <ul className="footer-socials-list">
                    <li className="footer-list-items">
                        <Link to="/">
                        <img id='linkedin' src={linkedin} alt="linkedIn icon" />
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to="/">
                        <img id='github' src={github} alt="linkedIn icon" />
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to="/">
                        <img id='whatsapp' src={whatsapp} alt="linkedIn icon" />
                        </Link>
                    </li>
                </ul>
            </div>
            <svg width="184" height="158" viewBox="0 0 184 158" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob9'>
                <path d="M115.632 11.1079C128.683 11.4184 145.543 -1.09085 154.286 8.60306C163.438 18.7497 144.215 36.3759 149.707 48.8878C155.411 61.8835 182.863 60.2495 183.182 74.4383C183.491 88.1603 158.566 87.8441 150.839 99.1878C144.613 108.327 149.898 121.766 144.405 131.363C138.435 141.795 129.692 151.591 118.436 155.806C107.142 160.034 94.6365 156.021 82.6761 154.476C70.6631 152.923 55.9997 155.375 47.5967 146.651C38.6039 137.314 47.0269 119.351 39.0229 109.154C30.1769 97.8845 8.25544 101.278 1.90227 88.4369C-3.78115 76.9496 4.52064 62.7469 10.4379 51.3782C15.9002 40.8838 26.5807 34.6065 34.4969 25.8141C41.8778 17.6162 45.3847 4.56537 55.816 0.977638C66.5831 -2.72558 77.8245 5.14968 89.0508 7.05093C97.9856 8.56411 106.572 10.8924 115.632 11.1079Z" fill={darkMode ? "#0D0D0D" : "#FFC672"} />
            </svg>
            <svg width="254" height="231" viewBox="0 0 254 231" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob10'>
                <path d="M152.245 14.7033C169.571 20.2242 182.688 31.6865 198.965 39.1981C215.844 46.9871 240.814 45.6872 250.324 59.9635C260.039 74.547 247.627 92.8475 245.847 109.575C244.427 122.92 241.442 135.649 240.846 149.039C240.045 167.02 251.6 186.468 241.715 202.338C232.158 217.681 210.429 225.526 190.701 229.546C171.645 233.43 151.921 228.77 132.979 224.498C116.026 220.675 98.5172 216.239 85.8003 205.889C73.7626 196.092 73.9886 179.41 63.7855 168.185C52.6424 155.925 33.3159 150.732 23.6938 137.558C12.1783 121.791 -7.86746 101.279 3.25061 85.3041C15.8594 67.1873 56.396 82.5552 72.8752 66.8918C89.8205 50.7852 68.6446 17.2667 88.7173 4.06819C106.059 -7.33479 131.763 8.1768 152.245 14.7033Z"  fill={darkMode ? "#0D0D0D" : "#FFC672"}/>
            </svg>

        </footer>
    );
}
 
export default Footer;