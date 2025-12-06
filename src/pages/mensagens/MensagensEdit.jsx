import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import Expirar from '../../services/Expirar'

const MensagensEdit = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();

  const [Usuarios_id, setUsuarios_Id] = useState("");
  const [Usuarios_id_destinatario, setUsuarios_id_destinatario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(null);

  const token = localStorage.getItem("");

  // Carregar dados da mensagem ao abrir a tela
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);
    if (!storedUser) {
        navigate("/usuarios/login");
        return;
    }
    const fetchMensagem = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Mensagem não encontrada ou erro de permissão");
            
            const data = await response.json();
            
            // Preenche os estados com os dados recebidos
            setUsuarios_Id(data.Usuarios_id);
            setUsuarios_id_destinatario(data.Usuarios_id_destinatario);
            setMensagem(data.mensagem);

        } catch (error) {
            setErro(error.message);
        }
    };

    fetchMensagem();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const dadosAtualizados = {
        Usuarios_id: Number(Usuarios_id),
        Usuarios_id_destinatario: Number(Usuarios_id_destinatario),
        mensagem
    };

    try {
        const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!response.ok) throw new Error("Erro ao atualizar mensagem");

        alert("Mensagem atualizada com sucesso!");
        navigate("/mensagens");

    } catch (error) {
        setErro(error.message);
    }
  }

  return (
    <>
    <Expirar/>
      <Navbar />
      <div className='container mt-4'>
        {erro && <div className="alert alert-danger">{erro}</div>}
        
        <form onSubmit={handleUpdate}>
            <div className='card border-secondary p-4'>
                <p className='fs-2 text-center'>Editar Mensagem #{id}</p>
                
                <div className="mb-3">
                    <label className='form-label' htmlFor="usuario">ID Remetente:</label>
                    <input 
                        className='form-control' 
                        type="number" 
                        id="usuario"  
                        value={Usuarios_id} 
                        onChange={(e) => setUsuarios_Id(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className='form-label' htmlFor="destinatario">ID Destinatário:</label>
                    <input 
                        className='form-control' 
                        type="number" 
                        id="destinatario" 
                        value={Usuarios_id_destinatario} 
                        onChange={(e) => setUsuarios_id_destinatario(e.target.value)}
                        required
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

                <button type='submit' className='btn btn-lg btn-primary w-100'>
                    <i className="bi bi-save"></i> Salvar Alterações
                </button>
                <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/mensagens")}>
                    Cancelar
                </button>
            </div>
        </form>
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
    </>
  )
}

export default MensagensEdit