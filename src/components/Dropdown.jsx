import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mensagens
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/mensagens/">Visualizar</Link></li>
                    <li><Link className="dropdown-item" to="/mensagens/create">Criar</Link></li>
                </ul>
            </li>
        </>
    )
}

export default Dropdown