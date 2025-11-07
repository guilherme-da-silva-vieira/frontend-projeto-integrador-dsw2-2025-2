import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const MensagensCreate = () => {
  const [Usuarios_id, setUsuarios_Id] = useState(1);
  const [Usuarios_id_destinatario, setUsuarios_id_destinatario] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const enviaFormulario = async (e) => {
    e.preventDefault();
    const dadosEnviados = {
      Usuarios_id,
      Usuarios_id_destinatario,
      mensagem
    };
    const dadosJSON = JSON.stringify(dadosEnviados);
    console.log(dadosJSON);
      const requisicao = await fetch("http://localhost:3000/api/mensagens/", {
        method: "POST",
        body: dadosJSON,
        headers:{
          'Content-Type': 'application/json'
        },
      });
      console.log(requisicao);
  }
   return (
    <>
      <Navbar />
      <form onSubmit={enviaFormulario}>
        <div className='m-3 border border-secondary rounded p-2'>
          <p className='fs-1 text-center'>Enviar nova mensagem</p>
          <label className='form-label fs-3' htmlFor="Usuarios_id">Usuário:</label>
          <input className='form-control' type="number" name="Usuarios_id" id="Usuarios_id" value={Number(Usuarios_id)} min="1" onChange={(e) => setUsuarios_Id(e.target.value)} />
          <br />
          <label className='form-label fs-3' htmlFor="Usuarios_id_destinatario">Destinatário:</label>
          <input className='form-control' type="number" name="Usuarios_id_destinatario" id="Usuarios_id_destinatario" min="1" value={Usuarios_id_destinatario} onChange={(e) => setUsuarios_id_destinatario(Number(e.target.value))} />
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

export default MensagensCreate