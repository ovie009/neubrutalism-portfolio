const Input = ({darkMode, input}) => {
    return (
        <input type={input.type} placeholder={input.placeholder} name={input.name} id={input.name} style={{
            backgroundColor: `${darkMode ? '#F2F2F2' : '#FFFFFF'}`,
            boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
        }} />
    );
}
 
export default Input;