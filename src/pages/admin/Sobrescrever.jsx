import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Expirar from "../../services/Expirar";
import { jwtDecode } from "jwt-decode";
import Footer from "../../components/Footer";
import Ferramentas from "../../components/Ferramentas";
const Sobrescrever = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Usuarios_id, setUsuarios_Id] = useState("");
    const [Usuarios_id_destinatario, setUsuarios_id_destinatario] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState(null);
    const [token, setToken] = useState("");
    const [user, setUser] = useState(-1);
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        if (!storedToken && !storedUser) {
            alert("É preciso estar logado para sobrescrever");
            navigate("/usuarios/login");
            return;
        }
        else {
            setToken(storedToken);
        }
        const decode = jwtDecode(storedToken);
        setUser(storedUser);
        if (user.papel == 0) {
            alert("área restrita para administradores!");
            navigate("/dashboard");
            return;
        }
        const fetchMensagem = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setUsuarios_Id(data.Usuarios_id);
                setUsuarios_id_destinatario(data.Usuarios_id_destinatario);
                setMensagem(data.mensagem);
            }
            catch (error) {
                setErro(error.message)
            }
        }
        fetchMensagem();
    }, [id,token]);
    const handleUpdate = async (e) => {
        e.preventDefault();
        const dadosAtualizados = {
            // Usuarios_id: Number(Usuarios_id),
            Usuarios_id: Number(Usuarios_id),
            Usuarios_id_destinatario: Number(Usuarios_id_destinatario),
            mensagem: mensagem
        };
        try {
            const response = await fetch(`http://localhost:3000/api/mensagens/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dadosAtualizados)
            });
            if (!response.ok) throw new Error("Não foi possível sobrescrever mensagem tente novamente!");
            alert("Mensagem atualizada com sucesso!");
            navigate("/dashboard");
        } catch (error) {
            setErro(error.message);
        }
    }
    return (
        <>
            <Expirar />
            <Navbar />
            {erro && <div className="alert alert-danger">{erro}</div>}
            <div className="row m-2 g-4">
                <div className="col-md-6 col-12">
                    <Ferramentas />
                </div>
                <dir className="col-md-6 col-12">
                    <form onSubmit={handleUpdate}>
                        <div className='card border-secondary p-4'>
                            <p className='fs-2 text-center'>Editar Mensagem #{id}</p>
                            <div className="mb-3">
                                <label className='form-label' htmlFor="usuarios">ID Usuário:</label>
                                <input
                                    className='form-control'
                                    type="number"
                                    id="usuarios"
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
                            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/dashboard")}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </dir>
            </div>
            <Footer />
        </>);
}

export default Sobrescrever