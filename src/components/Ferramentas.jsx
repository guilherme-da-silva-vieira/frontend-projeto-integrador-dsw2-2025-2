import React from 'react'
import { NavLink } from 'react-router-dom'

const Ferramentas = () => {
  return (
    <>
        <div className="list-group">
            <NavLink to="/mensagens" className="list-group-item list-group-item-action active" aria-current="true"><span className="bi bi-envelope-fill"></span> Mensagens</NavLink>
            <NavLink to="/mensagens/create" className="list-group-item list-group-item-action list-group-item-success"><span className='bi bi-plus-circle-fill'></span> Nova Conversa</NavLink>
            <a href="#" className="list-group-item list-group-item-action list-group-item-action list-group-item-primary"><span className='bi bi-person-fill'></span>  Perfil</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-danger"><span className='bi bi-box-arrow-left'></span> Sair</a>
          </div>
    </>
  )
}

export default Ferramentas