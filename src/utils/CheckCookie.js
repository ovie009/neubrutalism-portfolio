import GetCookie from "./GetCookie";
import SetCookie from "./SetCookie";

const CheckCookie = () => {
    // get cookie value of theme
    let theme = GetCookie("theme");
    if (theme === "") {
        // let default theme be equall to darkMode
        theme = 'light';
        SetCookie('theme', theme, 30);
    }

    if (theme === 'light') return false;
    if (theme === 'dark') return true;
}
 
export default CheckCookie;