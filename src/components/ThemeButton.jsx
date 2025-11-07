import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
    //evento quando o botão for pressionado

    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") == "true");
    useEffect(() => {
        document.querySelector("html").setAttribute("data-bs-theme", darkMode ? "dark":"light");
        localStorage.setItem("darkMode", darkMode);
        console.log(`darkMode:${darkMode}`);
    }, [darkMode])
    return (
        <div className='d-flex'>
            <span className='bi bi-sun-fill'></span>
            <div className="form-check form-switch mx-auto">
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}/>
            </div>
            <span className='bi bi-moon-fill'></span>
        </div>
    )
}

export default ThemeButton