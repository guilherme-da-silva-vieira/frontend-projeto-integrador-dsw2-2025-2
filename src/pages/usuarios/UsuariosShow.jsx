import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Expirar from "../../services/Expirar";
import Navbar from "../../components/Navbar";
import Ferramentas from "../../components/Ferramentas";
import Footer from "../../components/Footer";

const UsuariosShow = () => {
    const params = useParams({});
    const id = params.id;
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        if (!storedUser || !storedToken) {
            alert("é preciso estar logado para acessar esta página!");
            navigate("/usuarios/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.id == id) {
            alert("Não é possível visualizar seu perfil");
            navigate("/dashboard");
        }
        if (parsedUser.papel != 0) {
            alert("Esta área é restria para administradores");
            navigate("/dashboard");
            return;
        }
        const fetchUsuario = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/usuarios/${id}`);
                if (response.status == 200) {
                    const decode = await response.json();
                    setUser(decode);
                }
                else {
                    alert("Não foi possível obter usuário!");
                    navigate("/dashboard");
                    return;
                }
            }
            catch {
                alert("Um erro inesperado ocorreu durante a busca da mensagem!");
                navigate("/dashboard");
            }
        };
        fetchUsuario();
    }, [navigate, id, setToken, token, setUser, user]);
    return (
        <>
            <Expirar />
            <Navbar />
            <div className="row m-2 g-4">
                <div className="col-md-6 col-12">
                    <Ferramentas />
                </div>
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-header">
                            <p>ID:{user.id}</p>
                        </div>
                        <div className="card-body">
                            <p>Nome:{user.nome}</p>
                            <p>Papel:{user.papel == 0 ? "Administrador(0)" : "Usuário(1)"}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success" onClick={() => navigate("/dashboard")}><i className="bi bi-arrow-return-left"></i> Voltar</button>
                            <button className="btn btn-warning" onClick={() => navigate(`/admin/usuarios/sobrescrever/${id}`)}><i className="bi bi-pen"></i> Sobrescrever Usuário</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0">
                <Footer />
            </div>
        </>
    );
}
export default UsuariosShow