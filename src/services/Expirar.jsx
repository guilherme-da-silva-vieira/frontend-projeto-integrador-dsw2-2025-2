import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Expirar = () => {
    const estaExpirado = (token) =>{
        if(!token) return true;
        try{
            const tokenDecodificado = jwtDecode(token);
            const horaAtual = Date.now() / 1000;
            return tokenDecodificado.exp < horaAtual;
        }
        catch(erro){
            console.error("Erro ao analisar token!, Erro:",erro);
            return true;
        }
    }
    const navigate = useNavigate();
    useEffect(() =>{
        if(localStorage.getItem("token") || localStorage.getItem("user")){
            const tokenArmazenado = localStorage.getItem("token");
            if(estaExpirado(tokenArmazenado)){
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                alert("Sessão expirou, faça login novamente!")
                navigate("/usuarios/login");
            }
        }
        else{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/usuarios/login");
        }
    },[navigate])
}

export default Expirar