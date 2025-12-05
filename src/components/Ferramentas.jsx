import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Ferramentas = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/usuarios/logout", { method: "POST" });
    } catch (e) {
      console.error("Erro ao fazer logout no backend", e);
    }
    localStorage.clear();
    navigate("/usuarios/login");
  };
  return (
    <>
      <div className="list-group">
        <NavLink to="/mensagens" className="list-group-item list-group-item-action active" aria-current="true"><span className="bi bi-envelope-fill"></span> Mensagens</NavLink>
        <NavLink to="/mensagens/create" className="list-group-item list-group-item-action list-group-item-success"><span className='bi bi-plus-circle-fill'></span> Nova Conversa</NavLink>
        <NavLink to="/usuarios/profile" className="list-group-item list-group-item-action list-group-item-action list-group-item-primary"><span className='bi bi-person-fill'></span>  Perfil</NavLink>
        <NavLink to="/usuarios/login" onClick={handleLogout} className="list-group-item list-group-item-action list-group-item-danger"><span className='bi bi-box-arrow-left'></span> Sair</NavLink>
      </div>
    </>
  )
}

export default Ferramentas