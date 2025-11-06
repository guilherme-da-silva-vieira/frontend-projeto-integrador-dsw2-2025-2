import React, { useState } from 'react'

const ThemeButton = () => {
    //evento quando o botão for pressionado

    const [darkMode, setDarkMode] = useState(false);

    const handleBtnThemeChange = (e) =>{
        if(e.target.checked){
            document.querySelector("html").setAttribute("data-bs-theme","dark");
        }
        else{
            document.querySelector("html").setAttribute("data-bs-theme","light");
        }
        setDarkMode(!darkMode);
    }
    return (
        <div>
            <div className="form-check form-switch">
                <span className='bi bi-sun-fill'></span><input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={handleBtnThemeChange}/><span className='bi bi-moon-fill'></span>
            </div>
        </div>
    )
}

export default ThemeButton