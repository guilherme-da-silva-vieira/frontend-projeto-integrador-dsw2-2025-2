import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Expirar from '../../services/Expirar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DashboardAdmin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [ListaMensagens, setListaMensagens] = useState([]);
    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3000/api/usuarios/logout", { method: "POST" });
        } catch (e) {
            console.error("Erro ao fazer logout no backend", e);
        }
        localStorage.clear();
        navigate("/usuarios/login");
    };

    const handlePromoteUser = async (id) => {
        if (!confirm("Tem certeza que quer mudar o papel do usuário?")) return;
        const token = localStorage.getItem("token");
        try {
            const mudanca = await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
        } catch (error) {
            alert("Não foi possível mudar papel")
            console.log(error);
        }
        navigate("/dashboard");
    }
    const handleDeleteMessage = async (id) => {
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
                setListaMensagens(ListaMensagens.filter(m => m.id !== id));
            } else {
                alert("Erro ao excluir. Verifique se você tem permissão.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };
    const handleDeleteUser = async (id) => {
        if (!confirm("Tem certeza que deseja excluir?")) return;

        const token = localStorage.getItem("token"); // Assumindo que guardou o token aqui

        try {
            const response = await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                // Remove da tela sem recarregar a página
                setListaUsuarios(listaUsuarios.filter(m => m.id !== id));
            } else {
                alert("Erro ao excluir. Verifique se você tem permissão.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/usuarios/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);
        // Verificação de papel (0 = Admin)
        if (parsedUser.papel !== 0) {
            alert("Acesso negado. Esta área é restrita para Administradores.");
            navigate("/dashboard/user"); // Redireciona para o dashboard correto
            return;
        }
        setUser(parsedUser);

        // Busca lista de usuários (Apenas Admin vê isso neste exemplo)
        const fetchUsuarios = async () => {
            try {
                // A rota GET /api/usuarios é pública no backend atual, mas aqui consumimos como exemplo de dado admin
                const response = await fetch("http://localhost:3000/api/usuarios");
                const data = await response.json();
                setListaUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };
        const fetchMensagens = async () => {
            const token = localStorage.getItem("token");
            try {
                // A rota GET /api/usuarios é pública no backend atual, mas aqui consumimos como exemplo de dado admin
                const response = await fetch("http://localhost:3000/api/mensagens/admin ", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const data = await response.json();
                setListaMensagens(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };
        fetchUsuarios();
        fetchMensagens();
    }, [navigate]);

    if (!user) return null;

    return (
        <>
            <Expirar />
            <Navbar />
            <div className='m-auto'>
                <div className='text-center'>
                    <div>
                        <h1>Painel do Administrador</h1>
                        <p>Bem-vindo, {user.nome} (ID: {user.id}).</p>
                        <p>Você tem acesso total ao gerenciamento do sistema.</p>
                        <button className='btn btn-lg btn-success' onClick={() => navigate("/usuarios/profile")}>Meu Perfil</button>
                        <br />
                        <button className='mt-2 btn btn-lg btn-primary' onClick={() => navigate("/mensagens")}>Minhas Mensagens</button>
                        <br />
                        <button className='mt-2 btn btn-lg btn-danger' onClick={() => handleLogout()}>Sair</button>
                    </div>
                </div>

                <h2 className='text-center'>Gestão de Usuários</h2>
                <div>
                    <table className='w-50 m-auto table table-striped table-hover border border-secondary rounded'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaUsuarios.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.nome}</td>
                                    <td>
                                        {   u.id == user.id ?
                                            <button className='btn btn-warning'><i className='bi bi-info'></i>Detalhes</button>
                                            :
                                            <button className='btn btn-warning' onClick={() => navigate(`/usuarios/show/${u.id}`)}><i className='bi bi-info'></i>Detalhes</button>
                                        }
                                        {
                                            u.id == user.id ? <button className='btn btn-danger'><i className="bi bi-person-x"></i>Remover</button> : <button className='btn btn-danger' onClick={() => handleDeleteUser(u.id)}><i className="bi bi-person-x"></i>Remover</button>
                                        }
                                        {u.id == user.id ?
                                            <button className='btn btn-info'><i className="bi bi-arrow-down-up"></i>{u.papel != 0 ? "Promover" : "Rebaixar"}</button>
                                            :
                                            <button className="btn btn-info" onClick={() => handlePromoteUser(u.id)}><i className="bi bi-arrow-down-up"></i>{u.papel != 0 ? "Promover" : "Rebaixar"}</button>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className='text-center'>Gestão de mensagens</h2>
                <div>
                    <table className='m-auto w-50 table table-striped table-hover border border-secondary rounded'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuarios_id</th>
                                <th>Usuarios_id_destinatario</th>
                                <th>Mensagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListaMensagens.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.Usuarios_id}</td>
                                    <td>{u.Usuarios_id_destinatario}</td>
                                    <td>{u.mensagem}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => navigate(`/mensagens/show/${u.id}`)}> <i className='bi bi-info-circle'></i> Detalhes</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteMessage(u.id)}> <i className='bi bi-eraser'></i> Remover</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    );
};

export default DashboardAdmin;
