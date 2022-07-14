import '../css/ProjectSection.css';
import api from '../images/api.png';
import crud from '../images/crud.png';
import arduino from '../images/arduino.png';
import ui_ux from '../images/ui_ux.png';
import landing from '../images/landing.png';
import Card from './Card';

const ProjectSection = ({darkMode}) => {
    
    const cards = [
        {
            rotation: 'rotateZ(2deg)',
            justifyContent: `flex-end`,
            alignItems: `center`,
            src: api,
            height: '100%',
            width: 'unset',
            heading: 'API PROJECTS',
            text: 'Readonly projects using rapid and restful APIs',
        },
        {
            rotation: 'rotateZ(-2deg)',
            justifyContent: `center`,
            alignItems: `flex-end`,
            src: crud,
            height: '125%',
            width: 'unset',
            heading: 'CRUD WEB APPS',
            text: 'Full Stack crud web apps',
        },
        {
            rotation: 'rotateZ(2deg)',
            justifyContent: `center`,
            alignItems: `flex-end`,
            src: arduino,
            height: '120%',
            width: 'unset',
            heading: 'arduino projects',
            text: 'Prototyping, building & coding Arduino-based projects',
        },
        {
            rotation: 'rotateZ(-2deg)',
            justifyContent: `center`,
            alignItems: `flex-end`,
            src: ui_ux,
            height: '120%',
            width: '100%',
            heading: 'ui/ux design',
            text: 'Building user interfaces and user experiences on Figma',
        },
        {
            rotation: 'rotateZ(2deg)',
            justifyContent: `center`,
            alignItems: `flex-end`,
            src: landing,
            height: '115%',
            width: '100%',
            heading: 'landing pages',
            text: 'Responsive and interactive landing pages with HTML, CSS & JavaScript',
        },
    ]
    
    return (
        <section className="project-section">
            {cards.map((card, index) => (
                <Card darkMode={darkMode} card={card} key={index} />
            ))}
        </section>
    );
}
 
export default ProjectSection;