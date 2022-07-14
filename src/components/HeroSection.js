import '../css/HeroSection.css';
import illustration from '../images/hero-illustration.png'
import illustrationDark from '../images/hero-illustration-dark.png'
import arrowDark from '../icons/Arrow_02_dark.svg'
import arrowLight from '../icons/Arrow_02_light.svg'
import contactMe from '../icons/contact-me.svg'
import contactMeDark from '../icons/contact-me-dark.svg'

const HeroSection = ({darkMode}) => {
    return (
        <section className="hero">
            <div className="illustration-wrapper">
                <img src={darkMode ? illustrationDark : illustration} className="illustration" alt="hero illustration" />
                <svg width="162" height="169" viewBox="0 0 162 169" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob1'>
                    <path d="M111.653 4.37009C127.335 8.52213 144.534 12.9326 154.146 26.0008C163.559 38.8002 161.658 56.2333 161.484 72.1209C161.334 85.7384 156.703 98.1213 153.208 111.284C149.018 127.063 151.532 146.727 138.92 157.094C126.333 167.442 107.551 161.032 91.2972 162.177C73.9733 163.398 54.4972 174.028 40.2861 164.046C25.9556 153.979 31.3516 131.147 24.3016 115.116C17.5764 99.8235 0.232358 89.1511 0.00341811 72.4468C-0.230443 55.3835 11.576 40.5065 23.1066 27.9264C34.2801 15.7359 48.3821 6.48067 64.3628 2.22929C79.9273 -1.91137 96.0839 0.247837 111.653 4.37009Z" fill={darkMode ? "#404040" : "#FFCC80"}/>
                </svg>
                <svg width="187" height="184" viewBox="0 0 187 184" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob2'>
                    <path d="M119.872 7.6244C130.234 10.264 139.315 16.0729 148.673 21.3427C159.031 27.1762 171.649 30.6377 178.397 40.5828C185.118 50.4881 184.71 63.6764 185.561 75.7095C186.37 87.1629 186.663 98.8363 183.29 109.787C180.014 120.423 170.985 127.967 166.358 138.061C161.116 149.497 163.098 164.847 154.096 173.479C145.322 181.894 131.509 181.585 119.565 182.934C108.43 184.191 97.4834 181.613 86.2911 181.137C74.5233 180.635 61.9907 185.034 51.275 180.024C40.5865 175.027 34.9458 163.081 27.5892 153.694C20.4643 144.603 12.934 135.844 8.3034 125.192C3.56099 114.284 -0.981301 102.541 0.185093 90.6589C1.34484 78.8443 9.97128 69.4668 14.8317 58.6879C19.4996 48.3358 22.1914 37.1824 28.5261 27.8066C35.2547 17.8477 41.9569 6.07244 53.1035 2.04299C64.4516 -2.05932 76.6874 5.05817 88.6809 6.06075C99.145 6.93548 109.683 5.02897 119.872 7.6244Z" fill={darkMode ? "#404040" : "#FFCC80"}/>
                </svg>
            </div>
            <div className="hero-text-wrapper">
                <p className="lead-text">
                    Hi, my name is
                </p>
                <h1 className='name'>
                    <strong style={{
                        color: `${darkMode ? '#A1077E' : '#E10089'}`,
                        textShadow: `${darkMode ? '2px 2px 0 #FFFFFF' : '2px 2px 0 #000000'}`,
                    }}>
                        iffie
                    </strong>
                    <strong style={{
                        color: `${darkMode ? '#57B36F' : '#9FDDBE'}`,
                        textShadow: `${darkMode ? '2px 2px 0 #FFFFFF' : '2px 2px 0 #000000'}`,
                    }}>
                        ovie
                    </strong>
                </h1>
                <p className="lead-paragraph">
                    I.m a full stack developer specialized in building (and occassionally designing) exceptional digital experiences on the web
                </p>
                <div className="cta-wrapper">
                    <a href="/" className="cta-button">
                        <img src={darkMode ? contactMeDark : contactMe} alt="contact me button" />
                    </a>
                    <img src={darkMode ? arrowLight : arrowDark} alt="" className="cta-arrow" />
                    <svg width="228" height="241" viewBox="0 0 248 261" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob3'>
                        <path d="M173.03 51.5529C185.394 64.7387 196.762 77.642 207.786 91.9674C220.887 108.99 239.103 122.981 244.084 143.88C249.571 166.902 248.134 192.563 236.699 213.287C225.111 234.288 204.364 250.4 181.436 257.419C159.793 264.045 136.372 258.13 115.056 250.528C97.3805 244.223 87.3913 225.815 70.4129 217.82C50.3562 208.377 21.3672 217.239 7.54292 199.905C-5.78127 183.197 4.74125 158.237 5.8713 136.89C6.97567 116.028 5.33919 94.7975 14.1107 75.8362C23.4404 55.6684 38.7449 38.9507 57.0217 26.3189C76.5995 12.788 99.2025 -4.09789 122.45 0.958844C146.153 6.11481 156.435 33.8554 173.03 51.5529Z" fill={darkMode ? "#404040" : "#FFCC80"}/>
                    </svg>
                </div>
            </div>
        </section>
    );
}
 
export default HeroSection;