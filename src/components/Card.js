const Card = ({darkMode, card}) => {
    return (
        <div className="card" style={{
            boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
            transform: card.rotation
        }}>
            <div className="card-image-wrapper" style={{
                backgroundColor: `${darkMode ? '#BFBFBF' : '#9FDDBE'}`,
                justifyContent: card.justifyContent,
                alignItems: card.alignItems,
            }}>
                <img src={card.src} alt="api" className="card-image" style={{
                    width: card.width,
                    height: card.height,
                }} />
            </div>
            <div className="card-text-wrapper" style={{
                color: `${darkMode ? '#FFFFFF' : '#000000'}`,
                backgroundColor: `${darkMode ? '#404040' : '#FFFFFF'}`,
            }}>
                <h2>{card.heading}</h2>
                <p>{card.text}</p>
            </div>
        </div>
    );
}
 
export default Card;