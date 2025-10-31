import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const MensagensEdit = () => {
  return (
    <>
      <Navbar/>
        <div className='m-3 border border-secondary rounded p-2'>
          <p className='fs-1 text-center'>Editar mensagem</p>
          <label className='form-label fs-3' htmlFor="idmensagem">ID da Mensagem:</label>
          <input className='form-control' type="number" name="idmensagem" id="idmensagem" />
          <label className='form-label fs-3' htmlFor="usuario">Usuário:</label>
          <input className='form-control' type="number" name="usuario" id="usuario" />
          <label className='form-label fs-3' htmlFor="destinatario">Destinatário:</label>
          <input className='form-control' type="number" name="destinatario" id="destinatario" />
          <div className='mb-3'>
            <label htmlFor="mensagem" className='form-label fs-3'>Digite sua mensagem:</label>
            <textarea name="mensagem" id="mensagem" className='form-control' rows="5"></textarea>
          </div>
          <button className='btn btn-lg btn-success'>Enviar Mensagem</button>
        </div>
      <Footer/>
    </>
  )
}

export default MensagensEdit