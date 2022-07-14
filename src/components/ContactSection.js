import '../css/ContactSection.css';
import Input from './Input';
import arrow_light from '../icons/Arrow_27_light.svg'
import arrow_dark from '../icons/Arrow_27_dark.svg'

const ContactSection = ({darkMode}) => {

    const inputs = [
        {
            type: 'text',
            placeholder: 'Name',
            name: 'name',
        },
        {
            type: 'email',
            placeholder: 'Email',
            name: 'email',
        },
        {
            type: 'text',
            placeholder: 'Subject',
            name: 'subject',
        },
    ]

    return (
        <section className="contact-section">
            <form className="contact-wrapper">
                
                <svg width="343" height="386" viewBox="0 0 343 386" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob7'>
                    <path d="M149.033 27.0626C180.379 36.9734 208.087 55.5677 236.287 81.0805C275.533 116.587 333.254 140.631 341.354 201.058C349.443 261.399 301.675 292.711 268.865 324.101C243.904 347.981 212.392 348.125 180.831 354.634C136.546 363.766 91.6673 408.858 50.6208 369.106C8.87906 328.682 8.14807 248.358 3.65355 183.048C-0.605023 121.167 -6.11335 49.366 26.2287 14.6644C57.0498 -18.4052 106.335 13.5624 149.033 27.0626Z" fill={darkMode ? "#404040" : "#FFCC80"}/>
                </svg>
                <h2>send me a mail</h2>
                {inputs.map((input, index) => (
                    <Input darkMode={darkMode} input={input} key={index} />
                ))}
                <textarea placeholder='Message' name="message" id="message" rows="15"  style={{
                    backgroundColor: `${darkMode ? '#F2F2F2' : '#FFFFFF'}`,
                    boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
                }} />
                <div className="send-wrapper">
                    <button type='button' className='send-mail'  style={{
                        backgroundColor: `${darkMode ? '#A1077E' : '#E10089'}`,
                        boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
                    }}>
                        send
                    </button>
                    <img className='contact-arrow' src={darkMode ? arrow_light : arrow_dark} alt="hand drawn arrow" />
                    <svg width="168" height="166" viewBox="0 0 168 166" fill="none" xmlns="http://www.w3.org/2000/svg" className='blob blob8'>
                        <path d="M77.0905 0.705463C86.4407 2.87878 91.9513 12.6579 100.441 17.1387C108.124 21.1938 116.539 23.0671 124.763 25.8668C136.692 29.9281 151.987 28.1445 160.381 37.5445C167.987 46.0637 168.474 60.2244 165.214 71.1703C161.822 82.5595 144.474 86.428 142.339 98.1183C139.82 111.918 156.748 124.983 152.923 138.48C149.641 150.058 136.615 158.989 124.671 160.461C111.317 162.107 100.542 145.507 87.1304 146.589C75.2503 147.547 69.2607 166.989 57.393 165.889C46.1997 164.851 41.1418 150.624 34.3156 141.693C28.6691 134.305 24.0436 126.32 20.5605 117.698C17.4646 110.035 18.1745 101.374 14.9517 93.7639C11.1959 84.8946 0.880588 78.8855 0.0608157 69.2888C-0.727949 60.0551 6.33806 52.0373 10.6884 43.8545C15.0196 35.7075 19.2682 27.4713 25.772 20.9266C32.438 14.2187 40.2986 8.67149 49.0971 5.20462C57.9655 1.71017 67.806 -1.45259 77.0905 0.705463Z" fill={darkMode ? "#404040" : "#FFCC80"}/>
                    </svg>
                </div>
            </form>
        </section>
    );
}
 
export default ContactSection;