import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const MensagensEdit = () => {
  const [Usuarios_id, setUsuarios_Id] = useState(1);
  const [id,setId] = useState(1);
  const [Usuarios_id_destinatario, setUsuarios_id_destinatario] = useState(1);
  const [mensagem, setMensagem] = useState("");
  return (
    <>
      <Navbar />
      <form onSubmit={enviaFormulario()}>
        <div className='m-3 border border-secondary rounded p-2'>
          <p className='fs-1 text-center'>Editar mensagem</p>
          <label className='form-label fs-3' htmlFor="id">ID da Mensagem:</label>
          <input className='form-control' type="number" name="idmensagem" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
          <label className='form-label fs-3' htmlFor="usuario">Usuário:</label>
          <input className='form-control' type="number" name="usuario" id="usuario"  value={Usuarios_id} onChange={(e) => setUsuarios_Id(e.target.value)}/>
          <label className='form-label fs-3' htmlFor="destinatario">Destinatário:</label>
          <input className='form-control' type="number" name="destinatario" id="destinatario" value={Usuarios_id_destinatario} onChange={(e) => setUsuarios_id_destinatario(e.target.value)}/>
          <div className='mb-3'>
            <label htmlFor="mensagem" className='form-label fs-3'>Digite sua mensagem:</label>
            <textarea name="mensagem" id="mensagem" className='form-control' rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
          </div>
          <button type='submit' className='btn btn-lg btn-success'>Enviar Mensagem</button>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default MensagensEdit