import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom';
import Expirar from '../../services/Expirar';
import { jwtDecode } from 'jwt-decode';
import Ferramentas from '../../components/Ferramentas';

const MensagensCreate = () => {
  // Inicializando estados
  const [Usuarios_id, setUsuarios_Id] = useState("");
  const [Usuarios_id_destinatario, setUsuarios_id_destinatario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem('token');
  const parsedUser = JSON.parse(storedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !storedUser) {
      setErro("Você precisa estar logado para enviar mensagens.");
      navigate("/usuarios/login");
      return;
    }
    else {
      const decode = jwtDecode(token);
      setUsuarios_Id(decode.Usuarios_id);
    }
  }, [storedUser, parsedUser, token]);
  const enviaFormulario = async (e) => {
    e.preventDefault();
    setErro("");

    const dadosEnviados = {
      Usuarios_id: Number(Usuarios_id),
      Usuarios_id_destinatario: Number(Usuarios_id_destinatario),
      mensagem
    };

    try {
      const requisicao = await fetch("http://localhost:3000/api/mensagens/", {
        method: "POST",
        body: JSON.stringify(dadosEnviados),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!requisicao.ok) {
        const errorData = await requisicao.json();
        throw new Error(errorData.erro || "Não foi possível salvar");
      }

      alert("Mensagem enviada com sucesso!");
      navigate("/mensagens");
    } catch (error) {
      console.log(error);
      setErro(error.message);
    }
  }

  return (
    <>
      <Expirar />
      <Navbar />
      <div className="row m-2 g-4">
        <div className='col-md-6 col-12'>
          <Ferramentas/>
        </div>
        <form onSubmit={enviaFormulario} className='col-md-6 col-12'>
          <div className='card border-secondary p-4'>
            <h2 className='text-center mb-4'>Nova Mensagem</h2>

            {erro && <div className="alert alert-danger">{erro}</div>}

            <div className="mb-3">
              <label className='form-label' htmlFor="Usuarios_id_destinatario">ID do Destinatário:</label>
              <input
                className='form-control'
                type="number"
                id="Usuarios_id_destinatario"
                value={Usuarios_id_destinatario}
                onChange={(e) => setUsuarios_id_destinatario(e.target.value)}
                required
                placeholder="Ex: 3"
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="mensagem" className='form-label'>Mensagem:</label>
              <textarea
                id="mensagem"
                className='form-control'
                rows="4"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>
            </div>

            <button type='submit' className='btn btn-success w-100 btn-lg'>
              <i className="bi bi-send-fill"></i> Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  )
}

export default MensagensCreate