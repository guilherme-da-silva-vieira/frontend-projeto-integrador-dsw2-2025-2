import React from 'react'
import Expirar from '../../services/Expirar';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    <Expirar/>
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/usuarios/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);

        // Verificação de papel (1 = Usuário)
        if (parsedUser.papel == 1) {
            navigate("/dashboard/user");
            return;
        }
        // Se for admin tentando acessar, pode redirecionar ou apenas avisar
        else if (parsedUser.papel === 0) {
            navigate("/dashboard/admin");
            return;
        }
        else {
            navigate("/usuarios/login");
            return;
        }
    }, [navigate]);

    if (!user) return null;
}

export default Dashboard