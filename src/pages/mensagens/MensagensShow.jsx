import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Expirar from '../../services/Expirar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ferramentas from '../../components/Ferramentas'

const MensagensShow = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();
  const [mensagem, setMensagem] = useState({});
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  if (id == null) {
    navigate("/usuarios/dashboard");
  }
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (!storedUser || !storedToken) {
      navigate("/usuarios/login");
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setToken(storedToken);
    // Verificação de papel (0 = Admin)
    if (parsedUser.papel !== 0) {
      alert("Acesso negado. Esta área é restrita para Administradores.");
      navigate("/dashboard/user"); // Redireciona para o dashboard correto
      return;
    }

    // Busca mensagem
    const fetchMensagem = async () => {
      try {
        // A rota GET /api/mensagens/:id é pública no backend atual, mas aqui consumimos como exemplo de dado admin
        const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
          headers: {
            "Authorization": `Bearer ${storedToken}`,
          }
        });
        if (response.status != 200) { navigate("/dashboard"); return; }
        const data = await response.json();
        setMensagem(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar mensagem:", error);
        navigate("/dashboard");
      }
    };
    fetchMensagem();
  }, [navigate, token, id]);

  if (!user) return null;

  return (
    <>
      <Expirar />
      <Navbar />
      <div className='row m-2 g-4'>
        <div className='col-md-6 col-12'>
          <Ferramentas />
        </div>
        <div className='col-md-6 col-12'>
          <div className='card'>
            <div className='card-header'>
              <p>{`De:${mensagem.Usuarios_id}`}</p>
              <p>{`Para:${mensagem.Usuarios_id_destinatario}`}</p>
            </div>
            <div className='card-body'>
              <p>{mensagem.mensagem}</p>
            </div>
            <dir className='card-footer'>
              <button className='btn btn-warning' onClick={()=>navigate("/dashboard")}><span className='bi bi-arrow-return-left'></span> Voltar para o Dashboard</button>
              <button onClick={()=>navigate(`/admin/sobrescrever/${mensagem.id}`)}className='ms-2 btn btn-primary'><span className='bi bi-pencil-square'></span> Sobrescrever</button>
            </dir>
          </div>
        </div>
      </div>
      <div className='position-absolute bottom-0 start-0 end-0'>
        <Footer />
      </div>
    </>
  )
}

export default MensagensShow