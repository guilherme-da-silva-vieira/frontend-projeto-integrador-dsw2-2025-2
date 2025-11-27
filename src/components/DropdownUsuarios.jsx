import React from 'react'
import { Link } from 'react-router-dom'

const DropdownUsuarios = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/usuarios/login">Entrar</Link></li>
                    <li><Link className="dropdown-item" to="/usuarios/register">Cadastrar</Link></li>
                </ul>
            </li>
        </>
    )
}

export default DropdownUsuarios