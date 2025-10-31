import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const MensagensCreate = () => {
  return (
    <>
      <Navbar/>
        <div className='m-3 border border-secondary rounded p-2'>
          <p className='fs-1 text-center'>Enviar nova mensagem</p>
          <label className='form-label fs-3' htmlFor="usuario">Usuário:</label>
          <input className='form-control' type="text" name="usuario" id="usuario" />
          <br />
          <label className='form-label fs-3' htmlFor="destinatario">Destinatário:</label>
          <input className='form-control' type="text" name="destinatario" id="destinatario" />
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

export default MensagensCreate