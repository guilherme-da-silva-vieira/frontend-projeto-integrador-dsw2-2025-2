import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaMensagem = () => {
    const [user, setUser] = useState({})
    const [mensagens, setMensagens] = useState([]);
    const [erro, setErro] = useState(null);
    const token = localStorage.getItem("token");
    // Função para deletar
    const handleDelete = async (id) => {
        if (!confirm("Tem certeza que deseja excluir?")) return;

        const token = localStorage.getItem("token"); // Assumindo que guardou o token aqui

        try {
            const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                // Remove da tela sem recarregar a página
                setMensagens(mensagens.filter(m => m.id !== id));
            } else {
                alert("Erro ao excluir. Verifique se você tem permissão.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    // Função para carregar mensagens
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        const fetchMensagens = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("http://localhost:3000/api/mensagens", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error("Erro ao buscar dados");
                const data = await response.json();
                setMensagens(data);
            } catch (err) {
                setErro(err.message);
            }
        }
        fetchMensagens();
    }, []);

    if (erro) return <div className="alert alert-danger">{erro}</div>;

    return (
        <div className='row'>
            {mensagens.map(mensagem =>
                <div className='col-lg-6 col-12 my-2' key={mensagem.id}>
                    <div className="card text-center h-100">
                        <div className="card-header d-flex justify-content-between">
                            <span>De: {mensagem.Usuarios_id}</span>
                            <span>Para: {mensagem.Usuarios_id_destinatario}</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">ID: {mensagem.id}</h5>
                            <p className="card-text text-start p-2 bg-light rounded">{mensagem.mensagem}</p>
                            <div className="d-flex justify-content-center gap-2 mt-3">
                                {
                                    user.id == mensagem.Usuarios_id 
                                    ?
                                    <Link to={`/mensagens/edit/${mensagem.id}`} className='btn btn-primary'>
                                        <i className="bi bi-pencil"></i> Editar
                                    </Link>
                                    :
                                    <button className='btn btn-primary' disabled>
                                        <i className='bi bi-pencil'>Editar</i>
                                    </button>
                                }
                                {user.id == mensagem.Usuarios_id ?
                                    <button onClick={() => handleDelete(mensagem.id)} className='btn btn-danger'>
                                        <i className="bi bi-trash"></i> Excluir
                                    </button>
                                    :
                                    <button className='btn btn-danger' disabled><i className="bi bi-trash"></i> Excluir</button>
                                }
                            </div>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Enviado em: {new Date(mensagem.data_criacao || Date.now()).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListaMensagem