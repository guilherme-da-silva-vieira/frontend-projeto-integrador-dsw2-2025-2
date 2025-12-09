import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Expirar from '../../services/Expirar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { jwtDecode } from 'jwt-decode';

const UsuariosSobrescrever = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({ nome: "", email: "", senha: "" });
    const [token, setToken] = useState("");
    const params = useParams();
    const { id } = params;

    // Carrega dados do localStorage ao iniciar
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
        const decode = jwtDecode(storedToken);
        if(decode.papel != 0) {
            alert("área restrita para administradores!");
            navigate("/dashboard");
        }
        const fetchUsuario = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/usuarios/${id}`);
                const res = await response.json();
                setForm({ nome: res.nome, email: res.email, senha: "" });
            }
            catch {
                alert("Não foi possível obter usuário!");
                navigate("/dashboard");
            }
        }
        fetchUsuario();
    }, [navigate, id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        // Prepara os dados para envio.
        const dadosParaEnviar = {
            nome: form.nome,
            email: form.email,
            senha: form.senha
        };

        try {
            const response = await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(dadosParaEnviar)
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.erro || "Erro ao atualizar");
                return;
            }

            setForm({ ...form, senha: "" }); // Limpa a senha por segurança
            alert("Perfil atualizado com sucesso!");
            navigate("/dashboard");

        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    return (
        <>
            <Expirar />
            <Navbar />
            <div className='h-50 w-50 m-auto mt-5 border rounded'>
                <div>
                    <h1>Perfil de {form.nome}</h1>
                    <p>Papel: {form.papel === 0 ? "Administrador" : "Usuário"}</p>
                    <p>ID: {id}</p>

                    <hr />

                    <h3>Editar Dados</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Nome</label>
                            <input
                                type="text"
                                value={form.nome}
                                onChange={e => setForm({ ...form, nome: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label>Nova Senha (deixe vazio para não alterar)</label>
                            <input
                                type="password"
                                value={form.senha}
                                onChange={e => setForm({ ...form, senha: e.target.value })}
                            />
                        </div>
                        <button className='btn btn-success' type="submit"><i className='bi bi-pencil'></i> Salvar Alterações</button>
                        <br />
                        <Link className="btn btn-warning" to="/dashboard">Voltar</Link>
                    </form>
                </div>
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    )
}

export default UsuariosSobrescrever