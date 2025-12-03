import { useEffect } from "react";
//import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
const PrivateRoutes = () => {
    const user = localStorage.getItem("access_token");
    const navigate = useNavigate();
    let rota="";
    const estaExpirado = (token) => {
        if(!token) return true; 
        try{
            const tokenDecodificado = jwtDecode(token);
            const tempoAtual = Date.now() / 1000;
            const {expira} = tokenDecodificado;
            return  tokenDecodificado.exp < tempoAtual;
        }
        catch(erro){
            console.error("Erro para conversão do token",erro);
            return true;
        }
    }
    useEffect (() =>{
        if(estaExpirado(user)){
            localStorage.removeItem("access_token");
            rota = "/usuarios/login";
            return navigate(rota);
        }
        else{
            return <Outlet/>
        }
    });
}

export default PrivateRoutes