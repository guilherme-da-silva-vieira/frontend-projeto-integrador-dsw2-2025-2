import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import Expirar from '../../services/Expirar';

const DashboardUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/usuarios/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);

        // Verificação de papel (1 = Usuário)
        if (parsedUser.papel !== 1) {
            // Se for admin tentando acessar, pode redirecionar ou apenas avisar
            if (parsedUser.papel === 0) {
                navigate("/dashboard/admin");
                return;
            }
        }
        setUser(parsedUser);
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3000/api/usuarios/logout", { method: "POST" });
        } catch (e) {
            console.error("Erro ao fazer logout no backend", e);
        }
        localStorage.clear();
        navigate("/usuarios/login");
    };
    if (!user) return null;

    return (
        <>
            <Expirar />
            <Navbar />
            <div className='w-50 m-auto text-center border border-secondary rounded mt-5'>
                <div>
                    <div>
                        <h1>Olá, {user.nome}!</h1>
                        <p>Bem-vindo ao seu painel de usuário.</p>
                        <div>
                            <Link className='btn btn-primary' to="/mensagens">Ver Mensagens</Link>
                            <br />
                            <Link className="mt-2 btn btn-success"to="/mensagens/create">Nova Mensagem</Link>
                            <br />
                            <button className='mt-2 btn btn-danger mb-3' onClick={handleLogout}>Sair</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <h2>Minha Conta</h2>
                            <p>Gerencie suas informações pessoais, email e senha de acesso.</p>
                            <Link className='btn btn-primary' to="/usuarios/profile">Ir para Perfil</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Suporte</h2>
                            <p>Precisa de ajuda? Entre em contato com a administração ou veja o sobre nós.</p>
                            <Link className="btn btn-primary" to="/contato">Contato</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0">
                <Footer />
            </div>
        </>
    );
};

export default DashboardUser;
