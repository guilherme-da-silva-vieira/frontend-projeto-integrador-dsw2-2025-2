import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
    //evento quando o botão for pressionado

    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") == "true" ? true:false);

    const handleBtnThemeChange = (e) =>{
        if(e.target.checked){
            document.querySelector("html").setAttribute("data-bs-theme","dark");
        }
        else{
            document.querySelector("html").setAttribute("data-bs-theme","light");
        }
        setDarkMode(!darkMode);
    }
    useEffect(() => {
        if(darkMode)
            document.querySelector("html").setAttribute("data-bs-theme","dark");
        else
            document.querySelector("html").setAttribute("data-ba-theme", "light")
        console.log(darkMode);
    }, [])
    return (
        <div>
            <div className="form-check form-switch">
                <span className='bi bi-sun-fill'></span><input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={darkMode} onChange={handleBtnThemeChange}/><span className='bi bi-moon-fill'></span>
            </div>
        </div>
    )
}

export default ThemeButton