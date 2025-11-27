import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-center'>Cadastrar</h1>
      <div className='w-75 m-auto'>
        <form>
            <div className='form-floating mb-3 border border-secondary rounded'>
              <input type="text" className='form-control' name="nome" id="nome" placeholder='nome' />
              <label htmlFor="nome">Nome do Usuário</label>
            </div>
          <div className='form-floating mb-3 border border-secondary rounded'>
            <input type="email" className='form-control' name="email" id="email" placeholder='email' />
            <label htmlFor="email">Email</label>
          </div>
          <div className='form-floating mb-3 border border-secondary rounded'>
            <input type="password" name="senha" id="senha" className='form-control' placeholder='senha' />
            <label htmlFor="senha">Senha</label>
          </div>
          <div className='form-floating mb-3 border border-secondary rounded'>
            <select className="form-select" name="papel" id="papel" required>
              <option value="1">Usuário</option>
              <option value="0">Administrador/Superusuário/Root</option>
            </select>
            <label htmlFor="papel">Selecionar Papel</label>
          </div>
          <button type="submit" className='btn btn-lg btn-success w-100'>Cadastrar</button>
        </form>
        <div className='text-center'>
                <p className="fs-1 mt-5">Já tem uma conta? <Link className="text-primary" to="/usuarios/login">Fazer Login!</Link></p>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0"><Footer /></div>
    </>
  )
}

export default Register